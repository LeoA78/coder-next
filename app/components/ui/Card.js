import React from 'react'
import Link from 'next/link'

const Card = ({title, description}) => {
    return (

        <div className="max-w-xxl p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Nº {title}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
            <Link href={`https://concejopicotruncado.com/ordenanzas/${title}.pdf`} target='_blank' className="inline-flex font-medium items-center text-blue-600 hover:underline">
                Ver PDF
            </Link>
        </div>

    )
}

export default Card