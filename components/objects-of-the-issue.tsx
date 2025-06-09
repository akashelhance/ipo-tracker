interface ObjectsOfTheIssueProps {
  points: string[]
}

export function ObjectsOfTheIssue({ points }: ObjectsOfTheIssueProps) {
  if (!points || points.length === 0) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">📌 Objects of the Issue</h2>

      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span className="text-gray-700 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
