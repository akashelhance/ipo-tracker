interface IpoRegistrarDetailsProps {
  name: string
  phone: string
  email: string
  website: string
}

export function IpoRegistrarDetails({ name, phone, email, website }: IpoRegistrarDetailsProps) {
  if (!name && !phone && !email && !website) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">🧾 Oswal Pumps IPO Registrar</h2>

      <div className="space-y-4">
        {name && (
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold text-gray-900 w-20 mb-1 sm:mb-0">Name:</span>
            <span className="text-gray-700">{name}</span>
          </div>
        )}
        {phone && (
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold text-gray-900 w-20 mb-1 sm:mb-0">Phone:</span>
            <span className="text-gray-700">{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold text-gray-900 w-20 mb-1 sm:mb-0">Email:</span>
            <span className="text-gray-700">{email}</span>
          </div>
        )}
        {website && (
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold text-gray-900 w-20 mb-1 sm:mb-0">Website:</span>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {website}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
