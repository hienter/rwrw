import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn(
      "w-full bg-white border-b border-gray-200 shadow-sm",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                <h1 className="text-2xl font-bold italic text-gray-900" style={{ letterSpacing: '-0.2em' }}>
                  ㄱㅈㄱㅈ
                </h1>
                <span className="text-sm sm:text-lg font-medium text-gray-900">
                  가전 구매, 더이상 호갱당하지 맙시다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}