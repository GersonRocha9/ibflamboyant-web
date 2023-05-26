import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages'

const queryClient = new QueryClient()

export function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
