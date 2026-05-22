import React, { useState } from "react"
import { motion } from "motion/react"

import { useLanguage } from "@contexts/language-context"
import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"
import SectionHeading from "@components/section-heading"
import Reveal from "@components/reveal"
import Magnetic from "@components/magnetic"
import { projects } from "@data/projects"
import type { Project } from "@data/projects"

import * as S from "./styles"

// ─── Cover contents (image or placeholder) ────────────────────────────────────

interface CoverContentsProps {
  cover: string
  title: string
  index: number
}

const CoverContents: React.FC<CoverContentsProps> = ({ cover, title, index }) => {
  const { t } = useLanguage()
  const [imgError, setImgError] = useState(false)
  const showPlaceholder = !cover || imgError
  const number = String(index + 1).padStart(2, "0")

  if (showPlaceholder) {
    return (
      <S.CoverPlaceholder>
        <S.PlaceholderInitial>{number}</S.PlaceholderInitial>
        <S.PlaceholderNote>{t("projects.screenshotPending")}</S.PlaceholderNote>
      </S.CoverPlaceholder>
    )
  }

  return (
    <S.CoverImage
      src={cover}
      alt={title}
      onError={() => setImgError(true)}
    />
  )
}

// ─── Single project block ─────────────────────────────────────────────────────

interface ProjectBlockProps {
  project: Project
  index: number
  reducedMotion: boolean
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ project, index, reducedMotion }) => {
  const { t } = useLanguage()
  const reversed = index % 2 === 1
  const hasDuration = !!project.durationKey

  return (
    <S.Block
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <S.BlockGrid $reversed={reversed}>
        {/* ── Cover ── */}
        <motion.div
          style={{ gridArea: "cover" }}
          initial={reducedMotion ? false : { opacity: 0, x: reversed ? 32 : -32 }}
          whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <S.CoverLink to={`/projetos/${project.slug}`} aria-label={project.title} tabIndex={-1}>
            <S.CoverWrap
              whileHover={reducedMotion ? {} : { scale: 1.015 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <CoverContents cover={project.cover} title={project.title} index={index} />
            </S.CoverWrap>
          </S.CoverLink>
        </motion.div>

        {/* ── Info ── */}
        <motion.div
          style={{ gridArea: "info" }}
          initial={reducedMotion ? false : { opacity: 0, x: reversed ? -24 : 24 }}
          whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <S.InfoPanel>
            <S.ProjectNumber aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </S.ProjectNumber>

            <S.TitleGroup>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.Tagline>{t(project.taglineKey)}</S.Tagline>
            </S.TitleGroup>

            <S.MetaRow>
              {hasDuration && (
                <>
                  <S.MetaValue>{t(project.durationKey!)}</S.MetaValue>
                  <S.MetaSep>·</S.MetaSep>
                </>
              )}
              <S.MetaValue>{project.year}</S.MetaValue>
            </S.MetaRow>

            <S.TagChips>
              {project.tagsKeys.map((tagKey) => (
                <S.TagChip key={tagKey}>{t(tagKey)}</S.TagChip>
              ))}
            </S.TagChips>

            <S.CtaRow>
              <Magnetic strength={0.1}>
                <S.CtaLink to={`/projetos/${project.slug}`}>
                  {t("projects.viewProject")}
                  <S.Arrow
                    whileHover={reducedMotion ? {} : { x: 5 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    aria-hidden="true"
                  >
                    →
                  </S.Arrow>
                </S.CtaLink>
              </Magnetic>
            </S.CtaRow>
          </S.InfoPanel>
        </motion.div>
      </S.BlockGrid>
    </S.Block>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

const Projects: React.FC = () => {
  const { t } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()

  return (
    <S.Section id="projetos">
      <S.Container>
        <S.Heading>
          <Reveal>
            <SectionHeading
              eyebrow={t("projects.eyebrow")}
              titleLead={t("projects.title")}
            />
          </Reveal>
        </S.Heading>

        <S.Gallery aria-label={t("projects.title")}>
          {projects.map((project, index) => (
            <ProjectBlock
              key={project.id}
              project={project}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </S.Gallery>
      </S.Container>
    </S.Section>
  )
}

export default Projects
