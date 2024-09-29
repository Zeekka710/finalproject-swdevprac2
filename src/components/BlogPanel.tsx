'use client'
import React from "react";
import { useReducer } from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";
import useFetch from "@/hooks/useFetch";

export default function BlogPanel() {

    const mockBlogRepo = [
        {
            'bid':'001',
            'blogName':'Creating a Winning Roadmap',
            'desc':'การสร้าง Winning Roadmap ที่สามารถเพิ่มความได้เปรียบทางการแข่งขันและกำหนดทิศทางตลาดได้อย่างมีประสิทธิภาพ',
            'imgSrc':'/img/blog01_title.png'
        },
    
        {
            'bid':'002',
            'blogName':'Mapping Your Landscape',
            'desc':'การวิเคราะห์ธุรกิจของเราและคู่แข่งผ่านการประเมินปัจจัยสำคัญเชิงกลยุทธ์ เพื่อสร้างภาพรวมทางธุรกิจที่ชัดเจน และกำหนดแนวทางการพัฒนาตามเป้าหมายในอนาคตอย่างมีประสิทธิภาพ',
            'imgSrc':'/img/blog02_title.png'
        },
    
        {
            'bid':'003',
            'blogName':'Assessing the Situation',
            'desc':'วิเคราะห์ธุรกิจ 5C Analysis ที่ครอบคลุมทั้งปัจจัยภายในและภายนอก เพื่อให้เข้าใจสถานการณ์ธุรกิจและสามารถวางแผนกลยุทธ์ได้อย่างมีประสิทธิภาพมากขึ้น',
            'imgSrc':'/img/blog03_title.png'
        },
        {
            'bid':'004',
            'blogName':'What is IDE Program?',
            'desc':'อะไรคือแผนงานพัฒนาและส่งเสริมให้ประเทศเพิ่มธุรกิจฐานนวัตกรรม (Innovation Driven Enterprises : IDEs)',
            'imgSrc':'/img/ide.png'
        }

    ]
    
    return (
        <div className='grid lg:grid-cols-3 gap-8 text-black pt-[120px] pb-[20px]'>
             {
                 mockBlogRepo.map((blogItem)=>(
                    <React.Fragment key={blogItem.bid}>
                        <Link href={`/learn/${blogItem.bid}`} className='w-full'>
                            <BlogCard blogName={blogItem.blogName} imgSrc={blogItem.imgSrc} desc={blogItem.desc}/>
                        </Link>
                    </React.Fragment>
                ))
             }
        </div>
    )
}