import Link from "next/link";

const Navbar = () => {
  return (
    <div className="links">
      <ul className="text-blue-700">
        <li>
          <Link href={"/"}>
            <img src="/logo.png" width="65px" />
          </Link>
        </li>
        <li>
          <Link href={"/about"}>O nás</Link>
        </li>
        <li>
          <Link href={"/contact"}>Kontakt</Link>
        </li>
        <li>
          <Link href={"/photogallery"}>Fotogalerie</Link>
        </li>
        <li>
          <Link href={"/recent_years"}>Předešlé roky</Link>
        </li>
        <li>
          <Link href={"/registration"}>Registrace</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
