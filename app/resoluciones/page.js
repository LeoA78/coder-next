import React from 'react'
import { resoluciones } from '../mocks/resoluciones'
import Card from '../components/ui/Card'

const Resoluciones = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-24">
            <h1 className='text-4xl m-10'>Resoluciones</h1>

            {resoluciones.map(({ id, description }) =>
                <Card key={id} title={id} description={description} url={`https://concejopicotruncado.com/resoluciones/${id}.pdf`} />
            )}
        </main>
    )
}

export default Resoluciones