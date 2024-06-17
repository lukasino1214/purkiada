import React from "react"
import Footer from "~/components/Footer"
import Navbar from "~/components/Navbar"
import { useState } from "react";

const Admin = () => {
    const needed_admin_name = "purkiadaadmin"
    const needed_password = "1234"
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

  const control = () => {
    console.log(login, password);
    if(login == needed_admin_name && password == needed_password){
      window.history.replaceState(null, '', '/awserdtftbnjmkbuvzcrtedxrwsserctvbh')
    }
    else {
      alert ("Zadali jste špatné údaje!")
    }
  }
    
  return (
    <div className="h-[100vh]">
        <Navbar/>
        <div className="flex flex-col justify-center h-full p-20">
            <h1 className="text-blue-pk text-6xl font-bold mb-8">Přihlášení</h1>
            <form className="space-y-4">
              <input
              value = {login}
              onChange = {(e) => setLogin(e.target.value)}
              type = "text"
              name = "login"
              required
              placeholder ="Uživatel"
              className="border border-black p-2 w-full"
              />
              <input
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              type = "password"
              name = "password"
              required
              placeholder = "Heslo"
              className="border border-black p-2 w-full"
              />
              <button onClick = {control} className="bg-yellow-500 px-4 py-2 text-lg text-black">Přihlásit se</button>
            </form>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
    </div>
  )
}

export default Admin;