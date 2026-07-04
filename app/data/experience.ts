export interface ExperienceEntry {
  id: string
  company: string
  companyUrl?: string
  location: string
  dateStart: string
  dateEnd: string | null
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'sber',
    company: 'Сбер',
    companyUrl: 'https://www.sberbank.ru',
    location: 'Moscow',
    dateStart: '2025-04',
    dateEnd: null,
    stack: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Nitro', 'Pinia', 'Pinia Colada', 'SCSS', 'gRPC/Protobuf', 'Storybook', 'Vitest', 'Playwright', 'Docker']
  },
  {
    id: 'itech',
    company: 'ITECH.group',
    location: 'Moscow',
    dateStart: '2023-01',
    dateEnd: '2025-04',
    stack: ['Vue 2', 'Vue 3', 'Nuxt', 'TypeScript', 'Workbox', 'Vite', 'SCSS', 'Firebase', 'Pinia', 'PWA', 'Bitrix24']
  },
  {
    id: 'sci',
    company: 'SCI Technology Inc.',
    companyUrl: 'https://scitechnologyinc.com',
    location: 'Remote',
    dateStart: '2021-10',
    dateEnd: '2022-12',
    stack: ['Vue.js', 'Nuxt.js', 'JavaScript (ES6+)', 'WebSocket', 'JSON-RPC', 'Cordova']
  },
  {
    id: 'sfera',
    company: 'SFERA INC',
    location: 'Remote',
    dateStart: '2020-10',
    dateEnd: '2021-09',
    stack: ['Vue 2', 'Vuetify', 'WebSocket', 'Django', 'Go', 'Gin', 'Docker']
  },
  {
    id: 'weblancer',
    company: 'Weblancer',
    location: 'Remote',
    dateStart: '2016-09',
    dateEnd: '2020-09',
    stack: ['HTML5', 'CSS3/SASS', 'JavaScript', 'jQuery', 'PHP', 'WordPress', 'DLE', 'Gulp']
  }
]
