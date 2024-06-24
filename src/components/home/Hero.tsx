import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="main-bg h-screen"></div>
            <section className="flex h-screen items-center text-secondary text-center lg:text-justify mx-10 lg:mx-32 overflow-hidden relative">

                <div className="flex flex-col gap-y-12 relative">
                    <header className="font-yeseva text-5xl lg:text-[5rem]">film journal</header>
                    <div className="font-teachers text-md text-justify lg:text-lg">Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. At molestiae in quos itaque officiis nobis. Possimus rerum, asperiores est
                        perspiciatis iste quidem et sunt quod consequuntur. A ipsum, quam perferendis similique ea quasi
                        quo, earum iusto quae nihil odio eaque dolorum eos corrupti unde? Ullam temporibus nisi architecto
                        atque dicta rerum, deserunt reiciendis optio tempore nam libero, nostrum a. Exercitationem vero
                        vitae voluptates magni ipsam cupiditate eius amet, similique ut nisi nihil quaerat modi veniam totam
                        adipisci culpa dolor in doloremque, magnam ipsum! Id cupiditate consectetur harum sunt ad officiis
                        necessitatibus in molestias quibusdam atque, molestiae iste mollitia ipsum aut!</div>
                    <a href='/journals' className="font-teachers font-bold self-center lg:self-start bg-primary px-8 py-3 text-md lg:text-lg rounded-2xl hover:brightness-75 ease-in-out duration-300">go to journal</a>
                </div>
            </section>
        </>
    )
}

export default Hero