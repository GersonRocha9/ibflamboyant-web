import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer'

interface PrayerRequestProps {
  prayerRequests:
    | {
        created_at: string
        id: number
        name: string
        phone: string
        prayerRequest: string
      }[]
    | undefined
}

export function PrayersPDFFile({ prayerRequests }: PrayerRequestProps) {
  return (
    <Document>
      <Page style={{ ...styles.body, backgroundColor: '#fff' }}>
        {prayerRequests?.map((prayer, index) => {
          return (
            <div key={index} style={styles.itemContainer}>
              <Text
                style={styles.text}
              >{`Nome: ${prayer.name}\nTelefone: ${prayer.phone}\nPedido de oração: ${prayer.prayerRequest}`}</Text>
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
