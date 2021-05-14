import Footer from '../components/footer'
import Header from '../components/header'

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
