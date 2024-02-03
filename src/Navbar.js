function Navbar() {
    return (
        <>
        <div className="sticky top-0 z-10 bg-[#111418]">
            <nav className="flex justify-between items-center py-5 bg-[#111418]">
            {/* left */}
            <div className="flex w-1/4 items-center">
                <div className="w-full border-t border-white my-4 px-16 mr-4"></div>
                <div className="flex items-center gap-x-4">
                    <a href="https://github.com/AishwaryaSudarshan">
                        <img className="bg-white rounded-full p-2 w-20" src='github.svg' alt='github'></img>
                    </a>
                    <a href="https://www.linkedin.com/in/aishwarya-sudarshan/">
                        <img className="bg-white rounded-full p-2 w-20" src='linkedin1.svg' alt='linkedin'></img>
                    </a>
                </div>
            </div>
            {/* right */}
            <div className="pr-16 flex items-center">
                <a href="Resume.pdf">
                <div className='text-xl font-bold text-[#5297F8]'>
                    Resume
                </div>
                </a>
            </div>
            </nav>
            </div>
        </>
    );
  }
  
  export default Navbar;