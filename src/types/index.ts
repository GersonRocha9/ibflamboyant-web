/* eslint-disable no-unused-vars */
export interface PrayerRequestProps {
  created_at: string
  id: number
  name: string
  phone: string
  prayerRequest: string
}

export enum WorshipDate {
  wednesday20 = 'Quarta-feira - 20h',
  sunday10 = 'Domingo - 10h',
  sunday18 = 'Domingo - 18h',
  sunday20 = 'Domingo - 20h',
}

export interface BabiesPresentationProps {
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
