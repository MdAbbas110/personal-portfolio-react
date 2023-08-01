import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abbas Portfolio</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>

    <main className="px-10">
      <section className='min-h-screen'>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Abbas Abidi</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl"><BsFillMoonStarsFill/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
          </ul>
        </nav>
      </section>
    </main>

    </div>
  )
}
