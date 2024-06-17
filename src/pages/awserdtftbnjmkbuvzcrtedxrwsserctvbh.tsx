import React, { useState } from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'

const adminpage = () => {
  const logoff = () => {
    window.history.replaceState(null, '', '/')
  }

  const [addPdf, useAddPdf] = useState(false);
  const [addActualText, useAddActualText] = useState(false);

  const clickAddPdf = () => {
    useAddPdf(true)
    useAddActualText(false)
  }

  const clickAddActualText = () => {
    useAddPdf(false)
    useAddActualText(true)
  }

  const exportDatabase = () => {

  }

  const cleanDatabase = () => {
    exportDatabase()
  }

  return (
    <div className="h-[100vh]">
      <Navbar/>
      <div className="flex flex-col justify-center h-full p-20">
      <h1 className="text-blue-pk text-6xl font-bold mb-8">Admin Panel</h1>
      <div className='flex flex-row justify-start gap-16'>
        <div className='flex flex-col justify-start gap-4 w-fit'>
          <button onClick={exportDatabase} className="bg-yellow-500 px-4 py-2 text-lg text-black">Export databáze</button>
          <button onClick={cleanDatabase} className="bg-yellow-500 px-4 py-2 text-lg text-black">Smazání databáze</button>
          <button onClick={clickAddPdf} className="bg-yellow-500 px-4 py-2 text-lg text-black">Přidat pdf</button>
          <button onClick={clickAddActualText} className="bg-yellow-500 px-4 py-2 text-lg text-black">Aktuální text</button>
          <button onClick={logoff} className="bg-yellow-500 px-4 py-2 text-lg text-black">Odhlásit se</button>
        </div>
        {
          addPdf && <div className='flex flex-col gap-8'>
            <h1 className='text-blue-pk text-6xl font-bold'>Přidat pdf</h1>
            <button className="bg-yellow-500 px-4 py-2 text-lg text-black">Nastavit</button>
          </div>
        }
        {
          addActualText && <div className='flex flex-col gap-8'>
            <h1 className='text-blue-pk text-6xl font-bold'>Aktuální text</h1>
            <button className="bg-yellow-500 px-4 py-2 text-lg text-black">Nastavit</button>
          </div>
        }
      </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default adminpage