import Link from 'next/link'
import { useRef, useEffect } from 'react'
import Layout from '../components/Layout'
import Pokemon from '../components/Pokemon'

import style from '../styles/Layout.module.css'

const FarmPage = () => {
  const pokemonImages: string[] = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
  ];

  return (
      <Layout title="farm">
      <h1>ポケモンファーム</h1>
        <div className={style.img}>
          <Pokemon url={pokemonImages[0]} top={100} left={-50}></Pokemon>
          <Pokemon url={pokemonImages[1]} top={120} left={80}></Pokemon>
          <Pokemon url={pokemonImages[2]} top={140} left={-190}></Pokemon>
        </div>
      <p><Link href="/">Go Top</Link></p>
    </Layout>
  )
}

export default FarmPage
