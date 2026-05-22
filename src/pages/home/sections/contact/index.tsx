import React from "react"

import * as S from "./styles"
import { useLanguage } from "@contexts/language-context"

import SectionHeading from "@components/section-heading"
import Reveal from "@components/reveal"

type ContactEntry = {
  labelKey: string
  href: string
  meta: string
  external: boolean
}

const CONTACT_LINKS: ContactEntry[] = [
  {
    labelKey: "contact.emailLabel",
    href: "mailto:joao@jayvee.com.br",
    meta: "joao@jayvee.com.br",
    external: false,
  },
  {
    labelKey: "contact.linkedinLabel",
    href: "https://www.linkedin.com/in/joaovitorsantos-dev",
    meta: "linkedin.com/in/joaovitorsantos-dev",
    external: true,
  },
  {
    labelKey: "contact.githubLabel",
    href: "https://github.com/jvokmo",
    meta: "github.com/jvokmo",
    external: true,
  },
]

const Contact: React.FC = () => {
  const { t } = useLanguage()

  return (
    <S.Section id="contato">
      <S.Container>
        <S.Heading>
          <Reveal>
            <SectionHeading
              eyebrow={t("contact.eyebrow")}
              titleLead={t("contact.title")}
            />
          </Reveal>
        </S.Heading>

        <Reveal delay={0.08}>
          <S.Body>{t("contact.body")}</S.Body>
        </Reveal>

        <Reveal delay={0.12}>
          <S.LinkList>
            {CONTACT_LINKS.map((entry) => (
              <S.LinkItem key={entry.href}>
                <S.ContactLink
                  href={entry.href}
                  {...(entry.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <S.LinkLabel>{t(entry.labelKey)}</S.LinkLabel>
                  <S.LinkMeta>{entry.meta}</S.LinkMeta>
                  <S.LinkArrow aria-hidden="true">↗</S.LinkArrow>
                </S.ContactLink>
              </S.LinkItem>
            ))}
          </S.LinkList>
        </Reveal>
      </S.Container>
    </S.Section>
  )
}

export default Contact
