import * as Collapsible from '@radix-ui/react-collapsible';

import { CaretDown } from "@phosphor-icons/react"
import { Lesson } from "./Lesson"
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { play } from '../store/slices/player';

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export const Module = ({ moduleIndex, title, amountOfLessons }: ModuleProps) => {
  const dispatch = useDispatch()

  const lessons = useAppSelector(state => state.player.course.modules[moduleIndex].lessons)


  return (
    <Collapsible.Root className='group '>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong>{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>
        <CaretDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6 ">
          {lessons.map((lesson, LessonIndex) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
              onPlay={() => dispatch(play([moduleIndex, LessonIndex]))}
            />
          ))}

        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
