import type { Config } from "drizzle-kit"

export default {
  schema: "./server/model/*",
  out: "./server/database",
  dbCredentials: {
    connectionString: process.env.DB_URL ?? "",
  },
} satisfies Config
