export default function TopMenuItem ( { title, pageRef } : { title:string,
    pageRef:string } ){
        return (
            <div className="w-[120px] h-11 justify-center items-center flex">
                <a href={pageRef} className="w-[103px] h-11 text-center text-white text-[15px] font-bold font-Inter hover:text-lg"
                rel="noopener noreferrer">
                    {title}
                </a>
            </div>
                     
    );
}