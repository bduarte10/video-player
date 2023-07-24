
import { ChatTeardrop, CaretDown, VideoCamera } from "@phosphor-icons/react";
import ReactPlayer from "react-player";

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
        <main className="relative flex overflow-hidden rounded-lg pr-80 border border-zinc-800 bg-zinc-900 shadow ">
          <div className="flex-1 ">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
              width="100%"	
              height="100%"
              controls
              url='https://www.youtube.com/watch?v=_shA5Xwe8_4&ab_channel=Fireship'
              />
            </div>
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 border-l overflow-y-auto scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 border-zinc-800 bg-zinc-900 ">
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</div>
                <div className="flex flex-col gap-1 text-left">
                  <strong>Desvendando Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>
                <CaretDown  className="w-5 h-5 ml-auto text-zinc-400"/>
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
              </nav>
            </div>
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</div>
                <div className="flex flex-col gap-1 text-left">
                  <strong>Desvendando Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>
                <CaretDown  className="w-5 h-5 ml-auto text-zinc-400"/>
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
              </nav>
            </div>
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</div>
                <div className="flex flex-col gap-1 text-left">
                  <strong>Desvendando Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>
                <CaretDown  className="w-5 h-5 ml-auto text-zinc-400"/>
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoCamera className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}