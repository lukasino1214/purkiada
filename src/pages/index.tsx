import Link from "next/link";

import { api } from "~/utils/api";

const Home = () => {
  return (
    <div>
      <div className="h-[92vh] bg-[#5088b5]">
        <img src="" alt="LogoHomepage" />
        <h1>
          Purkiáda je IT soutěž pro žáky 9. ročníku ZŠ pořádaná ročně na
          Purkyňce.
        </h1>
        <a href="#registration">
          <button>Registrovat se</button>
        </a>
        <img src="" alt="Pacman" />
      </div>



      <div id="registration" className="h-[50vh] bg-[#f0f2f2]">
        {/* <img src="" alt="registrationBackground" /> */}
        <div className="pt-[8vh] pl-[8vh] w-fit">
          <h1 className="text-[6vh] text-[#5088b5]">Registrace</h1>
          <div className="pt-[4vh] w-[40vw] text-[#3c3c3b]">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae molestie
            nibh, vitae posuere arcu. Sed ac porta lacus, et maximus ipsum. Aliquam et mauris
            eget est rhoncus pharetra a ac dui. Proin placerat est in nisi laoreet, eu malesuada
            ipsum interdum. Integer feugiat lacinia eros, non vehicula diam interdum ac.
            </p>
            <br />
            <Link href={"/registration"} className="p-[2vh] block bg-[#fab400] w-max font-bold">REGISTROVAT SE</Link>
          </div>
        </div>
      </div>


      <div id="about" className="h-[60vh] bg-[#5088b5] text-[#f0f2f2]">
        {/* <img src="" alt="aboutBackroundImage" />
        <img src="" alt="aboutImage" /> */}
        <div className="pt-[8vh] pl-[8vh] w-fit">
          <h1 className="text-[6vh]">O čem Purkiáda vlastně je?</h1>
          <div className="pt-[4vh] w-[40vw]">
            <p>
              Pokud tě zajímají počítače a logické úlohy, Purkiáda je pro tebe.
              Soutěž spočívá v plnění různých úloh připravených studenty oboru
              Informační technologie. Po skončení soutěže je pro zájemce připravená
              prohlídka školy
            </p>
            <br />
            <p>
              Pro řešení úloh nepotřebuješ znalosti žádných speciálních programů
              nebo programovacích jazyků.
            </p>
          </div>
        </div>
      </div>



      <div id="history" className="h-[60vh] bg-[#f0f2f2]">
        {/* <img src="" alt="historyBackgroundImage" />
        <img src="" alt="historyImage1" />
        <img src="" alt="historyImage2" /> */}
        <div className="pt-[8vh] pl-[8vh] w-fit">
          <h1 className="text-[6vh] text-[#5088b5]">Historie soutěže</h1> 
          <p className="pt-[4vh] w-[40vw]">
            Soutěž vznikla v roce 2009 jako možnost pro zájemce o studium, jako
            jsi ty, poznat, v čem opravdu spočívá studium oboru Informačních
            technologií. Na přijímacích zkouškách není žádná zkouška z
            informatiky, takže ti, kteří se o počítačovou tématiku zajímali,
            neměli vetší šanci uspět, nebo se nějak prosadit mezi ostatními
            uchazeči.
          </p>
        </div>
      </div>



      <div id="recentYears" className="bg-[#5088b5] py-[10vh]">
        {/* <img src="" alt="recentYearsBackgroundImage" /> */}
        <div className="w-full flex align-middle justify-center items-center text-[6vh] text-[#f0f2f2]">
          <h1>Předešlé ročníky</h1>
        </div>
        <div className="w-full flex align-middle justify-center items-center text-[#f0f2f2] pt-[5vh]">
          <div className="grid grid-cols-2 w-[60vh] text-[2vh]">
            <div className="text-center">2024 - <a className="underline font-bold" href="">Purkiada2024.pdf</a></div>
            <div className="text-center">2023 - <a className="underline font-bold" href="">Purkiada2023.pdf</a></div>
            <div className="text-center">2022 - <a className="underline font-bold" href="">Purkiada2022.pdf</a></div>
            <div className="text-center">2021 - <a className="underline font-bold" href="">Purkiada2021.pdf</a></div>
            <div className="text-center">2020 - <a className="underline font-bold" href="">Purkiada2020.pdf</a></div>
            <div className="text-center">2019 - <a className="underline font-bold" href="">Purkiada2019.pdf</a></div>
            <div className="text-center">2018 - <a className="underline font-bold" href="">Purkiada2018.pdf</a></div>
            <div className="text-center">2017 - <a className="underline font-bold" href="">Purkiada2017.pdf</a></div>
            <div className="text-center">2016 - <a className="underline font-bold" href="">Purkiada2016.pdf</a></div>
            <div className="text-center">2015 - <a className="underline font-bold" href="">Purkiada2015.pdf</a></div>
          </div>
        </div>
      </div>



      <div id="contact" className="h-[60vh] bg-[#f0f2f2]">
        <div className="pt-[8vh] pl-[8vh] w-fit">
          <h1 className="text-[6vh] text-[#5088b5]">Kontakty</h1> 
          <p className="pt-[4vh]">
            V případě jakýchkoliv dotazů nás neváhej kontaktovat přes e-mail
          </p>
          <a className="underline font-bold text-[#3e6182]" href="">lenka.hruskova@purkynka.cz</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
