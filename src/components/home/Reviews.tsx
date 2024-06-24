"use client";

import { useState } from 'react';
import Image from 'next/image';

import Moon from '@/image/accessories/moon.png';
import Button from '@/image/accessories/button.png';
import CardBG from '@/image/card-bg.jpg';
import WhiteFlower from '@/image/accessories/white-flower.png';
import YellowFlower from '@/image/accessories/yellow-flower.png';

import '@/components/css/flip.css';

type ReviewProps = {
    author: string
    movie: string
    rating: number
    message: string
}

const Review = (props: ReviewProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
            <div className="flex flip-container w-auto gap-5 h-10% rounded-2xl" onClick={handleFlip}>
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                    <div className="flip-card-front absolute">
                        <Image src={CardBG} className="rounded-2xl h-full object-cover" alt='Card BG' />
                        <Image src={Button} className="literal-button w-20 h-20" alt="Button" />
                    </div>
                    <div className="flip-card-back">
                        <div className="grid grid-rows-1 lg:grid-rows-2 gap-y-5">
                            <div className="flex lg:flex-row items-center gap-3">
                                <div className="h-auto w-auto">
                                    <div className="h-[5rem] w-[5rem] bg-gray-800 rounded-full"></div>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-3xl">
                                        <span className="font-bold">{props.author}: </span> {props.movie}
                                    </div>
                                    <div>{'⭐'.repeat(props.rating)} {props.rating}/5</div>
                                </div>
                            </div>
                            <div className="text-justify">{props.message}</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const Reviews = () => {

    return (
        <section className="bg-secondary border-[.8rem] border-orange h-auto relative">
            <Image src={WhiteFlower} className="sm:hidden absolute bottom-0" alt="White Flower" />
            <Image src={YellowFlower} className="sm:hidden absolute top-0 right-0 -mt-16" alt="Yellow Flower" />
            <div className="my-20">
                <header className="flex flex-row justify-center my-10 text-quarternary font-yeseva text-[3rem] relative">
                    <Image src={Moon} className="sm:hidden -mt-5" alt="" />
                    <p>film reviews</p>
                </header>

                <div className='mx-[15%] grid lg:grid-cols-2 justify-center mt-16 font-teachers m-5 gap-5'>

                <Review author='Rap' movie='Inside Out 2' rating={5} message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde sed repudiandae corrupti repellat est quisquam ipsa corporis tenetur! Sint officia quas, minus sapiente sed eius quis, laboriosam blanditiis, voluptate optio maxime? Cumque praesentium laudantium cum. Neque laudantium expedita illum, voluptas, nobis numquam in vero autem cumque distinctio maiores obcaecati.' />

                <Review author='Laila' movie='Inside Out 2' rating={4} message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde sed rep. Neque laudantium expedita illum, voluptas, nobis numquam in vero autem cumque distinctio mai' />

                <Review author='Rap' movie='Inside Out 2' rating={3} message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde sed repudiandae corrupti repellat est quisquam ipsa corporis tenetur! Sint officia quas, minus sapiente sed eius quis, laboriosam blanditiis, voluptate optio maxime? Cumque praesentium laudantium cum. Neque laudantium expedita illum, voluptas, nobis numquam in vero autem cumque distinctio maiores obcaecati.' />
                
                </div>
            </div>
        </section>
    );
};

export default Reviews;
