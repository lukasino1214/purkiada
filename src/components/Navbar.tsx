import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-[#5088b5] items-center align-middle h-[10vh]">
      <ul className="list-none m-0 p-0 overflow-hidden bg-[#f0f2f2] flex items-center align-middle justify-between">
        <div>
          <li className="float-left">
            <Link href={"/"} className="block text-center px-2 py-5">
              <img src="/logo.png" width="20px" />
            </Link>
          </li>
          <li className="float-left">
            <Link href={"/"} className="block text-center px-2 py-5">
              <h1>Purkiada</h1>
            </Link>
          </li>
        </div>
        <div>
          <li className="float-right">
            <Link href={"/#contact"} className="block text-center px-8 py-5">Kontakt</Link>
          </li>
          <li className="float-right">
            <Link href={"/#photogallery"} className="block text-center px-8 py-5">Fotogalerie</Link>
          </li>
          <li className="float-right">
            <Link href={"/#recent_years"} className="block text-center px-8 py-5">Předešlé roky</Link>
          </li>
          <li className="float-right">
            <Link href={"/#about"} className="block text-center px-8 py-5">O nás</Link>
          </li>
          <li className="float-right">
            <Link href={"/registration"} className="block text-center px-8 py-5">Registrace</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
