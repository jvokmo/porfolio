import React, { useState, useEffect, useRef } from "react"
import { useParams, Navigate } from "react-router-dom"
import { motion, useScroll, useTransform } from "motion/react"

import * as S from "./styles"
import { useLanguage } from "@contexts/language-context"

import Reveal from "@components/reveal"
import Magnetic from "@components/magnetic"
import Lightbox from "@components/lightbox"
import Carousel from "@components/carousel"
import KeedSplitLayout from "./sections/keed-split-layout"

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"
import { projects } from "@data/projects"

const EASE = [0.25, 0.1, 0.25, 1] as const

// ─── Cover image with parallax ────────────────────────────────────────────────


type CoverImageProps = {
  src: string
  title: string
  pendingLabel: string
  reducedMotion: boolean
}

const CoverImage: React.FC<CoverImageProps> = ({ src, title, pendingLabel, reducedMotion }) => {
  const [imgError, setImgError] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 60])

  const showPlaceholder = !src || imgError

  return (
    <S.CoverImageWrapper ref={wrapperRef}>
      {showPlaceholder ? (
        <S.CoverPlaceholder>
          <S.PlaceholderInitial>{title.charAt(0).toUpperCase()}</S.PlaceholderInitial>
          <S.PlaceholderNote>{pendingLabel}</S.PlaceholderNote>
        </S.CoverPlaceholder>
      ) : (
        <S.CoverImg
          src={src}
          alt={title}
          style={{ y }}
          onError={() => setImgError(true)}
        />
      )}
    </S.CoverImageWrapper>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const reducedMotion = usePrefersReducedMotion()
  const { t } = useLanguage()

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  const projectIndex = projects.findIndex((p) => p.slug === slug)
  if (projectIndex === -1) {
    return <Navigate to="/" replace />
  }

  const project = projects[projectIndex]
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1]
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0]

  const pendingLabel = t("projects.screenshotPending")

  return (
    <S.Page>
      {/* ── Cover ─────────────────────────────────────────────────────────── */}
      <S.CoverSection>
        <S.Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <S.CoverMeta>
              <S.CoverYear>{project.year}</S.CoverYear>
              <S.CoverRole>{t(project.roleKey)}</S.CoverRole>
            </S.CoverMeta>

            <S.CoverTitle>{project.title}</S.CoverTitle>

            <S.CoverTagline>{t(project.taglineKey)}</S.CoverTagline>

            <S.CoverTags>
              {project.tagsKeys.map((key) => (
                <S.CoverTag key={key}>{t(key)}</S.CoverTag>
              ))}
            </S.CoverTags>

            {project.url && (
              <S.CoverLinks>
                <Magnetic strength={0.15}>
                  <S.CoverLinkButton
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="primary"
                  >
                    ↗ {t("projectPage.liveLink")}
                  </S.CoverLinkButton>
                </Magnetic>
              </S.CoverLinks>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            <CoverImage
              src={project.cover}
              title={project.title}
              pendingLabel={pendingLabel}
              reducedMotion={reducedMotion}
            />
          </motion.div>
        </S.Container>
      </S.CoverSection>

      {/* ── Content: split layout (KeedPay) or standard case study ────────── */}
      {project.subProjects ? (
        <S.Container>
          <KeedSplitLayout
            project={project}
            pendingLabel={pendingLabel}
            reducedMotion={reducedMotion}
          />
        </S.Container>
      ) : (
        <>
          {/* ── Overview ────────────────────────────────────────────────── */}
          <S.ContentSection>
            <S.Container>
              <Reveal>
                <S.SectionLabel>{t("projectPage.overview")}</S.SectionLabel>
              </Reveal>
              <S.OverviewGrid>
                <Reveal delay={0.05}>
                  <S.SectionBody>{t(project.overviewKey)}</S.SectionBody>
                </Reveal>

                <Reveal delay={0.1}>
                  <S.MetaBlock>
                    <S.MetaItem>
                      <S.MetaLabel>{t("projectPage.year")}</S.MetaLabel>
                      <S.MetaValue>{project.year}</S.MetaValue>
                    </S.MetaItem>

                    <S.MetaItem>
                      <S.MetaLabel>{t("projectPage.role")}</S.MetaLabel>
                      <S.MetaValue>{t(project.roleKey)}</S.MetaValue>
                    </S.MetaItem>

                    <S.MetaItem>
                      <S.MetaLabel>{t("projectPage.stack")}</S.MetaLabel>
                      <S.StackChips>
                        {project.stack.map((tech) => (
                          <S.StackChip key={tech}>{tech}</S.StackChip>
                        ))}
                      </S.StackChips>
                    </S.MetaItem>
                  </S.MetaBlock>
                </Reveal>
              </S.OverviewGrid>
            </S.Container>
          </S.ContentSection>

          {/* ── Challenge ───────────────────────────────────────────────── */}
          <S.ContentSection>
            <S.Container>
              <Reveal>
                <S.SectionLabel>{t("projectPage.challenge")}</S.SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <S.SectionBody>{t(project.challengeKey)}</S.SectionBody>
              </Reveal>
            </S.Container>
          </S.ContentSection>

          {/* ── Process ─────────────────────────────────────────────────── */}
          <S.ContentSection>
            <S.Container>
              <Reveal>
                <S.SectionLabel>{t("projectPage.process")}</S.SectionLabel>
              </Reveal>
              <S.ProcessList>
                {project.processStepsKeys.map((stepKey, i) => (
                  <S.ProcessItem
                    key={stepKey}
                    initial={reducedMotion ? false : { opacity: 0, x: -16 }}
                    whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.1,
                      ease: EASE,
                    }}
                  >
                    <S.ProcessNumber>{String(i + 1).padStart(2, "0")}</S.ProcessNumber>
                    <S.ProcessText>{t(stepKey)}</S.ProcessText>
                  </S.ProcessItem>
                ))}
              </S.ProcessList>
            </S.Container>
          </S.ContentSection>

          {/* ── Gallery ─────────────────────────────────────────────────── */}
          <S.ContentSection>
            <S.Container>
              <Reveal>
                <S.SectionLabel>{t("projectPage.gallery")}</S.SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <Carousel
                  images={project.gallery.map((img) => ({
                    src: img.src,
                    caption: t(img.captionKey),
                  }))}
                  orientation="landscape"
                  pendingLabel={pendingLabel}
                  label={project.title}
                  onImageClick={(carouselIdx) => {
                    // Map carousel index (full gallery) to lightbox index (real-src only)
                    let lbIdx = -1
                    for (let k = 0; k <= carouselIdx; k++) {
                      if (project.gallery[k]?.src) lbIdx++
                    }
                    if (lbIdx >= 0) {
                      setLightboxIndex(lbIdx)
                      setLightboxOpen(true)
                    }
                  }}
                />
              </Reveal>
            </S.Container>
          </S.ContentSection>

          {/* ── Outcome ─────────────────────────────────────────────────── */}
          <S.ContentSection>
            <S.Container>
              <Reveal>
                <S.SectionLabel>{t("projectPage.outcome")}</S.SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <S.SectionBody>{t(project.outcomeKey)}</S.SectionBody>
              </Reveal>
            </S.Container>
          </S.ContentSection>
        </>
      )}

      {/* ── Gallery lightbox (standard projects) ──────────────────────────── */}
      {!project.subProjects && (
        <Lightbox
          images={project.gallery
            .filter((img) => img.src)
            .map((img) => ({ src: img.src, caption: t(img.captionKey) }))}
          index={lightboxIndex}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setLightboxIndex}
        />
      )}

      {/* ── Pager ─────────────────────────────────────────────────────────── */}
      <S.PagerSection aria-label={t("projectPage.projectNavigation")}>
        <S.Container>
          <S.PagerInner>
            <Magnetic strength={0.12}>
              <S.PagerBackLink to="/#projetos">
                ← {t("projectPage.backToProjects")}
              </S.PagerBackLink>
            </Magnetic>

            <S.PagerNeighbors>
              {prevProject && prevProject.slug !== project.slug && (
                <Magnetic strength={0.08}>
                  <S.PagerLink to={`/projetos/${prevProject.slug}`}>
                    <S.PagerLinkDirection $align="left">
                      ← {t("projectPage.prevProject")}
                    </S.PagerLinkDirection>
                    <S.PagerLinkTitle $align="left">{prevProject.title}</S.PagerLinkTitle>
                  </S.PagerLink>
                </Magnetic>
              )}

              {nextProject && nextProject.slug !== project.slug && (
                <Magnetic strength={0.08}>
                  <S.PagerLink to={`/projetos/${nextProject.slug}`}>
                    <S.PagerLinkDirection $align="right">
                      {t("projectPage.nextProject")} →
                    </S.PagerLinkDirection>
                    <S.PagerLinkTitle $align="right">{nextProject.title}</S.PagerLinkTitle>
                  </S.PagerLink>
                </Magnetic>
              )}
            </S.PagerNeighbors>
          </S.PagerInner>
        </S.Container>
      </S.PagerSection>
    </S.Page>
  )
}

export default ProjectDetail
