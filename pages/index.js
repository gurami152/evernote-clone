import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Note from './components/note';
import NoteDetails from './components/details';
import styles from '../styles/home.module.scss'

import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  const [ID, setID] = useState(null);
  const getSingleNote = (id) => {
    setID(id)
  }

  return (
    <div>
      <Head>
        <title>Drebezova Anhelina</title>
        <meta name="description" content="This is my website" />
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <Note getSingleNote={getSingleNote} />
        </div>
        <div className={styles.right}><NoteDetails ID={ID} /></div>
      </div>
    </div>
  )
}

