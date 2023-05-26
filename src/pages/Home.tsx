import {
  BabiesPDFFile,
  BabiesTable,
  PrayersPDFFile,
  PrayersTable,
} from '../components'
import { fetchBabiesPresentation, fetchPrayerRequests } from '../services/api'
import { BabiesPresentationProps, PrayerRequestProps } from '../types'

import { FilePdf } from '@phosphor-icons/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { useQuery } from '@tanstack/react-query'

export function Home() {
  const { data: prayerRequests, isLoading: prayerLoading } = useQuery<
    PrayerRequestProps[]
  >(['prayers'], fetchPrayerRequests)

  const { data: babiesPresentation, isLoading: babyLoading } = useQuery<
    BabiesPresentationProps[]
  >(['baby'], fetchBabiesPresentation)

  return (
    <div className="container mx-auto px-4">
      <div className="py-8">
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

      <div className="py-8">
        {babyLoading ? (
          <div className="flex justify-center items-center">
            <p className="text-3xl font-bold text-center text-gray-900">
              Carregando
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-center text-gray-900">
                Apresentação de bebês
              </h1>

              <PDFDownloadLink
                document={
                  <BabiesPDFFile babiesPresentations={babiesPresentation} />
                }
                fileName="apresentacao-de-bebes.pdf"
              >
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  <FilePdf size={28} />
                </button>
              </PDFDownloadLink>
            </div>

            <BabiesTable data={babiesPresentation} />
          </>
        )}
      </div>
    </div>
  )
}
