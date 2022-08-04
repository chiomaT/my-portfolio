import About from './pages/About'
import Header from './components/Nav'
import Home from './pages/Profile'
import Skills from './pages/Skills'
import Work from './pages/Projects'
import ContactForm from './pages/ContactForm'



// import InputField from './components/InputField'
function App() {
  return (
    <div className="App">
   <Header />
   <Home />
   <About />
   <Skills />
   <Work />
   <ContactForm />
  
  
  
   {/* <Contact /> */}
   {/* <InputField /> */}
    </div>
  );
}

export default App;
