import { PrayersPresentation } from '../components'
import { BabyPresentation } from '../components/BabyPresentation'

export function Home() {
  return (
    <div className="container mx-auto px-4">
      <PrayersPresentation />
      <BabyPresentation />
    </div>
  )
}
