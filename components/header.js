import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6 bg-green-500 opacity-50">
      <nav className="space-x-4 p-2">
        <Link href="/">
          <a>Anasayfa</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
      </nav>
    </header>
  )
}
