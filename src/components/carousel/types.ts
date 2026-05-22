export type CarouselSlide = {
  src: string
  caption?: string
}

export type CarouselProps = {
  images: CarouselSlide[]
  orientation: "landscape" | "portrait"
  pendingLabel: string
  onImageClick?: (index: number) => void
  label?: string
}
