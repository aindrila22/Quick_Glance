import Button from "@/components/Button";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quick Glance | Solve It Out</title>
      </Head>

      <main className="w-full max-w-5xl mx-auto py-10 text-xl flex flex-wrap justify-center gap-4 px-4">
        <Button href="/questions/question1" title="Question 1" />
      </main>
    </>
  );
}
