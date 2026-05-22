import React from "react"
import { useLanguage } from "@contexts/language-context"

import * as S from "./styles"

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <S.Button onClick={toggleLanguage} aria-label={t("a11y.languageToggle")}>
      <S.Label $active={language === "pt-BR"}>PT</S.Label>
      <S.Divider>/</S.Divider>
      <S.Label $active={language === "en"}>EN</S.Label>
    </S.Button>
  )
}

export default LanguageToggle
