import Image from "next/image";
import { MapPin } from "lucide-react";
export default function Home() {
  return (
    <>
  <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
      
   
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-semibold pl-25">Uber</h1>

        <ul className="hidden md:flex gap-6 text-sm font-medium pr-25">
          <li className="cursor-pointer hover:text-gray-300  w-12 h-5 hover:rounded- hover:bg-gray-700">Ride</li>
          <li className="cursor-pointer hover:text-gray-300">Drive</li>
          <li className="cursor-pointer hover:text-gray-300">Business</li>
          <li className="cursor-pointer hover:text-gray-300 flex items-center gap-1">
            About
            <span className="text-xs">▾</span>
          </li>
        </ul>
      </div>

    
      <div className="flex items-center gap-5 text-sm font-medium pr-20">
        <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-gray-300">
          🌐 <span>EN</span>
        </div>
        <span className="cursor-pointer hover:text-gray-300">Help</span>
        <span className="cursor-pointer hover:text-gray-300">Log in</span>

        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Sign up
        </button>
      </div>
    </nav>
    <div className="w-full pt-5 bg-white text-gray-500 flex items-center justify-between">
      <h1 className="text-black pl-30 text-2xl font-bold">Ride</h1>
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-6 text-sm font-medium pr-20">
          <li className="cursor-pointer hover:text-black ">Request a ride</li>
          <li className="cursor-pointer hover:text-black">Reserve a ride</li>
          <li className="cursor-pointer hover:text-black">See prices</li>
          <li className="cursor-pointer hover:text-black flex items-center gap-1">
            Explore ride options
          </li>
          <li className="cursor-pointer hover:text-black">Airport rides</li>
        </ul>
      </div>
    </div >
     <div className="pt-5  bg-white text-gray-500 flex  justify-between pl-50">
      <div className="pt-25 w-1/2">
          <div className="flex items-center gap-2 text-black">
      <MapPin size={22} />
      <span className="text-black font-bold">Indore,IN  </span><a href="" className="underline ">Change City</a>
       
    </div>
    <div className="text-5xl text-black font-bold pt-5">Request a ride for now or later</div>
    <div>Up to 50% off your first 5 Uber rides. T&Cs apply.* *Valid within 15 days of signup.</div>
    </div>
   
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-6 text-sm font-medium pr-20">
           <div className="pr-30 pt-10 ml-50">
      <Image
        src="/1.webp"
        alt="Image"
        width={1350}
        height={400}
        padding-left={40}
      />
    </div>

        </ul>
      </div>
    </div>
     <h2 className="text-2xl font-bold mb-6">Suggestions</h2>
    <div className="container mx-auto px-4 py-8">
 
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">Ride</h3>
          <p className="text-sm text-gray-500 mt-1">Go anywhere with Uber. Request a ride, hop in and go.</p>
        </div>
      
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center ml-4">
          
        </div>
      </div>
      <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">Details</a>
    </div>
  </div>
</div>
 <div className="container mx-auto px-4 py-8">

  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">Ride</h3>
          <p className="text-sm text-gray-500 mt-1">Go anywhere with Uber. Request a ride, hop in and go.</p>
        </div>
      
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center ml-4">
          
        </div>
      </div>
      <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">Details</a>
    </div>
  </div>
</div> <div className="container mx-auto px-4 py-8">
  
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">Ride</h3>
          <p className="text-sm text-gray-500 mt-1">Go anywhere with Uber. Request a ride, hop in and go.</p>
        </div>
      
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center ml-4">
          
        </div>
      </div>
      <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">Details</a>
    </div>
  </div>
</div>
 <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">Ride</h3>
          <p className="text-sm text-gray-500 mt-1">Go anywhere with Uber. Request a ride, hop in and go.</p>
        </div>
      
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center ml-4">
          
        </div>
      </div>
      <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">Details</a>
    </div>
  </div>
</div>
 <div className="container mx-auto px-4 py-8">

  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">Ride</h3>
          <p className="text-sm text-gray-500 mt-1">Go anywhere with Uber. Request a ride, hop in and go.</p>
        </div>
      
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center ml-4">
          
        </div>
      </div>
      <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">Details</a>
    </div>
  </div>
</div>
 <div className="container mx-auto px-4 py-8">

  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">Ride</h3>
          <p className="text-sm text-gray-500 mt-1">Go anywhere with Uber. Request a ride, hop in and go.</p>
        </div>
      
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center ml-4">
          
        </div>
      </div>
      <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">Details</a>
    </div>
  </div>
</div>

</>
  );
}
