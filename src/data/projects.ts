import keedCover from "@src/assets/projects/keed/keed-cover.png"
import notaFlowCover from "@src/assets/projects/nota-flow/nota-flow-cover.png"

const keedImages = import.meta.glob<string>(
  "../assets/projects/keed/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
)

function keedImage(base: string): string {
  for (const path of Object.keys(keedImages)) {
    const filename = path.split("/").pop() ?? ""
    const stem = filename.replace(/\.[^.]+$/, "")
    if (stem === base) return keedImages[path] as string
  }
  return ""
}

const ferrusImages = import.meta.glob<string>(
  "../assets/projects/ferrus/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
)

function ferrusImage(base: string): string {
  for (const path of Object.keys(ferrusImages)) {
    const filename = path.split("/").pop() ?? ""
    const stem = filename.replace(/\.[^.]+$/, "")
    if (stem === base) return ferrusImages[path] as string
  }
  return ""
}

const notaFlowImages = import.meta.glob<string>(
  "../assets/projects/nota-flow/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
)

function notaFlowImage(base: string): string {
  for (const path of Object.keys(notaFlowImages)) {
    const filename = path.split("/").pop() ?? ""
    const stem = filename.replace(/\.[^.]+$/, "")
    if (stem === base) return notaFlowImages[path] as string
  }
  return ""
}

export type ProjectGalleryImage = { src: string; captionKey: string }

export type ProjectSubProject = {
  id: string
  kind: "platform" | "mobile"
  nameKey: string
  descriptionKey: string
  stack: string[]
  gallery: ProjectGalleryImage[]
}

export type Project = {
  id: string
  slug: string
  title: string
  year: string
  tagsKeys: string[]
  cover: string
  taglineKey: string
  overviewKey: string
  roleKey: string
  challengeKey: string
  processStepsKeys: string[]
  gallery: ProjectGalleryImage[]
  outcomeKey: string
  stack: string[]
  url?: string
  durationKey?: string
  subProjects?: ProjectSubProject[]
}

export const projects: Project[] = [
  {
    id: "keedpay",
    slug: "keedpay",
    title: "KeedPay",
    year: "2021",
    tagsKeys: [
      "projectDetails.keedpay.tag.1",
      "projectDetails.keedpay.tag.2",
      "projectDetails.keedpay.tag.3",
    ],
    cover: keedCover,
    taglineKey: "projectDetails.keedpay.tagline",
    overviewKey: "projectDetails.keedpay.overview",
    roleKey: "projectDetails.keedpay.role",
    challengeKey: "projectDetails.keedpay.challenge",
    processStepsKeys: [
      "projectDetails.keedpay.process.1",
      "projectDetails.keedpay.process.2",
      "projectDetails.keedpay.process.3",
    ],
    gallery: [
      { src: "", captionKey: "projectDetails.keedpay.gallery.1" },
      { src: "", captionKey: "projectDetails.keedpay.gallery.2" },
      { src: "", captionKey: "projectDetails.keedpay.gallery.3" },
    ],
    outcomeKey: "projectDetails.keedpay.outcome",
    stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Redis"],
    durationKey: "projectDetails.keedpay.duration",
    subProjects: [
      {
        id: "keed-platform",
        kind: "platform",
        nameKey: "projectDetails.keed.platform.name",
        descriptionKey: "projectDetails.keed.platform.description",
        stack: ["React", "Vite", "TypeScript", "Node.js", "Kafka", "Redis", "React Hooks", "PostgreSQL"],
        gallery: [
          { src: keedImage("keed-image-1"), captionKey: "projectDetails.keed.platform.gallery.1" },
          { src: keedImage("keed-image-2"), captionKey: "projectDetails.keed.platform.gallery.2" },
          { src: keedImage("keed-image-3"), captionKey: "projectDetails.keed.platform.gallery.3" },
        ],
      },
      {
        id: "keed-mobile",
        kind: "mobile",
        nameKey: "projectDetails.keed.mobile.name",
        descriptionKey: "projectDetails.keed.mobile.description",
        stack: ["Flutter"],
        gallery: [
          { src: keedImage("keed-mobile-1"), captionKey: "projectDetails.keed.mobile.gallery.1" },
          { src: keedImage("keed-mobile-2"), captionKey: "projectDetails.keed.mobile.gallery.2" },
          { src: keedImage("keed-mobile-3"), captionKey: "projectDetails.keed.mobile.gallery.3" },
        ],
      },
    ],
  },
  {
    id: "nota-flow",
    slug: "nota-flow",
    title: "NotaFlow",
    year: "2024",
    tagsKeys: [
      "projectDetails.nota-flow.tag.1",
      "projectDetails.nota-flow.tag.2",
      "projectDetails.nota-flow.tag.3",
    ],
    cover: notaFlowCover,
    taglineKey: "projectDetails.nota-flow.tagline",
    overviewKey: "projectDetails.nota-flow.overview",
    roleKey: "projectDetails.nota-flow.role",
    challengeKey: "projectDetails.nota-flow.challenge",
    processStepsKeys: [
      "projectDetails.nota-flow.process.1",
      "projectDetails.nota-flow.process.2",
      "projectDetails.nota-flow.process.3",
    ],
    gallery: [
      { src: notaFlowImage("nota-flow-image-1"), captionKey: "projectDetails.nota-flow.gallery.1" },
      { src: notaFlowImage("nota-flow-image-2"), captionKey: "projectDetails.nota-flow.gallery.2" },
      { src: notaFlowImage("nota-flow-image-3"), captionKey: "projectDetails.nota-flow.gallery.3" },
    ],
    outcomeKey: "projectDetails.nota-flow.outcome",
    stack: ["React", "Vite", "TypeScript", "React Hooks", "BullMQ", "Node.js", "PostgreSQL"],
    durationKey: "projectDetails.nota-flow.duration",
  },
  {
    id: "ferrus",
    slug: "ferrus",
    title: "Ferrus",
    year: "2025",
    tagsKeys: [
      "projectDetails.ferrus.tag.1",
      "projectDetails.ferrus.tag.2",
      "projectDetails.ferrus.tag.3",
    ],
    cover: ferrusImage("ferrus-cover"),
    taglineKey: "projectDetails.ferrus.tagline",
    overviewKey: "projectDetails.ferrus.overview",
    roleKey: "projectDetails.ferrus.role",
    challengeKey: "projectDetails.ferrus.challenge",
    processStepsKeys: [
      "projectDetails.ferrus.process.1",
      "projectDetails.ferrus.process.2",
      "projectDetails.ferrus.process.3",
    ],
    gallery: [
      { src: "", captionKey: "projectDetails.ferrus.gallery.1" },
      { src: "", captionKey: "projectDetails.ferrus.gallery.2" },
      { src: "", captionKey: "projectDetails.ferrus.gallery.3" },
    ],
    outcomeKey: "projectDetails.ferrus.outcome",
    stack: ["Flutter"],
    durationKey: "projectDetails.ferrus.duration",
    subProjects: [
      {
        id: "ferrus-mobile",
        kind: "mobile",
        nameKey: "projectDetails.ferrus.mobile.name",
        descriptionKey: "projectDetails.ferrus.mobile.description",
        stack: ["Flutter"],
        gallery: [
          { src: ferrusImage("ferrus-image-1"), captionKey: "projectDetails.ferrus.mobile.gallery.1" },
          { src: ferrusImage("ferrus-image-2"), captionKey: "projectDetails.ferrus.mobile.gallery.2" },
          { src: ferrusImage("ferrus-image-3"), captionKey: "projectDetails.ferrus.mobile.gallery.3" },
        ],
      },
    ],
  },
]
