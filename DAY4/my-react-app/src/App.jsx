import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <Card title="React" description="Nauči osnove modernog razvoja." />
        <Card title="Vite alat" description="Brzo i jednostavno pokretanje." />
      </main>
      <Footer />
    </>
  )
}

export default App