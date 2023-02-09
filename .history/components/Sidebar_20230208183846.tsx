import { useSession } from "next-auth/react"
import NewChat from "./NewChat"

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/* New Chat */}
                <NewChat />

                <div>
                    {/* Model Selection */}
                </div>

                {/* Map Through Chat Rows */}
            </div>
        </div>

        {session && (
          <img src={session.user?.image!} alt="profile-pic" />
        )}
    </div>
  )
}

export default Sidebar