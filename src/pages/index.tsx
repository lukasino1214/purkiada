import Link from "next/link";

import { api } from "~/utils/api";

import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Domů</h1>
      <Footer />
    </div>
  );
};

export default Home;
