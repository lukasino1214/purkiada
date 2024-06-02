import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-slate-200">
      <ul className="m-0 list-none overflow-hidden bg-slate-600 p-0">
        <li className="float-left">
          <Link href={"/"} className="block px-2 py-4 text-center">
            <img src="/logo.png" width="20px" alt="LogoNavbaru" />
          </Link>
        </li>
        <li className="float-right">
          <Link href={"/#photogallery"} className="block px-2 py-5 text-center">
            Fotogalerie
          </Link>
        </li>
        <li className="float-right">
          <Link href={"/#contact"} className="block px-2 py-5 text-center">
            Kontakt
          </Link>
        </li>
        <li className="float-right">
          <Link href={"/#recentYears"} className="block px-2 py-5 text-center">
            Předešlé ročníky
          </Link>
        </li>
        <li className="float-right">
          <Link href={"/#about"} className="block px-2 py-5 text-center">
            O nás
          </Link>
        </li>
        <li className="float-right">
          <Link href={"/registration"} className="block px-2 py-5 text-center">
            Aktuální ročník
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
