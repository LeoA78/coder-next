'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathName = usePathname();

  const links = [
    { id: 1, name: 'Inicio', url: '/' },
    { id: 2, name: 'Ordenanzas', url: '/ordenanzas' },
    { id: 3, name: 'Resoluciones', url: '/resoluciones' },
    { id: 4, name: 'Decretos', url: '/decretos' }
  ]


  return (
    <header className="w-full bg-gray-600">
      <div className="container m-auto py-6 flex justify-between items-center">
        <p className="text-4xl text-bold text-slate-100">
          <Image
            src={"/vercel.svg"}
            alt="logo"
            width={200}
            height={200}
          />
        </p>
        <nav href="#" className='flex justify-between gap-2'>
          {links.map((link) => (
            <a key={link.id} href={link.url} className={`${pathName === link.url ? 'font-bold' : ''} text-base text-slate-100 p-3`}>{link.name}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header