import { describe, it, expect } from "vitest"
import { iconSlugs } from "../skills"

describe("skill icon slugs", () => {
  it.each(iconSlugs)(
    "icon slug '%s' resolves on Simple Icons CDN",
    async (slug) => {
      const res = await fetch(`https://cdn.simpleicons.org/${slug}`)
      expect(res.status).toBe(200)
    },
    10_000,
  )
})
