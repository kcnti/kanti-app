import '@/css/about.css'
import '@/app/globals.css'

import {activities, competition} from '@/data/about.js'
import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <div className='container'>
        <Head>
            <title>About | Kanti</title>
            <meta name="description" content="About me" data-rh="true" />
            <meta property="og:title" content="About" data-rh="true"/>
            <meta property="og:description" content="About me" data-rh="true"/>
            <meta property="og:image" content="https://cdn.kanti.pw/assets/preview.png" data-rh="true"/>
            <meta property="og:url" content='https://kanti.pw' data-rh="true"/>
            <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
            <meta name="twitter:image:alt" content="https://cdn.kanti.pw/assets/preview.png" data-rh="true"/>

            <meta name="keywords" content="About" />
            <meta name="author" content="Kantinun" />
        </Head>
        <header>About</header>
        <div className='not-home-split'></div>
        <div className='section'>
            <h4>Me</h4>
            <ul className='list-disc bullet'>
                <li>Name: Kantinun</li>
                <li>Nickname: Earth</li>
                <li>Date of Birth: 27 Feb 2004</li>
                <li>Education
                    <ul className='list-inside'>
                        <li>Denla (Phetkasem)</li>
                        <li>Satit Prasarnmit Demonstration School (Primary)</li>
                        <li>Satit Prasarnmit Demonstration School (Secondary)</li>
                        <li>Chulalongkorn University</li>
                    </ul>
                </li>
            </ul>
            <div className='social'>
                <a className='social-box' href="https://www.linkedin.com/in/earthktn/">Linkedin</a>
                <a className='social-box' href="https://github.com/kcnti/">Github</a>
                <a className='social-box' href="https://monkeytype.com/profile/kcnti">Monkeytype</a>
                <a className='social-box' href="https://data.typeracer.com/pit/profile?user=gunjique&ref=badge">Typeracer</a>
            </div>
        </div>
        <div className='not-home-split'></div>
        <div className='section'>
            <h4>Activity</h4>
            <ul className='list-disc bullet'>
                {activities.map((data, idx) => (
                    <>
                        <li key={idx}>{data}</li>
                    </>
                ))}
            </ul>
        </div>
        <div className="not-home-split"></div>
            <div className="section">
                <h4>Competition</h4>
                <ul className='list-disc bullet'>
                    {competition.map(data => (
                        Object.keys(data).map((title, idx) => (
                            <li key={idx}>
                                {title}
                                <ul className="list-circle list-inside" key={title}>
                                    <li key="1">{data[title].ranking}</li>
                                    <li key="2">Issued by <span style={{ color: '#D5CEA3' }}>{data[title].issuer}</span></li>
                                    <li key="3">Date: <span style={{ color: '#D5CEA3' }}>{data[title].date}</span></li>
                                    <li key="4">Cert: {data[title].certificates !== 'no cert' ? <Image alt={title} style={{ width: 100, display: "block" }} src={data[title].certificates.src} /> : 'no cert'}</li>
                                </ul>
                            </li>
                        ))
                    ))}
                </ul>
            </div>
    </div>
  )
}
