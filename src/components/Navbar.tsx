import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-[#5088b5] items-center align-middle h-[8vh] text-[15px] bg-[#f0f2f2] font-robotoslab top-0 w-full sticky z-50">
      <ul className="list-none m-0 p-0 overflow-hidden flex items-center align-middle justify-between">
        <div>
          <li className="float-left pl-2">
            <Link href={"/"} className="block text-center py-2 px-2">
              <img src="/images/Purkiada_logo_male.svg" className="w-[32px]" />
            </Link>
          </li>
          <li className="float-left">
            <Link href={"/"} className="block text-center px-2 py-5 font-bold text-[21px]">
              <h1>Purkiada</h1>
            </Link>
          </li>
        </div>
        <div className="text-[18px]">
          <li className="float-right">
            <Link href={"/#contact"} className="block text-center px-6 py-5">KONTAKT</Link>
          </li>
          <li className="float-right">
            <Link href={"/#recent_years"} className="block text-center px-6 py-5">PŘEDEŠLÉ ROČNÍKY</Link>
          </li>
          <li className="float-right">
            <Link href={"/#history"} className="block text-center px-6 py-5">HISTORIE SOUTĚŽE</Link>
          </li>
          <li className="float-right">
            <Link href={"/#about"} className="block text-center px-6 py-5">O NÁS</Link>
          </li>
          <li className="float-right">
            <Link href={"/#now"} className="block text-center px-6 py-5">AKTUÁLNÍ ROČNÍK</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
