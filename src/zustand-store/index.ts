import { create } from "zustand";
import { api } from "../lib/axios";

interface Course {
  id: number,
  modules: {
    id: number,
    title: string,
    lessons: {
      id: string,
      title: string,
      duration: string,
    }[],
  }[],
}
export interface PlayerState {
  course: Course | null
  currentModuleIndex: number
  currentLessonIndex: number
  isLoading: boolean,
  play: (moduleAndLessonIndex: [number, number]) => void,
  next: () => void,
  load: () => Promise<void>,
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    course: null,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    isLoading: false,

    play: (moduleAndLessonIndex: [number, number]) => {
      const [moduleIndex, lessonIndex] = moduleAndLessonIndex
      set({
        currentModuleIndex: moduleIndex,
        currentLessonIndex: lessonIndex,
      }

      )
    },
    load: async () => {
      set({ isLoading: true })
      const response = await api.get('/courses/1')
      set({
        course: response.data,
        isLoading: false
      })
    },
    next: () => {

      const { currentLessonIndex, currentModuleIndex, course } = get()
      if (course && currentLessonIndex < course.modules[currentModuleIndex].lessons.length - 1) {
        set({ currentLessonIndex: currentLessonIndex + 1 })
      } else if (course) {
        set({ currentLessonIndex: 0 })
        set({ currentModuleIndex: currentModuleIndex + 1 })
      }
    },
  }
});

export const useCurrentLesson = () => {
  return useStore(state => {
    const { currentLessonIndex, currentModuleIndex } = state
    const currentModule = state.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}