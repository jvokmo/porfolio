import React from "react"
import type { Variants } from "motion/react"

import { useLanguage } from "@contexts/language-context"
import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"
import Magnetic from "@components/magnetic"
import ParticleField from "@components/particle-field"

import * as S from "./styles"

const STAGGER = 0.09
const WORD_Y = 28
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const MailIcon: React.FC = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <rect x="1" y="3" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M1 4.5 L6.5 8 L12 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

const LinkedInIcon: React.FC = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
    <line x1="4" y1="5.5" x2="4" y2="10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="4" cy="3.8" r="0.75" fill="currentColor" />
    <path d="M6.5 7.2 C6.5 6.3 7 5.5 8 5.5 C9 5.5 9 6.4 9 7.2 L9 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

const GitHubIcon: React.FC = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path
      d="M6.5 1C3.46 1 1 3.46 1 6.5c0 2.43 1.57 4.49 3.75 5.22.27.05.37-.12.37-.26v-.93c-1.52.33-1.84-.73-1.84-.73-.25-.63-.61-.8-.61-.8-.5-.34.04-.33.04-.33.55.04.84.57.84.57.49.84 1.28.6 1.59.46.05-.36.19-.6.35-.74-1.21-.14-2.49-.6-2.49-2.69 0-.59.21-1.08.56-1.46-.06-.14-.24-.69.05-1.44 0 0 .46-.15 1.5.56A5.2 5.2 0 016.5 4.4c.46 0 .93.06 1.37.18 1.04-.71 1.5-.56 1.5-.56.29.75.11 1.3.05 1.44.35.38.56.87.56 1.46 0 2.1-1.28 2.55-2.5 2.69.2.17.37.5.37.99v1.48c0 .14.1.32.37.26A5.5 5.5 0 0012 6.5C12 3.46 9.54 1 6.5 1z"
      fill="currentColor"
    />
  </svg>
)

const Hero: React.FC = () => {
  const { t } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()

  const name = t("hero.name")
  const nameWords = name.split(" ")

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: WORD_Y },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reducedMotion
        ? { duration: 0 }
        : { duration: 0.55, delay: i * STAGGER, ease: EASE },
    }),
  }

  const afterHeadlineDelay = nameWords.length * STAGGER + 0.12

  return (
    <S.Section id="topo">
      <S.CanvasBackground aria-hidden="true">
        <ParticleField />
      </S.CanvasBackground>

      <S.Container>
        <S.Badge
          initial={reducedMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.45, ease: EASE }}
        >
          <S.BadgeDot aria-hidden="true" />
          {t("hero.badge")}
        </S.Badge>

        <S.HeadlineWrapper aria-label={name}>
          {nameWords.map((word, i) => (
            <S.NameSpan
              key={`name-${i}`}
              custom={i}
              initial={reducedMotion ? false : "hidden"}
              animate="visible"
              variants={wordVariant}
              aria-hidden="true"
            >
              {word}
            </S.NameSpan>
          ))}
        </S.HeadlineWrapper>

        <S.RoleLine
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.45, delay: afterHeadlineDelay, ease: EASE }}
        >
          {t("hero.role")}
        </S.RoleLine>

        <S.Intro
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.45, delay: afterHeadlineDelay + 0.1, ease: EASE }}
        >
          {t("hero.intro")}
        </S.Intro>

        <S.CtaRow
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.45, delay: afterHeadlineDelay + 0.2, ease: EASE }}
        >
          <Magnetic strength={0.18}>
            <S.CtaButton $primary href="#contato">
              {t("hero.ctaContact")}
            </S.CtaButton>
          </Magnetic>
          <Magnetic strength={0.15}>
            <S.CtaButton href="#projetos">
              {t("hero.ctaProjects")}
            </S.CtaButton>
          </Magnetic>
        </S.CtaRow>

        <S.SocialRow
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.45, delay: afterHeadlineDelay + 0.32, ease: EASE }}
        >
          <S.SocialLink
            href="mailto:joaoxdvitor33@gmail.com"
            aria-label={t("hero.emailLabel")}
          >
            <MailIcon />
            {t("hero.emailLabel")}
          </S.SocialLink>
          <S.SocialLink
            href="https://www.linkedin.com/in/joaovitorsantos-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.linkedinLabel")}
          >
            <LinkedInIcon />
            {t("hero.linkedinLabel")}
          </S.SocialLink>
          <S.SocialLink
            href="https://github.com/jvokmo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.githubLabel")}
          >
            <GitHubIcon />
            {t("hero.githubLabel")}
          </S.SocialLink>
        </S.SocialRow>
      </S.Container>

      <S.ScrollIndicator
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: afterHeadlineDelay + 0.5 }}
        aria-hidden="true"
      >
        <S.ScrollLabel>{t("hero.scrollHint")}</S.ScrollLabel>
        <S.ScrollLine />
      </S.ScrollIndicator>
    </S.Section>
  )
}

export default Hero
