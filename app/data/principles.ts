export type PrincipleSpan = 'wide' | 'normal'

export interface PrincipleLayout {
  span: PrincipleSpan
}

/** Bento layout for 7 principles — wide cards create visual hierarchy. */
export const principleLayout: PrincipleLayout[] = [
  { span: 'wide' },
  { span: 'normal' },
  { span: 'normal' },
  { span: 'normal' },
  { span: 'wide' },
  { span: 'normal' },
  { span: 'normal' }
]
