import React, { useState, useCallback, useRef, useEffect } from "react"
import { AnimatePresence } from "motion/react"
import type { Variants } from "motion/react"

import * as S from "./styles"
import type { CarouselProps } from "./types"
import { useLanguage } from "@contexts/language-context"

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"

const SWIPE_THRESHOLD = 40
const SPRING = { type: "spring" as const, stiffness: 320, damping: 32 }

type Direction = 1 | -1

const Carousel: React.FC<CarouselProps> = ({
  images,
  orientation,
  pendingLabel,
  onImageClick,
  label = "",
}) => {
  const reducedMotion = usePrefersReducedMotion()
  const { t } = useLanguage()

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<Direction>(1)
  const rootRef = useRef<HTMLDivElement>(null)
  const dragStart = useRef<number | null>(null)

  const total = images.length
  const current = images[index]
  const hasRealSrc = !!current?.src
  const prevLabel = t("a11y.carouselPrev")
  const nextLabel = t("a11y.carouselNext")
  const slideTransition = reducedMotion ? { duration: 0 } : SPRING
  const slideVariants: Variants | undefined = reducedMotion
    ? undefined
    : {
        enter: (d: Direction) => ({ x: d * 60, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: Direction) => ({ x: d * -60, opacity: 0 }),
      }

  const go = useCallback(
    (dir: Direction) => {
      setDirection(dir)
      setIndex((prev) => (prev + dir + total) % total)
    },
    [total],
  )
  const goPrev = useCallback(() => go(-1), [go])
  const goNext = useCallback(() => go(1), [go])

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return
    const delta = dragStart.current - e.clientX
    dragStart.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    if (delta > 0) goNext()
    else goPrev()
  }

  // Keyboard navigation when carousel is focused
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev() }
      if (e.key === "ArrowRight") { e.preventDefault(); goNext() }
    }
    el.addEventListener("keydown", handler)
    return () => el.removeEventListener("keydown", handler)
  }, [goPrev, goNext])

  const slideContent = (
    <S.SlidesClip
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <S.Slide
          key={index}
          custom={direction}
          variants={slideVariants}
          initial={reducedMotion ? false : "enter"}
          animate="center"
          exit={reducedMotion ? undefined : "exit"}
          transition={slideTransition}
          $clickable={hasRealSrc && !!onImageClick}
          onClick={hasRealSrc && onImageClick ? () => onImageClick(index) : undefined}
          aria-label={current?.caption}
        >
          {!current?.src ? (
            <S.SlidePlaceholder>
              <S.PlaceholderInitial>{(label || "?").charAt(0).toUpperCase()}</S.PlaceholderInitial>
              <S.PlaceholderNote>{pendingLabel}</S.PlaceholderNote>
            </S.SlidePlaceholder>
          ) : (
            <SlideImage src={current.src} alt={current.caption ?? ""} />
          )}
        </S.Slide>
      </AnimatePresence>
    </S.SlidesClip>
  )

  if (orientation === "portrait") {
    return (
      <S.Root
        ref={rootRef}
        $orientation="portrait"
        role="group"
        aria-roledescription="carousel"
        tabIndex={0}
      >
        <S.Stage $orientation="portrait">
          {total > 1 && (
            <S.NavButton $orientation="portrait" data-dir="prev" onClick={goPrev} aria-label={prevLabel}>
              ←
            </S.NavButton>
          )}

          <S.SlideFrame $orientation="portrait">
            {slideContent}
          </S.SlideFrame>

          {total > 1 && (
            <S.NavButton $orientation="portrait" data-dir="next" onClick={goNext} aria-label={nextLabel}>
              →
            </S.NavButton>
          )}
        </S.Stage>

        <S.Footer>
          <S.Caption>{current?.caption ?? ""}</S.Caption>
          {total > 1 && (
            <S.Indicator>
              <S.Counter aria-live="polite">{index + 1} / {total}</S.Counter>
              {total <= 7 && (
                <S.Dots>
                  {images.map((_, i) => (
                    <S.Dot
                      key={i}
                      $active={i === index}
                      onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </S.Dots>
              )}
            </S.Indicator>
          )}
        </S.Footer>
      </S.Root>
    )
  }

  // Landscape
  return (
    <S.Root
      ref={rootRef}
      $orientation="landscape"
      role="group"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      <S.LandscapeOuter>
        {total > 1 && (
          <S.NavButton $orientation="landscape" data-dir="prev" onClick={goPrev} aria-label={prevLabel}>
            ←
          </S.NavButton>
        )}

        <S.SlideFrame $orientation="landscape">
          {slideContent}
        </S.SlideFrame>

        {total > 1 && (
          <S.NavButton $orientation="landscape" data-dir="next" onClick={goNext} aria-label={nextLabel}>
            →
          </S.NavButton>
        )}
      </S.LandscapeOuter>

      <S.Footer>
        <S.Caption>{current?.caption ?? ""}</S.Caption>
        {total > 1 && (
          <S.Indicator>
            <S.Counter aria-live="polite">{index + 1} / {total}</S.Counter>
            {total <= 7 && (
              <S.Dots>
                {images.map((_, i) => (
                  <S.Dot
                    key={i}
                    $active={i === index}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </S.Dots>
            )}
          </S.Indicator>
        )}
      </S.Footer>
    </S.Root>
  )
}

// ─── Slide image with error fallback ─────────────────────────────────────────

type SlideImageProps = { src: string; alt: string }

const SlideImage: React.FC<SlideImageProps> = ({ src, alt }) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <S.SlidePlaceholder>
        <S.PlaceholderInitial>?</S.PlaceholderInitial>
      </S.SlidePlaceholder>
    )
  }

  return <S.SlideImg src={src} alt={alt} onError={() => setError(true)} />
}

export default Carousel
