import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-slate-200">
      <ul className="list-none m-0 p-0 overflow-hidden bg-slate-600">
        <li className="float-left">
          <Link href={"/"} className="block text-center px-2 py-4">
            <img src="/logo.png" width="20px" />
          </Link>
        </li>
        <li className="float-right">
          <Link href={"/registration"} className="block text-center px-2 py-5">Registrace</Link>
        </li>
        <li className="float-right">
          <Link href={"/recent_years"} className="block text-center px-2 py-5">Předešlé roky</Link>
        </li>
        <li className="float-right">
          <Link href={"/photogallery"} className="block text-center px-2 py-5">Fotogalerie</Link>
        </li>
        <li className="float-right">
          <Link href={"/contact"} className="block text-center px-2 py-5">Kontakt</Link>
        </li>
        <li className="float-right">
          <Link href={"/about"} className="block text-center px-2 py-5">O nás</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;