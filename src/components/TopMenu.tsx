'use client'
import {useState} from "react"
import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    
    const [toggle,setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    
    return (
        <div className='w-screen h-[80px] z-30 bg-white fixed drop-shadow-lg flex items-center'>
            <div className='px-[190px]'>
                    <TopMenuItem title='Document' pageRef='https://igniteilab.wixsite.com/launchx'/>
                    <TopMenuItem title='Learn' pageRef='/learn'/>
                    <TopMenuItem title='Team' pageRef='https://igniteilab.wixsite.com/launchx/team'/>
                    <TopMenuItem title='Gallery' pageRef='https://www.facebook.com/CMICe.LaunchX'/>
            </div>
            <div className='flex px-[40px] items-center'>
                <a href='/' rel="noopener noreferrer" >
                    <Image src={'/img/launchx_logo.png'} className='w-auto h-[60px]'
                        alt='logo' width={0} height={0} sizes='100vh'/>
                </a>
                <Image src={'/img/menu.png'} className='w-auto h-[50px] pl-[15px]'
                    alt="menu" width={0} height={0} sizes='100vh'  onClick={handleClick}/>
                <button className='py-3 px-10 mx-[25px]'>Login</button>
            </div>
            <ul className={toggle?'absolute text-black bg-white w-full px-8 md:hidden':'hidden'}>
                <li>IMT Lab</li>
                <li>Deeptech</li>
            </ul>
        </div>
    )
}