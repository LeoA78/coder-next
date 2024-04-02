import React from 'react'
import { ordenanzas } from '../mocks/ordenanzas'
import Card from '../components/ui/Card'

const Ordenanzas = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className='text-4xl mb-6'>Ordenanzas</h1>

            {ordenanzas.map(ordenanza =>
                <Card key={ordenanza.id} title={ordenanza.id} description={ordenanza.description} />
            )}
        </main>
    )
}

export default Ordenanzas