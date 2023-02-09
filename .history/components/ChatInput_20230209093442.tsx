"use client"

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
    chatId: string;
  }

function ChatInput({ chatId } : Props) {
    const [prompt, setPrompt] = useState("")

  return (
    <div className="bg-gray-700/50 text-gray-400 rouned-lg text-sm">
        <form className="p-5 space-x-5 flex">
            <input value={prompt} type="text" placeholder="Type your message here..." onChange={(e) => setPrompt(e.target.value)} className="bg-transparent focus:outline-none flex-1"/>
            <button type="submit">
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>
            </button>
        </form>

        <div>
            {/* Model Selection */}
        </div>
    </div>
  )
}

export default ChatInput