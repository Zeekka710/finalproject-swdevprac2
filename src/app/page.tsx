'use client'
import React from "react";
import Image from "next/image"
import { useRouter } from 'next/navigation';

export default function LandingPage() {

  const bg = {
    backgroundImage: "url(/img/bg.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }

  const covers = ['/img/course/foot.png', '/img/course/body.png', '/img/course/hand.png']
  
  const router = useRouter()

  return (
    <main className="min-h-screen items-center justify-between overflow-hidden" style={bg}>
      <div className="pl-[55px] mt-[120px] inline-grid grid-cols-2">
        <div className="pt-[50px] mz-0 font-bold font-Inter text-[64px] text-[#FFFDD9]">
          <p>Escape the stress,</p>
          <p className="mx-[50px] mr-[100px]">Embrace <span className="text-[#F6CDA9]">the calm.</span> </p>
        </div>
        <div className="z-30 pl-0 w-full h-full grid grid-cols-2 gap-y-6 gap-x-6">
            <Image src={covers[0]}
                       alt='Product Picture 1'
                       width={667}
                       height={512}
                       className="w-[60%] oject-cover rounded-t-lg col-span-2 justify-self-center"
            />
            <Image src={covers[1]}
                       alt='Product Picture 2'
                       width={400}
                       height={512}
                       className="object-cover w-[80%] justify-self-end"
            />
            <Image src={covers[2]}
                       alt='Product Picture 3'
                       width={400}
                       height={512}
                       className="object-cover w-[80%] justify-self-start"
            />
        </div>
        <div className="font-Inter -mt-[230px] pl-[50px] z-0">
          <div className="w-[554px] h-[100px] mix-blend-luminosity text-[#425466] text-lg font-normal tracking-wide leading-loose">
            Step into a world of relaxation and rejuvenation, where every detail is designed to provide you with an exceptional wellness experience. 
            Our skilled therapists specialize in a variety of massage techniques, from deep tissue to Swedish and hot stone, 
            each tailored to meet your unique needs.
          </div>
          <button className="mt-[95px] h-[33px] w-[110px] rounded-[100px] text-black flex bg-white hover:bg-[#11253e] hover:text-white" onClick={(e)=>{router.push('/shop'); e.stopPropagation()}}>
            <div className="pl-[15px] pt-[7px] text-[13px] tracking-wide">Book Now</div>
            <Image src={'/img/signin-button.png'} alt='signin' width={300} height={513} className="mt-[8px] pl-[5px] object-contain w-[15px] h-auto"/>
          </button>
        </div>
      </div>
    </main>
  );
}
