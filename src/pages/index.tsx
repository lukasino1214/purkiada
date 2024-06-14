import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

import { api } from "~/utils/api";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-pk h-[92vh]">
        <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] flex flex-row items-center gap-[10%]">
          {/* <div className="flex h-[70%] flex-row items-center gap-[10%] py-[10%] w-max"> */}
          <img src="/images/Purkiada_logo.svg" className="h-[60vh]" />
          <h1 className="text-gray-pk text-[50px]">
            Purkiáda je IT soutěž pro žáky 9. ročníku ZŠ pořádaná ročně na
            Purkyňce.
          </h1>
        </div>
        <div>
          
        </div>
      </div>

      <div id="now" className="bg-gray-pk py-[8vh]">
        {/* <img src="" alt="registrationBackground" /> */}
        <div className="w-fit pl-[8vh] pt-[2vh]">
          <h1 className="text-blue-pk font-robotoslab text-6xl font-bold">
            Aktuální ročník
          </h1>
          <div className="w-[40vw] pt-[4vh] text-[25px] text-[#3c3c3b]">
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
              className="block w-max bg-[#fab400] p-[2vh] font-robotoslab text-[20px] font-bold"
            >
              REGISTROVAT SE
            </Link>
          </div>
        </div>
      </div>

      <div id="about" className="bg-blue-pk text-gray-pk h-[60vh]">
        {/* <img src="" alt="aboutBackroundImage" />
        <img src="" alt="aboutImage" /> */}
        <div className="w-fit pl-[8vh] pt-[8vh]">
          <h1 className="font-robotoslab text-6xl font-bold">
            O čem Purkiáda vlastně je?
          </h1>
          <div className="w-[40vw] pt-[4vh] text-[25px]">
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
      </div>

      <div id="history" className="bg-gray-pk h-[60vh]">
        {/* <img src="" alt="historyBackgroundImage" />
        <img src="" alt="historyImage1" />
        <img src="" alt="historyImage2" /> */}
        <div className="w-fit pl-[8vh] pt-[8vh]">
          <h1 className="text-blue-pk font-robotoslab text-6xl font-bold">
            Historie soutěže
          </h1>
          <p className="w-[40vw] pt-[4vh] text-[25px]">
            Soutěž vznikla v roce 2009 jako možnost pro zájemce o studium, jako
            jsi ty, poznat, v čem opravdu spočívá studium oboru Informačních
            technologií. Na přijímacích zkouškách není žádná zkouška z
            informatiky, takže ti, kteří se o počítačovou tématiku zajímali,
            neměli vetší šanci uspět, nebo se nějak prosadit mezi ostatními
            uchazeči.
          </p>
        </div>
      </div>

      <div id="recent_years" className="bg-blue-pk py-[10vh]">
        {/* <img src="" alt="recentYearsBackgroundImage" /> */}
        <div className="text-gray-pk flex w-full items-center justify-center align-middle font-robotoslab text-6xl font-bold">
          <h1>Předešlé ročníky</h1>
        </div>
        <div className="text-gray-pk flex w-full items-center justify-center pt-[5vh] align-middle">
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

      <div id="contact" className="bg-gray-pk h-[60vh]">
        <div className="w-fit pl-[8vh] pt-[8vh]">
          <h1 className="text-blue-pk text-pk-blue font-robotoslab text-6xl font-bold">
            Kontakty
          </h1>
          <p className="pt-[4vh] text-[25px]">
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
