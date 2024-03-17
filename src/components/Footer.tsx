// const Footer = () => {
//   return (
//     <div className="fixed bottom-0 w-screen bg-gray-200">
//       <ul className="list-none m-0 p-0 overflow-hidden bg-slate-600">
//         <li className="float-left block text-center px-2 py-5">
//             <img src="/logo.png" width="20px" />
//         </li>
//         <li className="float-right">
//           <p className="block text-center px-2 py-5">© purkiada</p>
//         </li>
//         <li className="float-right">
//             <p className="block text-center px-2 py-5">Filip Takáč, Tibor Kovaljov, Lukáš Pokreis</p>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-screen bg-gray-200">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className="block px-4 py-4">
            <img src="/logo.png" width="20px" />
          </div>
          <p className="block px-4 py-4">© purkiada</p>
          <p className="block px-4 py-4">
            Autoři: Filip Takáč, Tibor Kovaljov, Lukáš Pokreis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
