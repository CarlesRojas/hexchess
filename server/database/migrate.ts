import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"
import { exit } from "process"

const connectionString = process.env.DB_URL ?? ""
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql)

const main = async () => {
  console.log("Migrating...")
  try {
    await migrate(db, { migrationsFolder: "./server/database" })
    console.log("Migration complete!")
    exit(0)
  } catch (error) {
    console.log((error as Error).message)
    console.log("Migration failed!")
    exit(1)
  }
}

main()
