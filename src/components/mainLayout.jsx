import Footer from './footer'
import Header from './header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-wrapper">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
