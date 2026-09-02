//App.jsx
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import BottomBar from './components/common/BottomBar'
import Footer from './components/common/Footer'
import Header from './components/common/Header'

function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BottomBar />
      <main className="bg-gray-100  dark:bg-neutral-950 pb-16 w-full lg:pb-0 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default App