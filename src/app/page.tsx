
import Hero from "@/components/home/Hero";

import '@/components/css/homepage.css'
import Reviews from "@/components/home/Reviews";
import Soon from "@/components/home/Soon";

export default function Home() {
  return (
    <>
      <Hero/>
      <Reviews/>
      <Soon/>
    </>
  );
}
