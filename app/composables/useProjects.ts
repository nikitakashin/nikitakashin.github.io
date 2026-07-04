import { projects, type ProjectCategory } from '~/data/projects'

export function useProjects() {
  const activeFilter = ref<ProjectCategory | 'all'>('all')

  const availableFilters = computed<Array<ProjectCategory | 'all'>>(() => {
    const categories = new Set(projects.map((project) => project.category))
    return ['all', ...categories]
  })

  const filteredProjects = computed(() =>
    activeFilter.value === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter.value)
  )

  return { activeFilter, availableFilters, filteredProjects }
}
