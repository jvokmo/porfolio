import React, { useState } from "react"

import * as S from "./keed-split-layout-styles"

import { useLanguage } from "@contexts/language-context"

import Reveal from "@components/reveal"
import Lightbox from "@components/lightbox"
import Carousel from "@components/carousel"
import type { LightboxImage } from "@components/lightbox/types"

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"
import type { Project, ProjectSubProject, ProjectGalleryImage } from "@data/projects"

// ─── Mobile gallery image (portrait 9:16, shown in a row) ────────────────────

type MobileImageItemProps = {
  image: ProjectGalleryImage
  label: string
  pendingLabel: string
  index: number
  onClick?: () => void
}

const MobileImageItem: React.FC<MobileImageItemProps> = ({
  image,
  label,
  pendingLabel,
  index,
  onClick,
}) => {
  const { t } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()
  
  const [imgError, setImgError] = useState(false)

  const showPlaceholder = !image.src || imgError
  const isClickable = !showPlaceholder && !!onClick

  return (
    <Reveal delay={index * 0.08}>
      <S.MobileItem>
        <S.MobileImageWrapper
          $clickable={isClickable}
          onClick={isClickable ? onClick : undefined}
        >
          {showPlaceholder ? (
            <S.MobilePlaceholder>
              <S.MobilePlaceholderInitial>
                {label.charAt(0).toUpperCase()}
              </S.MobilePlaceholderInitial>
              <S.MobilePlaceholderNote>{pendingLabel}</S.MobilePlaceholderNote>
            </S.MobilePlaceholder>
          ) : (
            <S.MobileImg
              src={image.src}
              alt={t(image.captionKey)}
              onError={() => setImgError(true)}
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            />
          )}
        </S.MobileImageWrapper>
        <S.MobileCaption>{t(image.captionKey)}</S.MobileCaption>
      </S.MobileItem>
    </Reveal>
  )
}

// ─── Product blocks ───────────────────────────────────────────────────────────

type PlatformBlockProps = {
  sub: ProjectSubProject
  index: number
  pendingLabel: string
}

const PlatformBlock: React.FC<PlatformBlockProps> = ({
  sub,
  index,
  pendingLabel,
}) => {
  const { t } = useLanguage()
  const label = t(sub.nameKey)
  const [lbOpen, setLbOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)

  const lbImages: LightboxImage[] = sub.gallery
    .filter((img) => img.src)
    .map((img) => ({ src: img.src, caption: t(img.captionKey) }))

  const handleImageClick = (carouselIdx: number) => {
    let lbIdx = -1
    for (let k = 0; k <= carouselIdx; k++) {
      if (sub.gallery[k]?.src) lbIdx++
    }
    if (lbIdx >= 0) {
      setLbIndex(lbIdx)
      setLbOpen(true)
    }
  }

  return (
    <S.ProductSection>
      <S.ProductHeader>
        <Reveal>
          <div>
            <S.ProductEyebrow>
              {String(index + 1).padStart(2, "0")}
            </S.ProductEyebrow>
            <S.ProductName>{label}</S.ProductName>
          </div>
        </Reveal>
        <Reveal delay={0.07}>
          <div>
            <S.ProductDescription>{t(sub.descriptionKey)}</S.ProductDescription>
            {sub.stack.length > 0 && (
              <S.ProductStackRow>
                {sub.stack.map((tech) => (
                  <S.ProductStackTag key={tech}>{tech}</S.ProductStackTag>
                ))}
              </S.ProductStackRow>
            )}
          </div>
        </Reveal>
      </S.ProductHeader>

      <Reveal delay={0.05}>
        <Carousel
          images={sub.gallery.map((img) => ({
            src: img.src,
            caption: t(img.captionKey),
          }))}
          orientation="landscape"
          pendingLabel={pendingLabel}
          label={label}
          onImageClick={handleImageClick}
        />
      </Reveal>

      <Lightbox
        images={lbImages}
        index={lbIndex}
        open={lbOpen}
        onClose={() => setLbOpen(false)}
        onIndexChange={setLbIndex}
      />
    </S.ProductSection>
  )
}

type MobileBlockProps = {
  sub: ProjectSubProject
  index: number
  pendingLabel: string
}

const MobileBlock: React.FC<MobileBlockProps> = ({
  sub,
  index,
  pendingLabel,
}) => {
  const { t } = useLanguage()
  const label = t(sub.nameKey)
  const [lbOpen, setLbOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)

  const lbImages: LightboxImage[] = sub.gallery
    .filter((img) => img.src)
    .map((img) => ({ src: img.src, caption: t(img.captionKey) }))

  const handleImageClick = (carouselIdx: number) => {
    let lbIdx = -1
    for (let k = 0; k <= carouselIdx; k++) {
      if (sub.gallery[k]?.src) lbIdx++
    }
    if (lbIdx >= 0) {
      setLbIndex(lbIdx)
      setLbOpen(true)
    }
  }

  return (
    <S.ProductSection>
      <S.ProductHeader>
        <Reveal>
          <div>
            <S.ProductEyebrow>
              {String(index + 1).padStart(2, "0")}
            </S.ProductEyebrow>
            <S.ProductName>{label}</S.ProductName>
          </div>
        </Reveal>
        <Reveal delay={0.07}>
          <div>
            <S.ProductDescription>{t(sub.descriptionKey)}</S.ProductDescription>
            {sub.stack.length > 0 && (
              <S.ProductStackRow>
                {sub.stack.map((tech) => (
                  <S.ProductStackTag key={tech}>{tech}</S.ProductStackTag>
                ))}
              </S.ProductStackRow>
            )}
          </div>
        </Reveal>
      </S.ProductHeader>

      <S.MobileGrid>
        {sub.gallery.map((image, i) => (
          <MobileImageItem
            key={image.captionKey}
            image={image}
            label={label}
            pendingLabel={pendingLabel}
            index={i}
            onClick={image.src ? () => handleImageClick(i) : undefined}
          />
        ))}
      </S.MobileGrid>

      <Lightbox
        images={lbImages}
        index={lbIndex}
        open={lbOpen}
        onClose={() => setLbOpen(false)}
        onIndexChange={setLbIndex}
      />
    </S.ProductSection>
  )
}

// ─── Split layout root ────────────────────────────────────────────────────────

type KeedSplitLayoutProps = {
  project: Project
  pendingLabel: string
  reducedMotion: boolean
}

const KeedSplitLayout: React.FC<KeedSplitLayoutProps> = ({
  project,
  pendingLabel,
}) => {
  const { t } = useLanguage()

  return (
    <>
      <S.IntroSection>
        <Reveal>
          <S.IntroLabel>{t("projectPage.overview")}</S.IntroLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <S.IntroBody>{t(project.overviewKey)}</S.IntroBody>
        </Reveal>
      </S.IntroSection>

      {project.subProjects?.map((sub, i) =>
        sub.kind === "platform" ? (
          <PlatformBlock
            key={sub.id}
            sub={sub}
            index={i}
            pendingLabel={pendingLabel}
          />
        ) : (
          <MobileBlock
            key={sub.id}
            sub={sub}
            index={i}
            pendingLabel={pendingLabel}
          />
        )
      )}
    </>
  )
}

export default KeedSplitLayout
