import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import LigasHome from './pages/LigasHome'
import AddLigaForm from './pages/AddLigaForm'
import AllLigas from './pages/AllLigas'
import MiLiga from './pages/MiLiga'
import MiTorneo from './pages/MiTorneo'
import MisEquipos from './pages/MisEquipos'

function App() {
  return (
    <div className='bg-[#262837]'>
      <Routes>
        <Route path="/" element={<AllLigas />} />
        <Route path="/:id_liga/liga" element={<MiLiga />} />
        <Route path="/:id_torneo/torneo" element={<MiTorneo />} />
        <Route path="/:id_torneo/equipos" element={<MisEquipos />} />
        <Route path="/add" element={<AddLigaForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
