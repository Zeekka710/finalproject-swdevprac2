import Link from "next/link";

export default function TopMenuItem ( { title, pageRef } : { title:string,
    pageRef:string } ){
        return (
            <a
            href={pageRef}
            className='w-[120px] text-lg text-black px-[20px] py-[10px] rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mx-[20px]'
            rel="noopener noreferrer" >
                {title}
            </a>
                     
    );
}