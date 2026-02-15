export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl?: string
  gradient?: string
  category?: string
  liveUrl?: string
  sourceUrl?: string
  featured: boolean
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon?: string
}