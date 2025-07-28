import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FiltersProps {
  regions: string[]
  selectedRegion: string
  onRegionChange: (region: string) => void
  sortBy?: 'click_count' | 'event_end'
  onSortChange?: (sort: 'click_count' | 'event_end') => void
  showSort?: boolean
}

export function Filters({ 
  regions, 
  selectedRegion, 
  onRegionChange, 
  sortBy, 
  onSortChange, 
  showSort = false 
}: FiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">지역:</label>
        <Select value={selectedRegion} onValueChange={onRegionChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="지역 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            {regions.map(region => (
              <SelectItem key={region} value={region}>{region}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {showSort && sortBy && onSortChange && (
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">정렬:</label>
          <Select value={sortBy} onValueChange={(value) => onSortChange(value as 'click_count' | 'event_end')}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="정렬 방식" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="click_count">견적 요청 많은 순</SelectItem>
              <SelectItem value="event_end">행사 기간 많이 남은 순</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  )
}