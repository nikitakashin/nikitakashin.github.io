export interface SkillGroup {
  id: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { id: 'languages', items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'Go', 'HTML5', 'CSS3 / SCSS'] },
  { id: 'frameworks', items: ['Vue 2/3', 'Nuxt 2/3/4', 'Nitro', 'Pinia / Pinia Colada', 'Vuetify', 'Django', 'FastAPI', 'Gin'] },
  {
    id: 'architecture',
    items: [
      'System Design',
      'Software Architecture',
      'SSR/SSG',
      'PWA',
      'REST API Design',
      'Backend Architecture',
      'gRPC/Protobuf',
      'WebSocket',
      'CSP'
    ]
  },
  { id: 'backend', items: ['Django', 'Go', 'REST', 'JSON-RPC', 'gRPC/Protobuf', 'FastAPI'] },
  { id: 'ai', items: ['AI Engineering', 'LLMs', 'Prompt Engineering', 'RAG', 'MCP', 'Whisper'] },
  { id: 'testing', items: ['Vitest', 'Playwright', 'Jest', 'Cypress', 'Selenium', 'Mocha'] },
  { id: 'infrastructure', items: ['Docker', 'Vite', 'Git', 'Storybook', 'Gulp'] },
  { id: 'devTools', items: ['Cursor', 'Claude Code', 'Ollama', 'LM Studio', 'n8n', 'OpenClaw'] }
]
