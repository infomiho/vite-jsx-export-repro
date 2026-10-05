import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import { Button } from 'internal-ui/button'

const BoardPage = lazy(() => import('./pages/BoardPage'))

function HomePage() {
  const navigate = useNavigate()
  return <Button onClick={() => navigate('/board')}>Open board</Button>
}

export function App() {
  return <BrowserRouter>
    <Suspense fallback={<p>Loading page…</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
}
