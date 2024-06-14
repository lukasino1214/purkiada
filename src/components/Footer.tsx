const Footer = () => {
  return (
    <div className="bg-[#5088b5] w-full h-full py-8">
      {/* <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className="block px-4 py-4">
            <img src="/logo.png" width="20px" />
          </div>
          <p className="block px-4 py-4">Copyright © 2024 Purkiáda 2024</p>
          <p className="block px-4 py-4">
            Autoři: Filip Takáč, Tibor Kovaljov, Lukáš Pokreis, Jan Vavřík,
            Agáta Radana Langerová
          </p>
        </div>
      </div> */}
      <div className="w-full flex align-middle justify-center items-center text-[#f0f2f2]">
        <img src="/images/Purkynka_logo_bila.svg" className="w-[250px] h-[75px]" />
      </div>
      <div className="w-full flex align-middle justify-center items-center text-[16px] text-[#f0f2f2]">
        <p>Copyright © 2024 Purkiáda 2024 | Lukáš Pokreis, Tibor Kovaljov, Jan Vavřík, Filip Takáč, Agáta Radana Langerová</p>
      </div>
    </div>
  );
};

export default Footer;
