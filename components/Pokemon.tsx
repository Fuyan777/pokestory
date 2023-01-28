import React, { ReactNode } from 'react'
import style from '../styles/Layout.module.css'
import { useSpring, animated } from '@react-spring/web'
import { useState, useEffect } from 'react'

type Props = {
  url: string,
  top: number,
  left: number,
}

const Pokemon = ({ url, top, left }: Props) => {
  const num = () => Math.floor(Math.random() * 10) + 1 // 1-10
  const [rand, setRand] = useState(num());

  useEffect( () => {
    setRand(num())
  })

  const springs = useSpring({
    from: { x: rand+50, y: rand+50 },
    to: { x: 100 - rand*10, y: 100 + rand*3 },
    loop: {
      reverse: true,
    },
    config: { duration: 1500 },
    onStart: () => {
      setRand(num())
    }
  })

  return (
    <animated.div className={style.pokemonStyle} style={{top: top+'px', left: left+'px', ...springs}}>
      <img 
        src={url}
        width={50}
        height={50}
        alt="pokemon"
      />
    </animated.div>
  )
}

export default Pokemon
