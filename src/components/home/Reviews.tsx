import React from 'react'
import Image from 'next/image'

import Moon from '@/image/accessories/moon.png'
import Button from '@/image/accessories/button.png'
import CardBG from '@/image/card-bg.jpg'
import WhiteFlower from '@/image/accessories/white-flower.png'
import YellowFlower from '@/image/accessories/yellow-flower.png'

const Reviews = () => {
    return (
        <section className="bg-secondary border-[.8rem] border-orange h-auto relative">
            <Image src={WhiteFlower} className="absolute bottom-0" alt="White Flower" />
            <Image src={YellowFlower} className="absolute top-0 right-0 -mt-16" alt="Yellow Flower" />
            <div className="my-20">
                <header className="flex flex-row justify-center my-10 text-quarternary font-yeseva text-[3rem] relative">
                    <Image src={Moon} className="sm:hidden -mt-5" alt="" />
                    <p>film reviews</p>
                </header>
                <div className="flex flex-col justify-center mt-16 font-teachers m-5 gap-5 lg:gap-5 lg:m-0 lg:flex-row">
                    <div className="p-5 bg-primary h-auto rounded-2xl lg:w-[25%]">
                        <div className="grid grid-rows-2 gap-y-5">
                            <div className="flex lg:flex-row items-center gap-3">
                                <div className="h-auto w-auto">
                                    <div className="h-[5rem] w-[5rem] bg-gray-800 rounded-full"></div>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-3xl">
                                        <span className="font-bold">Rap: </span> Inside Out 2
                                    </div>
                                    <div>⭐⭐⭐ 3/5</div>
                                </div>
                            </div>
                            <div className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
                                cupiditate impediteius sint suscipit distinctio, nesciunt qui necessitatibus! Labore,
                                deleniti?</div>
                        </div>
                    </div>
                    <div
                        className="relative items-center p-2 bg-gradient-to-b from-[#a82103] via-[#962a08] to-[#e6c204] h-auto lg:w-[25%] rounded-2xl">
                        <Image src={CardBG} className="bg-gray-800 h-[10rem] lg:h-full w-full rounded-2xl object-cover" alt='Card BG'/>
                        <Image src={Button} className="literal-button w-20 h-20" alt="Button" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews