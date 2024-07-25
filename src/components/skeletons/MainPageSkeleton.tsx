import React from 'react'

type MainPageSkeletonProps = Record<string, never>

const MainPageSkeleton: React.FC<MainPageSkeletonProps> = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="skeleton h-4 w-"></div>
          <div className="skeleton h-4"></div>
          <div className="skeleton h-4"></div>
        </div>
      </div>
      <div className="skeleton h-48 md:h-80 w-full my-4"></div>
    </div>
  )
}

export { MainPageSkeleton }
