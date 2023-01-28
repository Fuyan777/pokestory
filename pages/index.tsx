import Link from 'next/link'
import Layout from '../components/Layout'
import { useSprings, animated } from '@react-spring/web'

const IndexPage = () => (
  <Layout title="top">
    <h1>ポケモンストーリー</h1>
    <p>
      <Link href="/farm">始めよう！</Link>
    </p>
  </Layout>
)

export default IndexPage;