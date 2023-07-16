import { DeletedObjectJSON, UserJSON } from "@clerk/nextjs/dist/types/server"
import { eq } from "drizzle-orm"
import { db } from "../database/database"
import { User } from "../model/User"

export const getUser = async (id: string | null) => {
  if (!id) return null
  const user = await db.select().from(User).where(eq(User.id, id)).limit(1)
  return user.length > 0 ? user[0] : null
}

export const createUser = async (user: UserJSON) => {
  const name = `${user.first_name} ${user.last_name}`

  await db
    .insert(User)
    .values({ id: user.id, name })
    .onConflictDoUpdate({ target: User.id, set: { name } })
}

export const deleteUser = async (user: DeletedObjectJSON) => {
  if (!user.id) return
  await db.delete(User).where(eq(User.id, user.id))
}
