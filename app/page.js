import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import abbas from '../public/dev-ed-wave.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abbas Portfolio</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>

    <main className="px-10 bg-white">
      <section className='min-h-screen'>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons text-black">Abbas Abidi</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl text-black"><BsFillMoonStarsFill/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
          </ul>
        </nav>

        {/* main section  */}
        <div className="text-current p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Abbas Abidi</h2>
            <h3 className="text-2xl py-2 text-black">Developer and Designer.</h3>
            <p className="text-md py-5 leading- text-gray-800">
              MERN stack developer, providing services for programming need. Join me down below and let`s get cracking 
            </p>
        </div>
        <div className="text-gray-600 text-5xl flex justify-center gap-16 py-3 text">
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillTwitterCircle />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={abbas} layout="fill" objectFit="cover" alt="Img" />
        </div>
      </section>
    </main>

    </div>
  )
}
