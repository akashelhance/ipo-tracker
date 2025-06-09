interface CompanyAddressProps {
  name: string
  address: string
  phone: string
  email: string
  website: string
}

export function CompanyAddress({ name, address, phone, email, website }: CompanyAddressProps) {
  if (!name && !address && !phone && !email && !website) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">🏢 Company Address</h2>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        {name && (
          <p>
            <span className="font-semibold text-gray-900">Company Name: </span>
            {name}
          </p>
        )}
        {address && (
          <p>
            <span className="font-semibold text-gray-900">Address: </span>
            {address}
          </p>
        )}
        {phone && (
          <p>
            <span className="font-semibold text-gray-900">Phone: </span>
            {phone}
          </p>
        )}
        {email && (
          <p>
            <span className="font-semibold text-gray-900">Email: </span>
            <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 underline">
              {email}
            </a>
          </p>
        )}
        {website && (
          <p>
            <span className="font-semibold text-gray-900">Website: </span>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {website}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
