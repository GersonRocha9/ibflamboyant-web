import { useEffect, useState } from 'react'
import {
  BabiesPDFFile,
  BabiesTable,
  PrayersPDFFile,
  PrayersTable,
} from './components'

import { FilePdf } from '@phosphor-icons/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_TOKEN,
)

interface PrayerRequestProps {
  created_at: string
  id: number
  name: string
  phone: string
  prayerRequest: string
}

enum WorshipDate {
  wednesday20 = 'Quarta-feira - 20h',
  sunday10 = 'Domingo - 10h',
  sunday18 = 'Domingo - 18h',
  sunday20 = 'Domingo - 20h',
}

interface BabiesPresentationProps {
  babyAge: string
  babyName: string
  created_at: string
  fatherName: string
  id: number
  isMember: boolean
  motherName: string
  phone: string
  worshipDate: keyof typeof WorshipDate
}

export function App() {
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequestProps[]>([])
  const [babiesPresentation, setBabiesPresentation] = useState<
    BabiesPresentationProps[]
  >([])

  async function getPrayerRequestsFromDatabase() {
    const { data: prayerRequests } = await supabase.from('prayers').select('*')

    prayerRequests?.sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })

    setPrayerRequests(prayerRequests as PrayerRequestProps[])
  }

  async function getBabiesPresentationFromDatabase() {
    const { data: babiesPresentation } = await supabase.from('baby').select('*')

    babiesPresentation?.sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })

    setBabiesPresentation(babiesPresentation as BabiesPresentationProps[])
  }

  useEffect(() => {
    getPrayerRequestsFromDatabase()
    getBabiesPresentationFromDatabase()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <div className="py-8">
        <div className="flex justify-between items-center mb-8">
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
      </div>

      <div className="py-8">
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
      </div>
    </div>
  )
}
