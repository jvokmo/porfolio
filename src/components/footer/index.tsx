import React from "react"

import * as S from "./styles"
import { useLanguage } from "@contexts/language-context"

import Logo from "@components/logo"

const EMAIL = "joaoxdvitor33@gmail.com"
const LINKEDIN = "https://www.linkedin.com/in/joaovitorsantos-dev"
const GITHUB = "https://github.com/jvokmo"

const Footer: React.FC = () => {
  const { t } = useLanguage()

  const year = new Date().getFullYear()

  return (
    <S.Wrapper>
      <S.Inner>
        <S.LinksRow>
          <S.FooterLink href={`mailto:${EMAIL}`}>
            {t("contact.emailLabel")}
          </S.FooterLink>
          <S.FooterLink
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact.linkedinLabel")}
          </S.FooterLink>
          <S.FooterLink
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contact.githubLabel")}
          </S.FooterLink>
        </S.LinksRow>

        <S.Bottom>
          <S.Rights>
            &copy; {year} — {t("footer.rights")}
          </S.Rights>
          <S.Wordmark>
            <Logo />
          </S.Wordmark>
        </S.Bottom>
      </S.Inner>
    </S.Wrapper>
  )
}

export default Footer
