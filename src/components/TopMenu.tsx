import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/utils/authOptions";
import { Link } from '@mui/material';

export default async function TopMenu() {
    const session = await getServerSession(authOptions);

    return (
        <div className="h-[80px] z-30 bg-[#d0bb97] fixed top-0 left-0 right-0 flex items-center">
            <Link href="/" style={{ textDecoration: 'none' }}>
                <div className="mx-[20px]">
                    <span className="text-black text-[28px] font-bold font-Inter">Bliss</span>
                    <span className="text-[#ffa03f] text-[28px] font-bold font-Inter">Spa</span>
                </div>
            </Link>

            <div className="items-center gap-3.5 flex pt-[25px] mx-[200px]">
                <TopMenuItem title="Home" pageRef="/" />
                <TopMenuItem title="About" pageRef="/about" />
                <TopMenuItem title="Packages" pageRef="/shop" />
                <TopMenuItem title="Contact" pageRef="/contact" />
            </div>

            <div className="flex items-center gap-4 ml-auto mx-[20px]">
                {session ? (
                    <>
                        <span className="text-center text-white text-[13px] font-bold font-Inter tracking-tight">
                            Hi! {session.user?.name}
                        </span>
                        <Link href="/cart">
                        <Image
                            src={'/img/cart.png'}
                            className="h-[30px] w-auto"
                            alt="cart"
                            width={30}
                            height={30}
                        />
                        </Link>
                        <Link href="/api/auth/signout" className="no-underline">
                            <div className="h-[33px] bg-white/25 rounded-[100px] flex items-center px-3">
                                <div className="text-white text-[13px] font-medium font-Inter tracking-tight">
                                    Sign Out
                                </div>
                                <Image
                                    src={'/img/signin-button.png'}
                                    className="h-[20px] w-auto ml-2"
                                    alt="signout"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </Link>
                    </>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link href="/api/auth/signin" style={{ textDecoration: 'none' }}>
                            <div className="h-[33px] px-[13px] bg-white/25 rounded-[100px] flex items-center hover:shadow-lg">
                                <div className="text-white text-[13px] font-medium font-Inter tracking-tight">
                                    Sign In
                                </div>
                                <Image
                                    src={'/img/signin-button.png'}
                                    className="h-[20px] w-auto ml-2"
                                    alt="signin"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </Link>
                        <span className="text-white text-[13px] font-medium font-Inter">
                            Don’t have an account?{' '}
                            <Link href="/register">
                                Sign up
                            </Link>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
