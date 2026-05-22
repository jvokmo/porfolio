import React from "react"
import { useLanguage } from "@contexts/language-context"
import SectionHeading from "@components/section-heading"
import Reveal from "@components/reveal"

import * as S from "./styles"

const About: React.FC = () => {
  const { t } = useLanguage()

  return (
    <S.Section>
      <S.Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("about.eyebrow")}
            titleLead={t("about.titleLead")}
            emphasis={t("about.emphasis")}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <S.Body>{t("about.body")}</S.Body>
        </Reveal>
      </S.Container>
    </S.Section>
  )
}

export default About
