import React, { useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence } from "motion/react"

import { useLanguage } from "@contexts/language-context"
import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"

import type { LightboxProps } from "./types"
import * as S from "./styles"

const Lightbox: React.FC<LightboxProps> = ({
  images,
  index,
  open,
  onClose,
  onIndexChange,
}) => {
  const { t } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<Element | null>(null)

  const total = images.length
  const current = images[index]

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total)
  }, [index, total, onIndexChange])

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total)
  }, [index, total, onIndexChange])

  // Lock body scroll and save/restore focus
  useEffect(() => {
    if (!open) return

    previousFocusRef.current = document.activeElement
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = ""
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus()
      }
    }
  }, [open])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft" && total > 1) {
        goPrev()
      } else if (e.key === "ArrowRight" && total > 1) {
        goNext()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open, total, goPrev, goNext, onClose])

  const backdropVariants = reducedMotion
    ? undefined
    : { hidden: { opacity: 0 }, visible: { opacity: 1 } }

  const imageVariants = reducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
      }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <S.Backdrop
          role="dialog"
          aria-modal="true"
          aria-label={t("a11y.lightboxClose")}
          variants={backdropVariants}
          initial={reducedMotion ? false : "hidden"}
          animate={reducedMotion ? {} : "visible"}
          exit={reducedMotion ? {} : "hidden"}
          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={handleBackdropClick}
        >
          {/* Close button */}
          <S.ControlButton
            ref={closeButtonRef}
            $placement="close"
            onClick={onClose}
            aria-label={t("a11y.lightboxClose")}
          >
            ✕
          </S.ControlButton>

          {/* Prev button */}
          {total > 1 && (
            <S.ControlButton
              $placement="prev"
              onClick={goPrev}
              aria-label={t("a11y.lightboxPrev")}
            >
              ←
            </S.ControlButton>
          )}

          {/* Next button */}
          {total > 1 && (
            <S.ControlButton
              $placement="next"
              onClick={goNext}
              aria-label={t("a11y.lightboxNext")}
            >
              →
            </S.ControlButton>
          )}

          {/* Image container */}
          <S.ImageContainer
            key={index}
            variants={imageVariants}
            initial={reducedMotion ? false : "hidden"}
            animate={reducedMotion ? {} : "visible"}
            exit={reducedMotion ? {} : "exit"}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {current && (
              <>
                <S.Image
                  src={current.src}
                  alt={current.caption ?? ""}
                />
                {current.caption && (
                  <S.Caption>{current.caption}</S.Caption>
                )}
              </>
            )}
          </S.ImageContainer>

          {/* Counter */}
          {total > 1 && (
            <S.Counter aria-live="polite">
              {index + 1} / {total}
            </S.Counter>
          )}
        </S.Backdrop>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default Lightbox
