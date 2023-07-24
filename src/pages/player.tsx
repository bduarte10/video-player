
import { ChatTeardrop, CaretDown } from "@phosphor-icons/react";
export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">redux</h1>
            <span className="text-sm text-zinc-400">Módulo 1</span>
          </div>
          <button className='flex items-center gap-2 rounded bg-green-800 px-3 py-2 text-sm font-medium text-white hover:bg-green-900'>
            <ChatTeardrop className='w-4 h-4' />
            Deixar Feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow ">
          <div className="flex-1 ">
            video
          </div>
          <aside className="w-80 border-l border-zinc-800 bg-zinc-900 h-[600px]">
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</div>
                <div className="flex flex-col gap-1 text-left">
                  <strong>Desvendando Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>
                <CaretDown  className="w-4 h-4 ml-auto"/>

              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}