import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import { PrayersPresentation } from '../components'
import { BabyPresentation } from '../components/BabyPresentation'

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-slate-100 h-screen">
      <Tabs variant="soft-rounded" colorScheme="green" align="center" w="full">
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
  )
}
