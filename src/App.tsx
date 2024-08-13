import { RoutesProvider } from './provider/routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | marketfy" />
      <RoutesProvider />
    </HelmetProvider>
  )
}

export default App
