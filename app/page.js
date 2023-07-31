import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abbas Portfolio</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>

    <main>
      <section className='min-h-screen'>
        <nav>
          <h1>Abbas Abidi</h1>
          <ul>
            <li><BsFillMoonStarsFill/></li>
            <li><a href="#">Resume</a></li>
          </ul>
        </nav>
      </section>
    </main>

    </div>
  )
}
