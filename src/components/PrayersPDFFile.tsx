import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer'

interface PrayerRequestProps {
  prayerRequests: {
    created_at: string
    id: number
    name: string
    phone: string
    prayerRequest: string
  }[]
}

export function PrayersPDFFile({ prayerRequests }: PrayerRequestProps) {
  return (
    <Document>
      <Page style={{ ...styles.body, backgroundColor: '#fff' }}>
        {prayerRequests.map((prayer, index) => {
          return (
            <div key={index}>
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

  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
  },
})
