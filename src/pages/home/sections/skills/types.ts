export type SkillGroupKey =
  | "frontendMobile"
  | "backend"
  | "database"
  | "messaging"
  | "infrastructure"
  | "domains"

export type SkillGroup = {
  key: SkillGroupKey
  // Each item is an i18n key resolved against `skills.items.*`
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    key: "frontendMobile",
    items: ["reactJs", "reactNative", "nextJs", "flutter", "typescript"],
  },
  {
    key: "backend",
    items: ["nodeJs", "typescript", "restApis", "paymentGatewayIntegrations"],
  },
  {
    key: "database",
    items: ["postgresql", "redis"],
  },
  {
    key: "messaging",
    items: ["apacheKafka"],
  },
  {
    key: "infrastructure",
    items: ["docker"],
  },
  {
    key: "domains",
    items: [
      "paymentIntermediation",
      "digitalMarketplace",
      "checkout",
      "fiscalIssuance",
      "highVolumeSystems",
    ],
  },
]
