import { PrayersPDFFile, PrayersTable } from '../components'

import { FilePdf } from '@phosphor-icons/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { useQuery } from '@tanstack/react-query'
import { fetchPrayerRequests } from '../services/api'
import { PrayerRequestProps } from '../types'

export function PrayersPresentation() {
  const { data: prayerRequests, isLoading: prayerLoading } = useQuery<
    PrayerRequestProps[]
  >(['prayers'], fetchPrayerRequests)

  return (
    <div className="py-8 px-4 w-full mx-auto">
      {prayerLoading ? (
        <div className="flex justify-center items-center">
          <p className="text-3xl font-bold text-center text-gray-900">
            Carregando
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-8 space-x-4">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Pedidos de oração
            </h1>

            <PDFDownloadLink
              document={<PrayersPDFFile prayerRequests={prayerRequests} />}
              fileName="pedidos-de-oracao.pdf"
            >
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <FilePdf size={28} />
              </button>
            </PDFDownloadLink>
          </div>

          <PrayersTable data={prayerRequests} />
        </>
      )}
    </div>
  )
}
