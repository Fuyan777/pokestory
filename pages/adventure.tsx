import Link from 'next/link'
import Layout from '../components/Layout'

const FarmPage = () => (
  <Layout title="adventure">
    <h1>ポケモン探索</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go Top</Link>
    </p>
  </Layout>
)

export default FarmPage
