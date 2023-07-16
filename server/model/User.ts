import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core"

export const User = pgTable("user", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  rating: integer("rating").default(1200).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
})
