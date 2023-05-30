import { convertDate, limitCharacters } from '../utils'

import React from 'react'

interface TableProps {
  data:
    | {
        created_at: string
        id: number
        name: string
        phone: string
        prayerRequest: string
      }[]
    | undefined
}

export const PrayersTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Criado em
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Nome
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Telefone
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pedido de oração
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data?.map((item, index) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {index + 1}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {convertDate(item.created_at)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.phone}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {limitCharacters(item.prayerRequest)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
