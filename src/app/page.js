import '../css/home.css'

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
        <title>Home | Kanti</title>
        <meta name="description" content="nothing special here" data-rh="true" />
        <meta property="og:title" content="Home" data-rh="true"/>
        <meta property="og:description" content="nothing here" data-rh="true"/>
        <meta property="og:image" content="https://kanti.pw/assets/preview.png" data-rh="true"/>
        <meta property="og:url" content='https://kanti.pw' data-rh="true"/>
        <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
        <meta name="twitter:image:alt" content="https://kanti.pw/assets/preview.png" data-rh="true"/>

        <meta name="keywords" content="Home, About, Blog, GCC2024" />
        <meta name="author" content="Kantinun" />
    </Head>
    <div className="container mx-auto">
      <div className="header">
        <h1>K A N T I</h1>
        <p className="header">earthktn</p>
      </div>
    </div>
    <div className='split'></div>
    <div className="container mx-auto">
      <div className='hub'>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-y-4'>
          <div className='portal'>
            <Link href='/' className='portal'>Home</Link>
          </div>
          <div className='portal'>
            <Link href='/about' className='portal'>About</Link>
          </div>
          <div className='portal'>
            <Link href='/blog' className='portal'>Blog</Link>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
