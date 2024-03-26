import { Skeleton } from "./ui/skeleton"

export const Loading = () => {
  return (
    <div className="rounded-md border my-10 flex flex-col items-center justify-center gap-y-1 max-w-4xl w-full mx-auto px-4">
      <div className=" flex items-center justify-between w-full">
        <Skeleton className="w-52 h-[40px] bg-neutral-100" />
        <div className="flex space-x-2 py-4">
          <Skeleton className="w-24 h-[36px] bg-neutral-100" />
          <Skeleton className="w-24 h-[36px] bg-neutral-100" />
        </div>
      </div>
      <Skeleton className="w-full h-[53px] bg-neutral-100" />
      <Skeleton className="w-full h-[53px] bg-neutral-100" />
      <Skeleton className="w-full h-[53px] bg-neutral-100" />
      <Skeleton className="w-full h-[53px] bg-neutral-100" />
      <Skeleton className="w-full h-[53px] bg-neutral-100" />
      <Skeleton className="w-full h-[53px] bg-neutral-100" />
      <Skeleton className="w-full h-[53px] bg-neutral-100" />
    </div>
  )
}
