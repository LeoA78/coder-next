import React from 'react'
import Card from '../components/ui/Card'
import { getResoluciones } from '../services/directus'

const Resoluciones = async () => {
    const resoluciones = await getResoluciones();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-24">
            <h1 className='text-4xl m-10'>Resoluciones</h1>

            {resoluciones.map(({ id,number, description, fileUrl }) =>
                <Card key={id} title={number} description={description} url={fileUrl} />
            )}
        </main>
    )
}

export default Resoluciones