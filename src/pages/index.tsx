import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Circle from "~/components/Circle";

import { api } from "~/utils/api";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="bg-blue-pk h-[100vh] w-full">
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

      <div id="now" className="bg-gray-pk py-[64px] w-full">
        <div className="w-fit pl-[64px]">
          <h1 className="text-blue-pk font-robotoslab text-6xl font-bold">
            Aktuální ročník
          </h1>
          <div className="w-[40%] pt-[32px] text-[25px] text-[#3c3c3b]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vitae molestie nibh, vitae posuere arcu. Sed ac porta lacus, et
              maximus ipsum. Aliquam et mauris eget est rhoncus pharetra a ac
              dui. Proin placerat est in nisi laoreet, eu malesuada ipsum
              interdum. Integer feugiat lacinia eros, non vehicula diam interdum
              ac.
            </p>
            <br />
            <Link
              href={"registration"}
              className="block w-max bg-[#fab400] p-[16px] font-robotoslab text-[20px] font-bold"
            >
              REGISTROVAT SE
            </Link>
          </div>
        </div>
      </div>

      <div id="about" className="bg-blue-pk text-gray-pk py-[20vh] relative w-full">
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

      <div id="history" className="bg-gray-pk pt-[16vh] pb-[40vh] relative w-full">
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

      <div id="recent_years" className="bg-blue-pk py-[80px] w-full">
        <div className="text-gray-pk flex w-full items-center justify-center align-middle font-robotoslab text-6xl font-bold">
          <h1>Předešlé ročníky</h1>
        </div>
        <div className="text-gray-pk flex w-full items-center justify-center pt-[40px] align-middle">
          <div className="grid w-[80vh] grid-cols-2">
            <div className="pb-2 text-center text-[20px]">
              2015 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2015.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2016 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2016.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2017 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2017.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2018 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2018.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2019 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2019.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2020 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2020.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2021 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2021.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2022 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2022.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2023 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2023.pdf
              </a>
            </div>
            <div className="pb-2 text-center text-[20px]">
              2024 -{" "}
              <a className="font-bold underline" href="">
                Purkiada2024.pdf
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="bg-gray-pk h-[60vh] w-full">
        <div className="w-fit pl-[64px] pt-[64px]">
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
