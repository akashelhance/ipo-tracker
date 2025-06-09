import { format } from "date-fns"

interface BlogDateProps {
  date: string
}

export default function BlogDate({ date }: BlogDateProps) {
  const formattedDate = format(new Date(date), "MMMM dd, yyyy")

  return (
    <time dateTime={date} className="text-gray-600 text-sm font-medium mb-6 block">
      Published on {formattedDate}
    </time>
  )
}
