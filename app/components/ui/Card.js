import React from 'react'
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

const Card = ({ title, description, url }) => {
    return (

        <div className="divide-y divide w-full p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow ">
            <div className="max-w-xxl flex justify-between items-center">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Nº {title}</h5>
                <FavoriteButton />
            </div>
            <div className="pt-4">
                <p className="mb-3 font-normal text-gray-500">{description}</p>
                <Link href={url} target='_blank' className="inline-flex font-medium items-center text-blue-600 hover:underline">
                   <p className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                        Ver PDF
                    </p>
                </Link>
            </div>
        </div>

    )
}

export default Card