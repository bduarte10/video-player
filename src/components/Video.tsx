import ReactPlayer from "react-player"
import { Spinner } from "@phosphor-icons/react"
import { useCurrentLesson, useStore } from "../zustand-store"


export const Video = () => {

  const { currentLesson } = useCurrentLesson()
  const { isLoading, next } = useStore()

  function handlePlayNext() {
    next()
  }
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Spinner size={32} className="animate-spin" />
        </div>
      )
        :
        (

          <ReactPlayer
            width="100%"
            height="100%"
            controls
            playing
            onEnded={handlePlayNext}
            url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          />
        )
      }
    </div>
  )
}
