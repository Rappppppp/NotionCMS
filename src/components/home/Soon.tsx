"use client"

import { useState, useEffect } from 'react'

import Apollo from '@/server/Apollo'
import { Hearts } from 'react-loader-spinner'
import Image from 'next/image'

const Soon = () => {
    const [movies, setMovies] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await Apollo()
            setMovies(data.titles)
            setIsLoading(false)
        }

        fetchMovies()
    }, [])

    return (
        <>
            {/* <div className="main-bg h-[200vh]"></div> */}
            <section className="flex justify-center bg-primary-darker h-auto relative pt-20 pb-20">
                <div className="flex flex-col w-full gap-y-20 mx-14 lg:mx-32">
                    <header className="font-yeseva text-[5rem] text-center text-secondary">soon to watch</header>
                    <div className="font-teachers grid sm:grid-cols-1 grid-cols-2 gap-5">

                        {isLoading ? (
                            <div className='grid col-span-2 '>
                                <div className="bg-secondary row-span-2 border-4 border-primary p-5 rounded-2xl flex flex-col items-center">
                                    <Hearts color='#598F99' />
                                    <h1 className='text-3xl text-black'>Loading</h1>
                                </div>
                            </div>
                        ) : movies.map((movie: any) => {
                            return (
                                <div key={movie.id} className="bg-secondary border-4 border-primary p-5 rounded-2xl grid">
                                    <div className="flex flex-row gap-x-5 text-quarternary">
                                        <Image src={movie.posters[0].url} alt={`${movie.primary_title} Poster`} width={300} height={300} className="w-[10rem] bg-slate-600 rounded-2xl lg:col-span-1 object-cover" />
                                        <div className="flex flex-col gap-y-5 relative">
                                            <h1 className="mt-5 text-3xl text-left lg:mt-0 lg:text-5xl">{movie.primary_title}</h1>
                                            <p className="lg:text-md">{movie.start_year}</p>
                                            <p className="lg:text-md">{movie.origin_countries[0].name}</p>
                                            <p className="lg:text-lg">Genre: {movie.genres.join(', ')}</p>
                                            <p className="lg:text-lg">{movie.plot}</p>
                                            {/* <button className="absolute right-0 bottom-0 font-bold hover:underline transition duration-300 ease-in-out">read more</button> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Soon