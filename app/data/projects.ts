export type ProjectCategory = 'enterprise' | 'ecommerce' | 'realtime' | 'pwa' | 'open-source'

export interface ProjectEntry {
  id: string
  category: ProjectCategory
  stack: string[]
  links?: { github?: string; live?: string; caseStudy?: string }
  featured?: boolean
}

export const projects: ProjectEntry[] = [
  {
    id: 'sberCheckout',
    category: 'enterprise',
    stack: ['Vue 3', 'Nuxt 4', 'Nitro', 'Pinia Colada', 'gRPC', '2GIS MapGL', 'Storybook'],
    links: { caseStudy: '#experience' },
    featured: true
  },
  {
    id: 'supplyMonitoring',
    category: 'enterprise',
    stack: ['Vue 2', 'Bitrix24', 'REST API', 'SCSS']
  },
  {
    id: 'retailPwa',
    category: 'pwa',
    stack: ['Vue 3', 'Nuxt', 'Workbox', 'Firebase', 'Push API', 'Pinia'],
    featured: true
  },
  {
    id: 'marketplace',
    category: 'realtime',
    stack: ['Vue.js', 'Nuxt.js', 'WebSocket', 'JSON-RPC', 'Cordova'],
    featured: true
  },
  {
    id: 'asapMessenger',
    category: 'realtime',
    stack: ['Vue 2', 'Vuetify', 'REST', 'WebSocket', 'Docker']
  },
  {
    id: 'essentia',
    category: 'open-source',
    stack: ['Nuxt Module Kit', 'TypeScript', 'Essentia.js', 'Web Audio API'],
    links: { github: 'https://github.com/nikitakashin/nuxt-module-essentia' },
    featured: true
  }
]
