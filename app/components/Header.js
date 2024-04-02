'use client'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathName = usePathname();

  const links = [
    { id: 1, name: 'Inicio', url: '/' },
    { id: 2, name: 'Ordenanzas', url: '/ordenanzas' },
    { id: 3, name: 'Resoluciones', url: '/resoluciones' },
  ]


  return (
    <header className="bg-gray-600">
      <div className="container px-6 m-auto py-4 flex justify-between items-center">
        <p className="text-3xl text-bold text-slate-100">
        Digesto Online
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