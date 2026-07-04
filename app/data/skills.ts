export interface SkillGroup {
  id: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { id: 'core', items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'OOP'] },
  { id: 'frameworks', items: ['Vue 2/3', 'Nuxt 2/3/4', 'Nitro', 'Pinia / Pinia Colada', 'Vuetify'] },
  { id: 'architecture', items: ['SSR/SSG', 'PWA', 'REST', 'JSON-RPC', 'gRPC/Protobuf', 'WebSocket', 'CSP'] },
  { id: 'tools', items: ['Vite', 'Gulp', 'Docker', 'Git', 'Storybook'] },
  { id: 'testing', items: ['Vitest', 'Playwright', 'Jest', 'Cypress', 'Selenium', 'Mocha'] },
  { id: 'ai', items: ['Cursor', 'Claude Code', 'LM Studio', 'Ollama', 'Whisper', 'n8n', 'OpenClaw', 'WebAssembly'] }
]
