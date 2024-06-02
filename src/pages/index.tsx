import Link from "next/link";

import { api } from "~/utils/api";

import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div>
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
      <br />

      <div id="registration">
        <img src="" alt="registrationBackground" />
        <h1>Registrace</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vitae molestie nibh, vitae posuere arcu. Sed ac porta lacus, et
          maximus ipsum. Aliquam et mauris eget est rhoncus pharetra a ac dui.
          Proin placerat est in nisi laoreet, eu malesuada ipsum interdum.
          Integer feugiat lacinia eros, non vehicula diam interdum ac.
        </p>
        <Link href={"/registration"}>Registrovat se</Link>
      </div>
      <br />

      <div id="about">
        <img src="" alt="aboutBackroundImage" />
        <img src="" alt="aboutImage" />
        <h1>O čem Purkiáda vlastně je?</h1>
        <p>
          Pokud tě zajímají počítače a logické úlohy, Purkiáda je pro tebe.
          Soutěž spočívá v plnění různých úloh připravených studenty oboru
          Informační technologie. Po skončení soutěže je pro zájemce připravená
          prohlídka školy
        </p>
        <p>
          Pro řešení úloh nepotřebuješ znalosti žádných speciálních programů
          nebo programovacích jazyků.
        </p>
      </div>
      <br />

      <div id="history">
        <img src="" alt="historyBackgroundImage" />
        <img src="" alt="historyImage1" />
        <img src="" alt="historyImage2" />
        <h1>Historie soutěže</h1>
        <p>
          Soutěž vznikla v roce 2009 jako možnost pro zájemce o studium, jako
          jsi ty, poznat, v čem opravdu spočívá studium oboru Informačních
          technologií. Na přijímacích zkouškách není žádná zkouška z
          informatiky, takže ti, kteří se o počítačovou tématiku zajímali,
          neměli vetší šanci uspět, nebo se nějak prosadit mezi ostatními
          uchazeči.
        </p>
      </div>
      <br />

      <div id="recentYears">
        <img src="" alt="recentYearsBackgroundImage" />
        <h1>Předešlé ročníky</h1>
        2024 - <a href="">Purkiada2024.pdf</a>
        <br />
        2023 - <a href="">Purkiada2023.pdf</a>
        <br />
        2022 - <a href="">Purkiada2022.pdf</a>
        <br />
        2021 - <a href="">Purkiada2021.pdf</a>
        <br />
        2020 - <a href="">Purkiada2020.pdf</a>
        <br />
        2019 - <a href="">Purkiada2019.pdf</a>
        <br />
        2018 - <a href="">Purkiada2018.pdf</a>
        <br />
        2017 - <a href="">Purkiada2017.pdf</a>
        <br />
        2016 - <a href="">Purkiada2016.pdf</a>
        <br />
        2015 - <a href="">Purkiada2015.pdf</a>
        <br />
      </div>
      <br />

      <div id="contacts">
        <h1>Kontakty</h1>
        <p>
          V případě jakýchkoliv dotazů nás neváhej kontaktovat přes e-mail{" "}
          <a href="">lenka.hruskova@purkynka.cz</a>
        </p>
      </div>
      <br />

      <Footer />
    </div>
  );
};

export default Home;
