import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js | TypeScript | TailwindCSS</title>
        <meta
          name="description"
          content="My Starter Code for a Next.JS TypeScript TailwindCSS project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Next.js TypeScript TailwindCSS
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
