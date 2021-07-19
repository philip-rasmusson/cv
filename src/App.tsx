import { Navbar } from './components/navigation/Navbar'
import { Routes } from "./routes/Routes"
import { Provider } from './shared/provider/GlobalProvider'


export const App = () => {
  return (
    <Provider>
      <Routes>
        <Navbar />
      </Routes>
    </Provider>
  )
}

