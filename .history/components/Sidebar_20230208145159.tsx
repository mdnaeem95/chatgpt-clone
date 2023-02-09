import NewChat from "./NewChat"

function Sidebar() {
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
    </div>
  )
}

export default Sidebar