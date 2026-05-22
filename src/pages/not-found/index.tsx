import React from "react"
import { Link } from "react-router-dom"

import { useLanguage } from "@contexts/language-context"
import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"

import * as S from "./styles"

const EASE = [0.25, 0.1, 0.25, 1] as const

const ENTER = { opacity: 0, y: 20 }
const VISIBLE = { opacity: 1, y: 0 }

const NotFound: React.FC = () => {
  const { t } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    return (
      <S.Page>
        <S.Inner>
          <S.Code initial={VISIBLE} animate={VISIBLE}>404</S.Code>
          <S.Title initial={VISIBLE} animate={VISIBLE}>{t("notFound.title")}</S.Title>
          <S.Body initial={VISIBLE} animate={VISIBLE}>{t("notFound.body")}</S.Body>
          <S.Cta initial={VISIBLE} animate={VISIBLE}>
            <S.CtaLink as={Link} to="/">{t("notFound.cta")}</S.CtaLink>
          </S.Cta>
        </S.Inner>
      </S.Page>
    )
  }

  return (
    <S.Page>
      <S.Inner>
        <S.Code
          initial={ENTER}
          animate={VISIBLE}
          transition={{ duration: 0.5, delay: 0, ease: EASE }}
        >
          404
        </S.Code>

        <S.Title
          initial={ENTER}
          animate={VISIBLE}
          transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
        >
          {t("notFound.title")}
        </S.Title>

        <S.Body
          initial={ENTER}
          animate={VISIBLE}
          transition={{ duration: 0.5, delay: 0.14, ease: EASE }}
        >
          {t("notFound.body")}
        </S.Body>

        <S.Cta
          initial={ENTER}
          animate={VISIBLE}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <S.CtaLink as={Link} to="/">
            {t("notFound.cta")}
          </S.CtaLink>
        </S.Cta>
      </S.Inner>
    </S.Page>
  )
}

export default NotFound
