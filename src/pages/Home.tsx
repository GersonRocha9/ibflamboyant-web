import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import imgLogo from '../assets/ibfLogo.png'
import { PrayersPresentation } from '../components'
import { BabyPresentation } from '../components/BabyPresentation'

export function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center w-full h-24 bg-slate-200">
        <img
          src={imgLogo}
          alt="Logo da Igreja Batista do Flamboyant"
          className="w-32"
        />
      </header>
      <div className="w-full bg-slate-100 h-screen overflow-y-auto py-4">
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          align="center"
          w="full"
        >
          <TabList className="flex justify-center w-full" mb="1em">
            <Tab>Pedidos de oração</Tab>
            <Tab>Apresentação de bebês</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <PrayersPresentation />
            </TabPanel>
            <TabPanel>
              <BabyPresentation />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  )
}
