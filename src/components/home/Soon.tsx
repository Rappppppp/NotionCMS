import React from 'react'

const Soon = () => {
    return (
        <>
            {/* <div className="main-bg h-[200vh]"></div> */}
            <section className="flex justify-center bg-primary-darker h-screen relative pt-20">
                <div className="flex flex-col w-full gap-y-20 mx-14 lg:mx-32">
                    <header className="font-yeseva text-[5rem] text-center text-secondary">soon to watch</header>
                    <div className="font-teachers">
                        <div className="bg-secondary h-full border-4 border-primary p-5 rounded-2xl">

                            <div className="lg:grid lg:grid-cols-5 gap-x-5 text-quarternary">
                                <div className="h-[10rem] lg:h-full w-full bg-slate-600 rounded-2xl lg:col-span-2"></div>
                                <div className="flex flex-col gap-y-5 lg:col-span-3 relative">
                                    <h1 className="mt-5 text-center text-3xl lg:text-left lg:mt-0 lg:text-5xl">Deadpool 3
                                    </h1>
                                    <p className="lg:text-lg text-justify">Lorem ipsum dolor sit amet consectetur
                                        adipisicing
                                        elit. Facere tempora maiores sit doloremque obcaecati laboriosam pariatur nihil
                                        saepe quasi neque recusandae excepturi vel, repellat voluptate nisi minus.
                                        Expedita
                                        inventore alias aliquam consequatur asperiores. Repellat ratione vero alias
                                        nobis
                                        delectus doloribus natus eveniet, aliquam, officia, itaque veritatis accusamus
                                        sed.
                                        Suscipit earum quo eos molestiae repellendus ipsum veniam sequi corporis
                                        cupiditate
                                        soluta qui explicabo architecto, placeat hic nesciunt eveniet doloribus modi
                                        esse
                                        accusamus velit. Sequi earum asperiores hic architecto amet quos sapiente odio
                                        obcaecati eveniet et, ratione unde eligendi eos corporis animi labore quas
                                        voluptates consectetur quam molestias eum. Ab, perferendis impedit.
                                    </p>
                                    <button
                                        className="absolute right-0 bottom-0 font-bold hover:underline transition duration-300 ease-in-out">read
                                        more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Soon