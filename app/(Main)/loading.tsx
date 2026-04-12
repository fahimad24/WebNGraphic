import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-Ttext opacity-75 blur"></div>
        <div className="relative flex flex-col items-center justify-center gap-4 p-8 bg-white dark:bg-gray-950 rounded-lg shadow-xl">
          <div className="flex items-center justify-center">
            <Loader2 className="h-12 w-12 text-Ttext animate-spin" />
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Loading your creative canvas
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Preparing your visual experience...
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="h-2 w-2 rounded-full bg-Ttext animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 rounded-full bg-Ttext animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 rounded-full bg-Ttext animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
