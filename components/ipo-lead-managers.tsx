interface IpoLeadManagersProps {
  managers: string[]
}

export function IpoLeadManagers({ managers }: IpoLeadManagersProps) {
  if (!managers || managers.length === 0) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">💼 IPO Lead Managers aka Merchant Bankers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {managers.map((manager, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100"
          >
            <p className="text-gray-700 font-medium">{manager}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
