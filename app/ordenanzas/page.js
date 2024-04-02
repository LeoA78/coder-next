import React from 'react'
import { ordenanzas } from '../mocks/ordenanzas'
import Card from '../components/ui/Card'

const Ordenanzas = () => {
    return ( <main className="flex min-h-screen flex-col items-center justify-between px-24">
            <h1 className='text-4xl m-10'>Ordenanzas</h1>

            {ordenanzas.map(({ id, description }) =>
            <Card key={id} title={id} description={description} url={`https://concejopicotruncado.com/ordenanzas/${id}.pdf`} />
            )}
        </main>
    )
}

export default Ordenanzas