export type StyledProps<T> = {
  [K in keyof T as `$${string & K}`]: T[K]
}

export type CustomOmit<T, K extends keyof T> = Omit<T, K>

export type Require<T, K extends keyof T> = T & Required<Pick<T, K>>
