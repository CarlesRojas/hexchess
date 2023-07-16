import { getUser } from "@/server/repo/User"
import { UserButton, auth } from "@clerk/nextjs"
import Loading from "./Loading"

const User = async () => {
  const { userId } = auth()
  const user = await getUser(userId)

  return (
    <div className="relative flex h-full w-full items-center gap-4 px-4">
      {user && (
        <>
          <div className="h-16 w-16 rounded-full bg-gray-500 opacity-50">
            <Loading />
          </div>

          <div className="itmes-center flex h-full flex-col justify-center">
            <p className="text-xl font-bold">{user.name}</p>
            <p className="text-xl font-medium opacity-60">{user.rating}</p>
          </div>

          <UserButton
            appearance={{
              elements: {
                rootBox: "absolute left-4",
                avatarBox: "h-14 w-14",
                userButtonAvatarBox:
                  "!h-16 !w-16 transition-transform hover:scale-110 outline-none drop-shadow-md",
                userButtonTrigger: "!shadow-none",
              },
            }}
          />
        </>
      )}
    </div>
  )
}

export default User
