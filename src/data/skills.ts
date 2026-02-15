// Skills sourced from: GitHub repos (github.com/rico157), CV, and professional experience at Thirst
import type { SkillCategory } from "@/types/portfolio"

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "shadcn/ui" },
      { name: "Storybook", icon: "storybook" },
      { name: "styled-components", icon: "styledcomponents" },
      { name: "Astro", icon: "astro" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React Query", icon: "reactquery" },
    ],
  },
  {
    name: "Backend & AWS",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "AWS Lambda" },
      { name: "GraphQL", icon: "graphql" },
      { name: "DynamoDB" },
      { name: "SQS" },
      { name: "Step Functions" },
      { name: "Bedrock" },
      { name: "Amplify" },
      { name: "CDK" },
      { name: "Express", icon: "express" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    name: "Testing",
    skills: [
      { name: "Vitest", icon: "vitest" },
      { name: "Jest", icon: "jest" },
      { name: "Cypress", icon: "cypress" },
      { name: "Percy" },
      { name: "React Testing Library", icon: "testinglibrary" },
    ],
  },
  {
    name: "Tooling",
    skills: [
      { name: "Git", icon: "git" },
      { name: "CI/CD" },
      { name: "ESLint", icon: "eslint" },
      { name: "VS Code" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "Swift", icon: "swift" },
      { name: "SwiftUI" },
      { name: "SwiftData" },
      { name: "React Native" },
    ],
  },
  {
    name: "AI-Assisted Dev",
    skills: [
      { name: "Claude Code", icon: "anthropic" },
      { name: "GitHub Copilot", icon: "githubcopilot" },
      { name: "OpenAI Codex", icon: "openai" },
      { name: "Amazon Bedrock" },
    ],
  },
]

export const iconSlugs = skillCategories
  .flatMap((cat) => cat.skills)
  .map((skill) => skill.icon)
  .filter((icon): icon is string => icon !== undefined)
