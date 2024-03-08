import 'tailwindcss/tailwind.css';
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-[#F87171] text-white">
        <div className='flex place-content-around'> 
          <div>
          <h1 className='text-3xl font-bold'>Kalvium</h1>
          </div>
          <div>
            <nav className='p-2'>
              <ul className="flex space-x-4">
                <li>About Us</li>
                <li>Contact</li>
                <li>Courses</li>
              </ul>
            </nav>
          </div>  
          <div>
          <button className=" text-white font-bold py-2 px-4 rounded">
              Log in
            </button>
          </div>
        
        </div>
      
      </header>
      <main className="flex-grow p-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button one
      </button>
        <div className="mt-4 p-4 bg-[#FEE2E1] text-red">
          Alert! This is awesome!
        </div >
        <div className="mt-4 p-4 flex justify-center">
          
          
         
        </div>
        <div className="mt-4 p-4 w-[30vw] ml-[33vw] flex justify-center bg-slate-200 items-center">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
          {/* <p className='text-2xl'>kalvium Store</p> */}
          
          <p className='p-1'>
           : You have a new course!
          </p>
        </div>
      </main>
      <footer className="p-4 bg-[#E4E7EB] text-black text-center">
        © 2024 Copyright Kalvium
      </footer>
    </div>
  );
};

export default App;