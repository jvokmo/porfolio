import React from "react";
import type { Variants } from "motion/react";

import * as S from "./styles";
import { useLanguage } from "@contexts/language-context";

import Magnetic from "@components/magnetic";
import ParticleField from "@components/particle-field";

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion";

import MailIcon from "@assets/icons/socials/mail-icon.svg?react";
import LinkedInIcon from "@assets/icons/socials/linkedin-icon.svg?react";
import GitHubIcon from "@assets/icons/socials/github-icon.svg?react";

const STAGGER = 0.09;
const WORD_Y = 28;
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const Hero: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useLanguage();

  const name = t("hero.name");
  const nameWords = name.split(" ");

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: WORD_Y },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reducedMotion
        ? { duration: 0 }
        : { duration: 0.55, delay: i * STAGGER, ease: EASE },
    }),
  };

  const afterHeadlineDelay = nameWords.length * STAGGER + 0.12;

  return (
    <S.Section id="topo">
      <S.CanvasBackground aria-hidden="true">
        <ParticleField />
      </S.CanvasBackground>

      <S.Container>
        <S.Badge
          initial={reducedMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reducedMotion ? { duration: 0 } : { duration: 0.45, ease: EASE }
          }
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
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.45, delay: afterHeadlineDelay, ease: EASE }
          }
        >
          {t("hero.role")}
        </S.RoleLine>

        <S.Intro
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.45, delay: afterHeadlineDelay + 0.1, ease: EASE }
          }
        >
          {t("hero.intro")}
        </S.Intro>

        <S.CtaRow
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.45, delay: afterHeadlineDelay + 0.2, ease: EASE }
          }
        >
          <Magnetic strength={0.18}>
            <S.CtaButton $primary href="#contato">
              {t("hero.ctaContact")}
            </S.CtaButton>
          </Magnetic>
          <Magnetic strength={0.15}>
            <S.CtaButton href="#projetos">{t("hero.ctaProjects")}</S.CtaButton>
          </Magnetic>
        </S.CtaRow>

        <S.SocialRow
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.45, delay: afterHeadlineDelay + 0.32, ease: EASE }
          }
        >
          <S.SocialLink
            href="mailto:joao@jayvee.com.br"
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
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 0.6, delay: afterHeadlineDelay + 0.5 }
        }
        aria-hidden="true"
      >
        <S.ScrollLabel>{t("hero.scrollHint")}</S.ScrollLabel>
        <S.ScrollLine />
      </S.ScrollIndicator>
    </S.Section>
  );
};

export default Hero;
