// Shared types for components

export interface SelectOption {
  value: any
  label: string
}

export type ValueRange = [number | undefined, number | undefined]

export interface ValueGraduated {
  from: number
  value: number
}
