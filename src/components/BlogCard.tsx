import Image from 'next/image';
import InteractiveCard from './InteractiveCard'


export default function BlogCard({ blogName, imgSrc, desc} : { blogName:string, imgSrc:string, desc:string}) {
    return (
            <InteractiveCard>
                <div className='w-full h-[300px] bg-white rounded-xl overflow-hidden rounded-lg drop-shadow-md'>
                    <div className='w-full h-[60%] relative rounded-t-lg'>
                        <Image className='object-cover'
                            src={imgSrc}
                            alt='Blog Image'
                            fill={true}
                            priority/>
                    </div>
                    <div className='px-2 py-2'>
                        <h3 className='font-bold text-2xl'>{blogName}</h3>
                        <p className='text-gray-400 text-sm px-2 py-1'>{desc}</p>
                    </div>
                </div>
            </InteractiveCard>
    )
}