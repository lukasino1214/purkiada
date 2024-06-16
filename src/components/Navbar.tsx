import Link from "next/link";

const Navbar = () => {
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
      <div className="h-full flex flex-row items-center align-middle justify-between gap-[24px] pr-[24px] text-[20px]">
        <Link href={"/#now"} className="">AKTUÁLNÍ ROČNÍK</Link>
        <Link href={"/#about"} className="">O NÁS</Link>
        <Link href={"/#history"} className="">HISTORIE SOUTĚŽE</Link>
        <Link href={"/#recent_years"} className="">PŘEDEŠLÉ ROČNÍKY</Link>
        <Link href={"/#contact"} className="">KONTAKT</Link>
      </div>
    </div>
  );
};

export default Navbar;
