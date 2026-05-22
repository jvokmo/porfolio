import React from "react"
import { useLanguage } from "@contexts/language-context"
import SectionHeading from "@components/section-heading"
import Reveal from "@components/reveal"

import { SKILL_GROUPS } from "./types"
import * as S from "./styles"

const Skills: React.FC = () => {
  const { t } = useLanguage()

  return (
    <S.Section>
      <S.Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("skills.eyebrow")}
            titleLead={t("skills.title")}
          />
        </Reveal>

        <S.GroupsGrid>
          {SKILL_GROUPS.map((group, groupIndex) => (
            <Reveal key={group.key} delay={groupIndex * 0.08}>
              <S.Group>
                <S.GroupTitle>{t(`skills.groups.${group.key}`)}</S.GroupTitle>
                <S.ChipList>
                  {group.items.map((item) => (
                    <S.Chip key={item}>{t(`skills.items.${item}`)}</S.Chip>
                  ))}
                </S.ChipList>
              </S.Group>
            </Reveal>
          ))}
        </S.GroupsGrid>
      </S.Container>
    </S.Section>
  )
}

export default Skills
