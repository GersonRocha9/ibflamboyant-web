import { BabiesPDFFile, BabiesTable } from '../components'

import { FilePdf } from '@phosphor-icons/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { useQuery } from '@tanstack/react-query'
import { fetchBabiesPresentation } from '../services/api'
import { BabiesPresentationProps } from '../types'

export function BabyPresentation() {
  const { data: babiesPresentation, isLoading: babyLoading } = useQuery<
    BabiesPresentationProps[]
  >(['baby'], fetchBabiesPresentation)

  return (
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
  )
}
