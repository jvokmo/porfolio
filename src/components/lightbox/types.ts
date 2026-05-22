export type LightboxImage = {
  src: string
  caption?: string
}

export type LightboxProps = {
  images: LightboxImage[]
  index: number
  open: boolean
  onClose: () => void
  onIndexChange: (index: number) => void
}
