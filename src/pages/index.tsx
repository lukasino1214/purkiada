import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Circle from "~/components/Circle";

import { api } from "~/utils/api";

const Home = () => {
  const {data: pdfs, isLoading: pdfLoading} = api.pdf.getAllPdfs.useQuery();
  const {data: texts, isLoading: textLoading} = api.text.getAllTexts.useQuery();

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="bg-blue-pk h-[100vh] w-full relative max-md:hidden">
        <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] flex flex-row items-center gap-[10%]">
          <img src="/images/Purkiada_logo.svg" className="h-[60%]" />
          <h1 className="text-gray-pk text-[50px]">
            Purkiáda je IT soutěž pro žáky 9. ročníku ZŠ pořádaná ročně na
            Purkyňce.
          </h1>
        </div>
        <div className="absolute bottom-[56px] w-full flex align-middle justify-center items-center gap-[32px]">
          <img src="/images/Purkiada_pacman.svg" className="w-[52px]" />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Link
            href={"registration"}
            className="block w-max bg-[#fab400] p-[16px] font-robotoslab text-[20px] font-bold text-[#3c3c3b]"
          >
            REGISTROVAT SE
          </Link>
          <Circle />
          <Circle />
          <img src="/images/Purkiada_pacman_ghost.svg" className="w-[52px]" />
          <Circle />
          <img src="/images/Purkiada_pacman_ghost.svg" className="w-[52px]" />
          <Circle />
          <Circle />
        </div>
      </div>

      <div id="now" className="bg-gray-pk py-[64px] w-full max-md:hidden">
        <div className="w-fit pl-[64px]">
          <h1 className="text-blue-pk font-robotoslab text-6xl font-bold">
            Aktuální ročník
          </h1>
          <div className="w-[40%] pt-[32px] text-[25px] text-[#3c3c3b]">
            {
              (!texts) ? <div></div> : texts.map(text => {
                return (
                  <p>
                    {text.text}
                  </p>
                )
              })
            }
            <br />
            <Link
              href={"/registration"}
              className="block w-max bg-[#fab400] p-[16px] font-robotoslab text-[20px] font-bold"
            >
              REGISTROVAT SE
            </Link>
          </div>
        </div>
      </div>

      <div id="about" className="bg-blue-pk text-gray-pk py-[20vh] relative w-full max-md:hidden">
        <div className="w-fit pl-[64px]">
          <h1 className="font-robotoslab text-6xl font-bold">
            O čem Purkiáda vlastně je?
          </h1>
          <div className="w-[40%] pt-[32px] text-[25px]">
            <p>
              Pokud tě zajímají počítače a logické úlohy, Purkiáda je pro tebe.
              Soutěž spočívá v plnění různých úloh připravených studenty oboru
              Informační technologie. Po skončení soutěže je pro zájemce
              připravená prohlídka školy
            </p>
            <br />
            <p>
              Pro řešení úloh nepotřebuješ znalosti žádných speciálních programů
              nebo programovacích jazyků.
            </p>
          </div>
        </div>
        <img src="/images/Purkiada_snake.svg" className="absolute w-[50%] bottom-[16px] right-[16px]" />
        <div className="absolute w-[35%] top-[24px] right-[64px]">
          <img src="/images/obrázek-20240215-090006-d1143c55.jpeg"/>
          <div className="absolute bottom-0 left-0 w-0 h-0 border-blue-pk border-l-[800px] border-l-[transparent] border-b-[120px]"></div>
        </div>
      </div>

      <div id="history" className="bg-gray-pk pt-[16vh] pb-[42vh] relative w-full max-md:hidden">
        <div className="w-fit pl-[64px]">
          <h1 className="text-blue-pk font-robotoslab text-6xl font-bold">
            Historie soutěže
          </h1>
          <p className="w-[40%] pt-[32px] text-[25px] text-[#3c3c3b]">
            Soutěž vznikla v roce 2009 jako možnost pro zájemce o studium, jako
            jsi ty, poznat, v čem opravdu spočívá studium oboru Informačních
            technologií. Na přijímacích zkouškách není žádná zkouška z
            informatiky, takže ti, kteří se o počítačovou tématiku zajímali,
            neměli vetší šanci uspět, nebo se nějak prosadit mezi ostatními
            uchazeči.
          </p>
        </div>
        <img src="/images/Purkiada_tetris.svg" className="absolute w-[40%] bottom-0 left-[64px]" />
        <div className="absolute w-[35%] top-0 right-[64px]">
          <div className="relative z-10">
            <div className="absolute top-0 left-0 w-0 h-0 border-gray-pk border-r-[800px] border-r-[transparent] border-t-[80px]"></div>
            <img src="/images/obrázek-20220222-080143-a0147596.jpeg" />
            <div className="absolute bottom-0 left-0 w-0 h-0 border-gray-pk border-l-[800px] border-l-[transparent] border-b-[80px]"></div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 w-0 h-0 border-gray-pk border-r-[800px] border-r-[transparent] border-t-[80px]"></div>
            <img src="/images/obrázek-20230214-073049-05a2f20a.jpeg" />
            <div className="absolute bottom-0 left-0 w-0 h-0 border-gray-pk border-l-[800px] border-l-[transparent] border-b-[80px]"></div>
          </div>
        </div>
      </div>

      <div id="recent_years" className="bg-blue-pk py-[80px] w-full max-md:hidden">
        <div className="text-gray-pk flex w-full items-center justify-center align-middle font-robotoslab text-6xl font-bold">
          <h1>Předešlé ročníky</h1>
        </div>
        <div className="text-gray-pk flex w-full items-center justify-center pt-[40px] align-middle">
          <div className="grid w-[80vh] grid-cols-2">
            {
              (!pdfs) ? <div></div> : pdfs.map(pdf => {
                return (
                  <div className="pb-2 text-center text-[20px]">
                    {pdf.year} -{" "}
                    <a className="font-bold underline" href={pdf.link ?? ""}>
                      {pdf.name}
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div id="contact" className="bg-gray-pk h-[60vh] w-full relative flex flex-row justify-between align-middle items-center max-md:hidden">
        <div className="w-fit pl-[64px] pt-[64px] h-full">
          <h1 className="text-blue-pk text-pk-blue font-robotoslab text-6xl font-bold">
            Kontakty
          </h1>
          <p className="pt-[32px] text-[25px] text-[#3c3c3b]">
            V případě jakýchkoliv dotazů nás neváhej kontaktovat přes e-mail
          </p>
          <a
            className="text-[25px] font-bold text-[#3e6182] underline"
            href="mailto:lenka.hruskova@purkynka.cz"
          >
            lenka.hruskova@purkynka.cz
          </a>
        </div>
        <div className="h-[70%] pr-[10%]">
          <a href="https://www.google.com/maps/place/St%C5%99edn%C3%AD+pr%C5%AFmyslov%C3%A1+%C5%A1kola+Brno,+Purky%C5%88ova,+p%C5%99%C3%ADsp%C4%9Bvkov%C3%A1+organizace/@49.2251266,16.5783648,17z/data=!3m1!4b1!4m6!3m5!1s0x47129403c69be65b:0xd9c7d91a683162ab!8m2!3d49.2251231!4d16.5809397!16s%2Fg%2F12ckhjdjc?entry=ttu">
            <img src="/mapy.PNG" className="h-full" />
          </a>
          <a href="https://www.google.com/maps/place/St%C5%99edn%C3%AD+pr%C5%AFmyslov%C3%A1+%C5%A1kola+Brno,+Purky%C5%88ova,+p%C5%99%C3%ADsp%C4%9Bvkov%C3%A1+organizace/@49.2251266,16.5783648,17z/data=!3m1!4b1!4m6!3m5!1s0x47129403c69be65b:0xd9c7d91a683162ab!8m2!3d49.2251231!4d16.5809397!16s%2Fg%2F12ckhjdjc?entry=ttu">
            <div className="text-center pt-8 text-[#3e6182] underline">Klikněte na mapu pro zobrazení</div>
          </a>
        </div>
      </div>

      <div className="md:hidden p-[64px] bg-blue-pk h-[100vh] flex flex-col justify-center align-middle items-center">
        <img src="/images/Purkiada_logo.svg" className="h-[60%]" />
        <h1 className="text-gray-pk text-[32px]">
          Purkiáda je IT soutěž pro žáky 9. ročníku ZŠ pořádaná ročně na
          Purkyňce.
        </h1>
      </div>

      <div id="now" className="bg-gray-pk w-full md:hidden p-[64px]">
        <div className="w-fit">
          <h1 className="text-blue-pk flex flex-row w-full items-center justify-center align-middle font-robotoslab text-4xl font-bold">
            Aktuální ročník
          </h1>
          <div className="text-[20px] text-[#3c3c3b] flex flex-col justify-center align-middle items-center pt-[32px]">
            {
              (!texts) ? <div></div> : texts.map(text => {
                return (
                  <p>
                    {text.text}
                  </p>
                )
              })
            }
            <br />
            <Link
              href={"/registration"}
              className="block w-max bg-[#fab400] p-[16px] font-robotoslab text-[20px] font-bold"
            >
              REGISTROVAT SE
            </Link>
          </div>
        </div>
      </div>

      <div id="about" className="bg-blue-pk text-gray-pk p-[64px] relative w-full md:hidden">
        <div className="w-fit">
          <h1 className="text-gray-pk flex flex-row w-full items-center justify-center align-middle font-robotoslab text-4xl font-bold">
            O čem Purkiáda vlastně je?
          </h1>
          <div className="pt-[32px] text-[25px]">
            <p>
              Pokud tě zajímají počítače a logické úlohy, Purkiáda je pro tebe.
              Soutěž spočívá v plnění různých úloh připravených studenty oboru
              Informační technologie. Po skončení soutěže je pro zájemce
              připravená prohlídka školy
            </p>
            <br />
            <p>
              Pro řešení úloh nepotřebuješ znalosti žádných speciálních programů
              nebo programovacích jazyků.
            </p>
          </div>
        </div>
        <img src="/images/obrázek-20240215-090006-d1143c55.jpeg" className="pt-[32px]" />
      </div>

      <div id="history" className="bg-gray-pk p-[64px] relative w-full md:hidden">
        <div className="w-fit">
          <h1 className="text-blue-pk flex flex-row w-full items-center justify-center align-middle font-robotoslab text-4xl font-bold">
            Historie soutěže
          </h1>
          <p className="pt-[32px] text-[25px] text-[#3c3c3b]">
            Soutěž vznikla v roce 2009 jako možnost pro zájemce o studium, jako
            jsi ty, poznat, v čem opravdu spočívá studium oboru Informačních
            technologií. Na přijímacích zkouškách není žádná zkouška z
            informatiky, takže ti, kteří se o počítačovou tématiku zajímali,
            neměli vetší šanci uspět, nebo se nějak prosadit mezi ostatními
            uchazeči.
          </p>
        </div>
        <img src="/images/obrázek-20220222-080143-a0147596.jpeg" className="pt-[32px]" />
      </div>

      <div id="recent_years" className="bg-blue-pk py-[80px] w-full md:hidden">
        <div className="text-gray-pk flex flex-row w-full items-center justify-center align-middle font-robotoslab text-4xl font-bold">
          <h1>Předešlé ročníky</h1>
        </div>
        <div className="text-gray-pk flex w-full items-center justify-center pt-[40px] align-middle">
          <div className="grid w-[80vh] grid-cols-2">
            {
              (!pdfs) ? <div></div> : pdfs.map(pdf => {
                return (
                  <div className="pb-2 text-center text-[20px]">
                    {pdf.year} -{" "}
                    <a className="font-bold underline" href={pdf.link ?? ""}>
                      {pdf.name}
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>


      <div id="contact" className="bg-gray-pk h-[60vh] w-full relative flex flex-row justify-between align-middle items-center md:hidden p-[64px]">
        <div className="w-fit h-full">
          <h1 className="text-blue-pk flex flex-row w-full items-center justify-center align-middle font-robotoslab text-4xl font-bold">
            Kontakty
          </h1>
          <p className="pt-[32px] text-[20px] text-[#3c3c3b]">
            V případě jakýchkoliv dotazů nás neváhej kontaktovat přes e-mail
          </p>
          <a
            className="text-[20px] font-bold text-[#3e6182] underline"
            href="mailto:lenka.hruskova@purkynka.cz"
          >
            lenka.hruskova@purkynka.cz
          </a>
        <div className="pt-[32px]">
          <a href="https://www.google.com/maps/place/St%C5%99edn%C3%AD+pr%C5%AFmyslov%C3%A1+%C5%A1kola+Brno,+Purky%C5%88ova,+p%C5%99%C3%ADsp%C4%9Bvkov%C3%A1+organizace/@49.2251266,16.5783648,17z/data=!3m1!4b1!4m6!3m5!1s0x47129403c69be65b:0xd9c7d91a683162ab!8m2!3d49.2251231!4d16.5809397!16s%2Fg%2F12ckhjdjc?entry=ttu">
            <img src="/mapy.PNG" className="h-full" />
          </a>
          <a href="https://www.google.com/maps/place/St%C5%99edn%C3%AD+pr%C5%AFmyslov%C3%A1+%C5%A1kola+Brno,+Purky%C5%88ova,+p%C5%99%C3%ADsp%C4%9Bvkov%C3%A1+organizace/@49.2251266,16.5783648,17z/data=!3m1!4b1!4m6!3m5!1s0x47129403c69be65b:0xd9c7d91a683162ab!8m2!3d49.2251231!4d16.5809397!16s%2Fg%2F12ckhjdjc?entry=ttu">
            <div className="text-center pt-8 text-[#3e6182] underline">Klikněte na mapu pro zobrazení</div>
          </a>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
