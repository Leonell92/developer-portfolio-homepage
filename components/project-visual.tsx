import { ProjectMockup } from './project-mockup'
import { ProjectScreenshots } from './project-screenshots'
import type { Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

interface ProjectVisualProps {
  project: Pick<Project, 'variant' | 'screenshots'>
  className?: string
  mockupClassName?: string
}

export function ProjectVisual({ project, className, mockupClassName }: ProjectVisualProps) {
  if (project.screenshots?.length) {
    return (
      <ProjectScreenshots screenshots={project.screenshots} className={className} />
    )
  }

  return (
    <ProjectMockup variant={project.variant} className={cn(mockupClassName, className)} />
  )
}
