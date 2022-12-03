export interface HeroError {
  value: string,
  msg: string,
  param: string,
  location: string,
}

export interface ApiError {
  errors: HeroError[],
}
