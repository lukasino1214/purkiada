import Link from "next/link";

import { api } from "~/utils/api";

import Navbar from "~/components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Domů</h1>
    </div>
  );
};

export default Home;
