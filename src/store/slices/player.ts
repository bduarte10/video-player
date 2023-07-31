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
  isLoading: boolean
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: false,
}


export const loadCourse = createAsyncThunk('player/loadCourse',
  async () => {
   const response = await api.get('/courses/1')
   return response.data
  })

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCourse.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(loadCourse.fulfilled, (state, action: PayloadAction<Course>) => {
      state.course = action.payload
      state.isLoading = false
    })
  }
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

