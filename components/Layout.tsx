import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import style from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'poke' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={style.main}>
      <nav>
        <Link href="/">Top</Link>{'  '}|{'  '}
        <Link href="/farm">ポケファーム</Link>{'  '}|{'  '}
        <Link href="/adventure">ポケモン探索</Link>{'  '}|{'  '}
        <Link href="/divination">今日のポケモン占い</Link>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
