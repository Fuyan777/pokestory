import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Top</Link> | <Link href="/about">ポケファーム</Link> |{' '}
        <Link href="/users">ポケモン探索</Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>ポケファーム</span>
    </footer>
  </div>
)

export default Layout
