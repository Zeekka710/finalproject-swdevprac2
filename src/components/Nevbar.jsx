import {useState} from "react"
import Image from "next/image"
import TopMenuItem from './TopMenuItem';

export default function Navbar () {

    const [toggle,setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    
    return (
        <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
            <div className='flex justify-end items-center w-full h-full md:max-w-[1240px] m-auto'>
                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='py-3 px-8'>Login</button>
                </div>
                <Image src={'/img/launchx_logo.png'} alt='logo' width={150} height={150} className='sm:ml-10 ss:ml-10 md:ml-10 md:ml-3' 
                />
                <div className='hidden md:flex sm:mr-10 md:mr-10' onClick={handleClick}>
                    <Image src={'/img/menu.png'} alt="menu" width={500} height={500} className='w-[30px] h-[30px] right-0 object-contain' 
                    />
                </div>
            </div>
            <ul className={toggle?'absolute text-black bg-white w-full px-8':'hidden'}>
                <li>IMT Lab</li>
                <li>Deeptech</li>
            </ul>
        </div>
    ); 
}