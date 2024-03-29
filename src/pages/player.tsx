
import { ChatTeardrop, CaretDown, VideoCamera } from "@phosphor-icons/react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useEffect } from "react";
import { useCurrentLesson, useStore } from "../store";

export function Player() {

  const { course, load } = useStore(store => {
    return {
      course: store.course,
      load: store.load
    }
  })

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    load()
  }, [])



  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className='flex items-center gap-2 rounded bg-green-800 px-3 py-2 text-sm font-medium text-white hover:bg-green-900'>
            <ChatTeardrop className='w-4 h-4' />
            Deixar Feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg pr-80 border border-zinc-800 bg-zinc-900 shadow ">
          <div className="flex-1 ">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 border-l overflow-y-auto scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 border-zinc-800 bg-zinc-900 ">
            {course?.modules && course.modules.map((module, index) => (
              <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amountOfLessons={module.lessons.length} />
            ))}
          </aside>
        </main>
      </div>
    </div>
  )
}