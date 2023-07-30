import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useAppSelector } from '..'
import { api } from '../../lib/axios'
import { useDispatch } from 'react-redux'

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
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}


export const loadCourse = createAsyncThunk('start',
  async () => {
    api.get('/courses/1')
      .then(response => {
        console.log(response.data)
      })
  })

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<Course>) => {
      state.course = action.payload
    },
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      if (state.course && state.currentLessonIndex < state.course.modules[state.currentModuleIndex].lessons.length - 1) {
        state.currentLessonIndex++
      } else if (state.course) {
        state.currentLessonIndex = 0
        state.currentModuleIndex++
      }
    }
  }
})

export const player = playerSlice.reducer
export const { play, next, start } = playerSlice.actions

export const useCurrentLesson = () => {
  return useAppSelector(state => {
    const { currentLessonIndex, currentModuleIndex } = state.player
    const currentModule = state.player.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}