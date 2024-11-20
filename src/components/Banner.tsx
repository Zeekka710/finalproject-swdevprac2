import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div>
            <div className="w-[661px] h-[191px]"></div>
                <span className="text-[#8a4040] text-[64px] font-bold font-Inter leading-[96px]">Escape the stress, Embrace </span>
                <span className="text-[#8a4040] text-[64px] font-bold font-Inter leading-[96px]">the calm.</span>
            <Image className="w-auto h-auto rounded-[30px]" src="/img/course/body.png"  alt="Massage-1" width={0} height={0}/>
        </div> 
    );
}
