import { type AppType } from "next/app";
import { Inter, Roboto, Roboto_Slab } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
  display: 'swap',
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: 'swap',
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-roboto ${inter.variable} ${roboto.variable} ${robotoSlab.variable}`}>
      <Head>
        <title>Purkiáda</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
