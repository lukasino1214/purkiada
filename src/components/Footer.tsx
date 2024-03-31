const Footer = () => {
  return (
    <div className="fixed bottom-0 w-screen bg-gray-200">
      <div className="flex flex-col justify-center">
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
      </div>
    </div>
  );
};

export default Footer;
