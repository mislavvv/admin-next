import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Home page</h1>

        <Link href="/dashboard">
          <button>Go to Dashboard</button>
        </Link>
      </div>
    </>
  );
}
