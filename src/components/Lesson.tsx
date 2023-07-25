import { VideoCamera } from "@phosphor-icons/react"

interface LessonProps {
  title: string
  duration: string
  onPlay: () => void
}

export const Lesson = ({title, duration, onPlay}: LessonProps) => {

  return (
    <button onClick={onPlay} className="flex items-center gap-3 text-sm text-zinc-400">
    <VideoCamera className="w-4 h-4 text-zinc-500" />
    <span>{title}</span>
    <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}