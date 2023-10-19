import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


export default function Home() {
  return (
    <main>
      <Header/>
      <div className="container_index">
        <div className="container_grid">
          <Sidebar/>
          <Main/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
