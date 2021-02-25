import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, createContext, useContext } from 'react'

const Context = createContext()

const Mago = () => {
  const { money } = useContext(Context)
  return <p>{money}円</p>
}

const Kodomo = () => <Mago />

const Home = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    // stateの変更などの再レンダリングの度に実行
    console.log('hello useEffect')
  }, [count])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Context.Provider value={{ money: 1000 }}>
        <Kodomo />
      </Context.Provider>

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
        <section style={{ marginTop: '40px' }}>
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
