import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="ueber-mich" element={<Placeholder title="Über mich" />} />
          <Route path="dienstleistungen" element={<Placeholder title="Dienstleistungen" />} />
          <Route path="kostenlose-bewertung" element={<Placeholder title="Kostenlose Bewertung" />} />
          <Route path="regionen/seetal" element={<Placeholder title="Region Seetal" />} />
          <Route path="regionen/luzern" element={<Placeholder title="Region Luzern" />} />
          <Route path="marktberichte" element={<Placeholder title="Marktberichte" />} />
          <Route path="faq" element={<Placeholder title="FAQ" />} />
          <Route path="impressum" element={<Placeholder title="Impressum" />} />
          <Route path="datenschutz" element={<Placeholder title="Datenschutz" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
