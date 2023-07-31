import { useCurrentLesson, useStore } from "../store"

export const Header = () => {
  const isLoading = useStore(state => state.isLoading)

  const {currentModule, currentLesson} = useCurrentLesson()	
  return (
    <div className="flex flex-col gap-1">
    <h1 className="text-2xl font-bold">{isLoading ? 'Carregando..' : currentLesson?.title}</h1>
    <span className="text-sm text-zinc-400">{!isLoading && `Módulo "${currentModule?.title}"`}</span>
  </div>
  )
}
