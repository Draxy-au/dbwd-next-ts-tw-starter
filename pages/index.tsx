import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js | TypeScript</title>
        <meta
          name="description"
          content="My Starter Code for a Next.JS TypeScript project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Base starter for Next.js and Typescript
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
