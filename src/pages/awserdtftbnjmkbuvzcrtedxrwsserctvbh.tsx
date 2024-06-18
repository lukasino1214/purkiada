import React, { useState } from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import { api } from '~/utils/api'

import { $Enums } from '@prisma/client'

type Pdf = {
  year: string | null;
  name: string | null;
  link: string | null;
}

const Adminpage = () => {
  const logoff = () => {
    window.location.href = '/';
  }

  const [addPdf, setAddPdf] = useState(false);
  const [addActualText, setAddActualText] = useState(false);

  const clickAddPdf = () => {
    setAddPdf(true)
    setAddActualText(false)
  }

  const clickAddActualText = () => {
    setAddPdf(false)
    setAddActualText(true)
  }

  const { data: users, isLoading: usersLoading } = api.user.getAllUsers.useQuery();
  const exportDatabase = () => {
    console.log("test")
    
    if(!users) { return; }
    let content = ""
  
    for (const user of users) {
      content += user.id + "," + user.name + "," + user.surname + "," + user.school + "," + user.email + ",";
      content += "\n";
    }
    
    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + content);
    window.open(encodedUri);
  }

  const cleanDatabase = () => {
    exportDatabase()
    api.user.deleteAllUsers.useQuery()
  }

  /* PDF - rocniky */
  const [pdfYear, setPdfYear] = useState('')
  const [pdfName, setPdfName] = useState('')
  const [pdfLink, setPdfLink] = useState('')

  const createPdf = api.pdf.sendForm.useMutation();

  const handlePdfSubmit = async () => {
    try {
      await createPdf.mutateAsync({year: pdfYear, name: pdfName, link: pdfLink});
      alert("Pdf úspěšně přidáno do databáze!");
    } catch (error) {
      console.log("Error creating PDF: ", error);
      alert("Špatně zadané údaje!");
    }
  }

  const [text, setText] = useState("")

  const createText = api.text.sendForm.useMutation();

  const handleTextSubmit = async () => {
    try {
      api.text.deleteAllTexts.useQuery();
      await createText.mutateAsync({text: text});
      alert("Text úspěšně přidáno do databáze!");
    } catch (error) {
      console.log("Error creating PDF: ", error);
      alert("Špatně zadané údaje!");
    }
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
          <button onClick={clickAddPdf} className="bg-yellow-500 px-4 py-2 text-lg text-black">Přidat ročník - PDF</button>
          <button onClick={clickAddActualText} className="bg-yellow-500 px-4 py-2 text-lg text-black">Aktuální text</button>
          <button onClick={logoff} className="bg-yellow-500 px-4 py-2 text-lg text-black">Odhlásit se</button>
        </div>
        {
          addPdf && <div className='flex flex-col gap-8'>
              <h1 className='text-blue-pk text-4xl font-bold mb-4'>Přidat ročník - PDF</h1>
              <div className='flex justify-center items-center mb-4'>
                <label htmlFor="pdfyear" className='pr-6 text-lg'>Ročník:</label>
                <input value={pdfYear} type="text" name="year" id="pdfyear" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => setPdfYear(e.target.value)}/>
              </div>
              <div className='flex justify-center items-center mb-4'>
                <label htmlFor="pdfname" className='pr-6 text-lg'>Jméno:</label>
                <input value={pdfName} type="text" name="name" id="pdfname" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => setPdfName(e.target.value)}/>
              </div>
              <div className='flex justify-center items-center mb-4'>
                <label htmlFor="pdflink" className='pr-6 text-lg'>Link:</label>
                <input value={pdfLink} type="text" name="link" id="pdflink" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => setPdfLink(e.target.value)}/>
              </div>
              <button className="bg-yellow-500 px-4 py-2 text-lg text-black rounded" onClick={handlePdfSubmit}>Nastavit</button>
          </div>
        }
        {
          addActualText && <div className='flex flex-col gap-8'>
            <h1 className='text-blue-pk text-6xl font-bold'>Aktuální text</h1>
            <textarea value={text} name="text" id="Text" className='border-2' onChange={(e) => setText(e.target.value)}></textarea>
            <button className="bg-yellow-500 px-4 py-2 text-lg text-black" onClick={handleTextSubmit}>Nastavit</button>
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

export default Adminpage