import React, { useId } from "react"
import { motion } from "motion/react"
import { useTheme } from "styled-components"

import * as S from "./styles"
import type { SectionHeadingProps } from "./types"

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  titleLead,
  emphasis,
  titleTail,
  as,
}) => {
  const reducedMotion = usePrefersReducedMotion()
  const uid = useId()
  const theme = useTheme()

  return (
    <S.Wrapper>
      <S.Eyebrow>{eyebrow}</S.Eyebrow>

      <S.Title as={as}>
        {titleLead}{emphasis ? " " : ""}
        {emphasis && (
          <S.Emphasis>
            {emphasis}
            <S.UnderlineSvg
              viewBox="0 0 100 6"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M0,3 Q25,0 50,3 Q75,6 100,3"
                fill="none"
                stroke={theme.colors.accent}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.6, ease: "easeOut", delay: 0.2 }
                }
                key={uid}
              />
            </S.UnderlineSvg>
          </S.Emphasis>
        )}
        {titleTail ? ` ${titleTail}` : ""}
      </S.Title>
    </S.Wrapper>
  )
}

export default SectionHeading
