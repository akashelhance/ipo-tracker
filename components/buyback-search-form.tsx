import { Search } from "lucide-react"

interface BuybackSearchFormProps {
  defaultValue?: string
}

export function BuybackSearchForm({ defaultValue }: BuybackSearchFormProps) {
  return (
    <form method="GET" className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          name="search"
          placeholder="Search companies..."
          defaultValue={defaultValue}
          className="pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none w-full sm:w-64 bg-white/80 backdrop-blur-sm shadow-lg"
        />
      </div>
    </form>
  )
}
