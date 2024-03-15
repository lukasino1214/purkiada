import Head from "next/head";
import Link from "next/link";

import Trial from "~/components/trial";
import { Test } from "~/components/Test";

import { api } from "~/utils/api";

function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Trial name={"Tibor"} age={18} />
      <Test name={"Test"} age={20} />
    </div>
  );
}

export default Home;
