import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer'

import { WorshipDate } from '../types'

interface BabiesPresentationProps {
  babiesPresentations:
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

export function BabiesPDFFile({
  babiesPresentations,
}: BabiesPresentationProps) {
  return (
    <Document>
      <Page style={{ ...styles.body, backgroundColor: '#fff' }}>
        {babiesPresentations?.map((baby, index) => {
          return (
            <div key={index} style={styles.itemContainer}>
              <Text style={styles.text}>
                {`Nome: ${baby.babyName}\nIdade: ${baby.babyAge}\nMãe: ${
                  baby.motherName
                }\nPai: ${baby.fatherName}\nTelefone: ${baby.phone}\nMembro: ${
                  baby.isMember ? 'Sim' : 'Não'
                }\nCulto: ${WorshipDate[baby.worshipDate]}`}
              </Text>
            </div>
          )
        })}
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    border: '1px solid #000',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
  },
})
