import React from 'react'
import { WorshipDate } from '../types'
import { convertDate } from '../utils'

interface TableProps {
  data:
    | {
        babyAge: string
        babyName: string
        created_at: string
        fatherName: string
        id: number
        isMember: boolean
        motherName: string
        phone: string
        worshipDate: keyof typeof WorshipDate
      }[]
    | undefined
}

export const BabiesTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Nome do bebê
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Idade
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Data da solicitação
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Mãe
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pai
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Telefone
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Data do culto
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            É membro?
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
              {item.babyName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.babyAge}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {convertDate(item.created_at)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.motherName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.fatherName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.phone}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {WorshipDate[item.worshipDate]}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.isMember ? 'Sim' : 'Não'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
