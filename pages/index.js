import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <p>counter: {count}</p>
          <button
            onClick={() => {
              setCount(count + 1)
            }}
          >
            countUp[+]
          </button>
        </section>
        <section style={{ 'margin-top': '40px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <p>わたしの名前は {name} です。</p>
        </section>
      </main>
    </div>
  )
}
export default Home
