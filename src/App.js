// import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import LLM from './LLM';
import Navbar from './Navbar';
import './styles.css'; 
import '@fontsource/roboto/300.css'; 

function App() {
  return (
    <body>
      <div className='bg-[#111418]'>
        < Navbar />
        <div className='flex w-full'>
          {/* <About />  */}
          <LLM />
        </div>
        <Experience /> 
        <Projects />
        <div className='justify-center flex pb-12'>
          <img className="" src='footer.svg' alt='footer' />
        </div>
      </div> 
    </body>
  );
}

export default App;