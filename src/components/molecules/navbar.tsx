import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='h-[50px] w-full border-b bg-card'>
      <div className='container flex h-full items-center justify-between px-2'>
        <Link href='/'>BDISC Search</Link>
      </div>
    </nav>
  )
}
