import About from "./ui/About"
// import Achive from "./ui/Achive"
import Banner from "./ui/Banner"
import Contact from "./ui/Contact"
// import Experience from "./ui/Experience"
import Header from "./ui/Header"
import Project from "./ui/Project"
import ScrollBtn from "./ui/ScrollBtn"
import Skills from "./ui/Skills"
function App() {
  return (
    <>
      <main className="min-h-screen bg-primaryColor text-lightTExt font-bodyFont">
        <Header />
        <Banner />
        <About />
        {/* <Experience /> */}
        <Project />
        {/* <Achive /> */}
        <Skills/>
        <Contact/>
        <ScrollBtn/>
      </main>
    </>
  )
}

export default App
