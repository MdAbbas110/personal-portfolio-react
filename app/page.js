'use client';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import Image from 'next/image';
import abbas from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Abbas Portfolio</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>

      <main className='px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons text-black dark:text-gray-300'>
              Abbas Abidi
            </h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl text-black dark:text-white'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* main section  */}
          <div className='text-current p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl text-center'>
              Abbas Abidi
            </h2>
            <h3 className='text-2xl py-2 text-black md:text-3xl text-center dark:text-gray-300'>
              Developer and Designer.
            </h3>
            <p className='text-md py-5 leading- text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
              MERN stack developer, providing services for programming need.
              Join me down below and let`s get cracking
            </p>
          </div>
          <div className='text-gray-600 text-5xl flex justify-center gap-16 py-3 dark:text-gray-300'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillTwitterCircle />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={abbas} layout='fill' objectFit='cover' alt='Img' />
          </div>
        </section>

        {/* Second section  */}
        <section>
          <div>
            <h3 className='text-3xl text-black py-1 dark:text-gray-300'>
              Services I offer
            </h3>
            <p className='text-md text-gray-800 dark:text-gray-400'>
              Since the beginning of my journey as a freelance developer, I`ve
              done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className='lg:flex gap-10 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image
                className='ml-20'
                alt='card'
                src={design}
                width={100}
                height={100}
              />
              <h3 className='text-xl font-medium text-gray-900 pt-8 p-b2'>
                Beautiful Designs
              </h3>
              <p className='py-2 text-gray-800'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800'>Figma</p>
              <p className='text-gray-800'>Illustrator</p>
              <p className='text-gray-800'>PhotoShop</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image
                className='ml-20'
                alt='card'
                src={code}
                width={100}
                height={100}
              />
              <h3 className='text-xl font-medium text-gray-900 pt-8 p-b2'>
                Beautiful Designs
              </h3>
              <p className='py-2 text-gray-800'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800'>Figma</p>
              <p className='text-gray-800'>Illustrator</p>
              <p className='text-gray-800'>PhotoShop</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image
                className='ml-20'
                alt='card'
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className='text-xl font-medium text-gray-900 pt-8 p-b2'>
                Beautiful Designs
              </h3>
              <p className='py-2 text-gray-800'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800'>Figma</p>
              <p className='text-gray-800'>Illustrator</p>
              <p className='text-gray-800'>PhotoShop</p>
            </div>
          </div>
        </section>

        {/* projects section  */}
        <section>
          <div>
            <h3 className='text-3xl py- text-gray-900 dark:text-teal-500'>
              Portfolio
            </h3>
            <p className='text-md text-gray-800 dark:text-gray-400'>
              Since the beginning of my journey as a freelance developer, I`ve
              done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-teal-600'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web1}
                alt='img'
                className='rounded-xl object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>

            <div className='basis-1/3 flex-1'>
              <Image
                src={web2}
                alt='img'
                className='rounded-xl object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>

            <div className='basis-1/3 flex-1'>
              <Image
                src={web3}
                alt='img'
                className='rounded-xl object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>

            <div className='basis-1/3 flex-1'>
              <Image
                src={web4}
                alt='img'
                className='rounded-xl object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>

            <div className='basis-1/3 flex-1'>
              <Image
                src={web5}
                alt='img'
                className='rounded-xl object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>

            <div className='basis-1/3 flex-1'>
              <Image
                src={web6}
                alt='img'
                className='rounded-xl object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
