import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [view, setView] = useState(false);
  const click = () => {
    setView(!view)
  }
  
  return (
    <div className="top-0 w-full fixed z-50 text-blue-pk font-robotoslab bg-gray-pk h-[64px] flex flex-row items-center align-middle justify-between">
      <div className="h-full flex flex-row items-center align-middle justify-between gap-[16px] pl-[24px]">
        <Link href={"/"} className="block text-center">
          <img src="/images/Purkiada_logo_male.svg" className="w-[32px]" />
        </Link>
        <Link href={"/"} className="font-bold text-[32px]">
          <h1>Purkiáda</h1>
        </Link>
      </div>
      <div className="hidden h-fulls sm:flex flex-row items-center align-middle justify-between gap-[24px] pr-[24px] text-[20px]">
        <Link href={"/#now"} className="">AKTUÁLNÍ ROČNÍK</Link>
        <Link href={"/#about"} className="">O NÁS</Link>
        <Link href={"/#history"} className="">HISTORIE SOUTĚŽE</Link>
        <Link href={"/#recent_years"} className="">PŘEDEŠLÉ ROČNÍKY</Link>
        <Link href={"/#contact"} className="">KONTAKT</Link>
      </div>
      <button className='space-y-1 group sm:hidden relative p-2' onClick={click}>
        <div className='w-6 h-1 bg-slate-500 rounded-[2px]'></div>
        <div className='w-6 h-1 bg-slate-500 rounded-[2px]'></div>
        <div className='w-6 h-1 bg-slate-500 rounded-[2px]'></div>       
      </button>
      {
        view &&
        <div className="absolute w-full bg-gray-pk right-0 bottom-0 transform translate-y-full flex flex-col justify-center align-middle items-center">
            <Link onClick={click} href={"/#about"} className="p-4">O NÁS</Link>
            <Link onClick={click} href={"/#history"} className="p-4">HISTORIE SOUTĚŽE</Link>
            <Link onClick={click} href={"/#recent_years"} className="p-4">PŘEDEŠLÉ ROČNÍKY</Link>
            <Link onClick={click} href={"/#contact"} className="p-4">KONTAKT</Link>
        </div>
      }
    </div>
    
  );
};

export default Navbar;
