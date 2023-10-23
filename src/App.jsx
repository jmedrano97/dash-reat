import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import LigasHome from './pages/LigasHome'
import AddLigaForm from './pages/AddLigaForm'
import AllLigas from './pages/AllLigas'
import AllTorneos from './pages/AllTorneos'

function App() {
  return (
    <div className='bg-[#262837]'>
      <Routes>
        <Route path="/" element={<AllLigas />} />
        <Route path="/miliga" element={<AllTorneos />} />
        <Route path="/add" element={<AddLigaForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
