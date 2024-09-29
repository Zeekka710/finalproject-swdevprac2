import Image from 'next/image';
import DOMPurify from "isomorphic-dompurify";

export default function BlogDetailPage( {params} : { params: {bid:string}} ) {
    
    /**
     * Mock Data for Demonstration Only
    */
 
 
    const mockCardRepo = new Map();
    mockCardRepo.set('001', {
        blogName: 'Creating a Winning Roadmap', 
        desc: '<img src="/img/blog01_02.png"><ul><li>1. Identifying strategic position drivers<br><img src="/img/blog01_03.png"><u>step 1 : develop a long list of strategic Drivers</u><ul><li>Competitive Opportunity: Drivers ที่ส่งผลโดยตรงต่อการวางตำแหน่งทางการแข่งขันให้สำเร็จตามเป้าหมาย<ul><li>- Digitization: กิจกรรมและการดำเนินการที่จำเป็นเพื่อส่งเสริมการนำเอาเทคโนโลยีดิจิทัลเข้าสู่ภาคธุรกิจของบริษัทให้เป็นที่น่าสนใจและเป็นเลิศที่สุด<ul><li>= CRM Digitization: การปรับปรุงระบบการจัดการช่องทางการขาย การติดตาม และรายงานผ่านการดิจิทัล</li><li>= Sales Digitization: การใช้ระบบดิจิทัลในการจัดการลูกค้าปัจจุบันและผู้ที่มีโอกาสเป็นลูกค้า, ช่องทาง และความซับซ้อนต่างๆในองค์กร</li></ul></li><li>- Specialisation: กิจกรรมและขั้นตอนที่จำเป็นเพื่อส่งเสริมการพัฒนาทักษะและความเชี่ยวชาญของบริษัทให้เป็นที่โดดเด่นและยอดเยี่ยมที่สุด<ul><li>= P4 Medical Approach: การนำเทคโนโลยีมาใช้ในการปรับปรุงการให้บริการทางการแพทย์ให้เหมาะสมต่อผู้ป่วยแต่ละคน</li><li>= Technologization of operation: การนำระบบการดำเนินงานอัตโนมัติมาใช้เพื่อเพิ่มประสิทธิภาพในการทำงานและความแม่นยำสูงขึ้น</li></ul></li><li>- Price Competitiveness: กิจกรรมและการดำเนินการที่จำเป็นเพื่อส่งเสริมการแข่งขันราคาที่ดีที่สุดของบริษัท<ul><li>= Collaboration with Government: การเชื่อมต่อร่วมกับหน่วยงานรัฐบาลเพื่อให้ได้ข้อมูลและความช่วยเหลือต่างๆที่มากขึ้น</li><li>= Service Bunding: การจัดการบริการหลายรายการที่ถูกจัดเสริมเป็นแพ็คเกจที่ครบวงจร</li></ul></li></ul></li></ul></li></ol>', 
        imgSrc: '/img/blog01_title.png',
        authorName:'ปวีณ์สุดา สถานเมือง', 
        authorDesc1:'Business Analyst Assistant',
        authorDesc2: 'B.Sc. In Nutrition and Dietetics, CU', 
        authorImg:'/img/author/kaimook.png' } )

    mockCardRepo.set('002', {
        blogName: 'Creating a Winning Roadmap', 
        desc: '<img src="/img/blog02_021.png"><u><b>Mapping Your Landscape</b></u> <p style="text-indent:30px;">Mapping Your Landscape คือการวิเคราะห์ธุรกิจของเราและคู่แข่งจะเริ่มจากการนำประเด็นสำคัญ (Key Issues) ที่ได้ศึกษาก่อนหน้านี้</p><br> <p style="text-indent:30px;">โดยประเด็นสำคัญ (Key Issue) คือ ข้อเท็จจริงและข้อมูลเชิงลึกที่ได้รับจากการวิเคราะห์ 5C ที่ถูกประเมินและสรุปมาแล้ว โดยการวิเคราะห์ 5C ประกอบด้วยการศึกษาปัจจัยสำคัญ 5 ด้าน ได้แก่ บริษัท (Company), คู่แข่ง (Competitors), ลูกค้า (Customers), ผู้ร่วมธุรกิจ (Collaborators) และสภาพแวดล้อม (Context) เพื่อนำมาประเมินสภาพแวดล้อมทางธุรกิจและหาประเด็นที่มีผลกระทบต่อการดำเนินธุรกิจของเราโดยตรง การสรุปประเด็นสำคัญที่ได้จากการวิเคราะห์นี้ จะเป็นการรวบรวมข้อเท็จจริงและข้อมูลเชิงลึกที่มีผลต่อการกำหนดกลยุทธ์และการตัดสินใจในการพัฒนาธุรกิจในอนาคต</p><br> <p style="text-indent:30px;">เมื่อสามารถสรุปประเด็นสำคัญ (Key Issue) ได้แล้ว ต่อมา จึงจะจัดประเด็นสำคัญเหล่านั้นให้เป็นหมวดหมู่ที่เป็นปัจจัยเชิงกลยุทธ์ (Strategic Factors) ที่เป็นไปได้ </p><br> <p style="text-indent:30px;">ปัจจัยเชิงกลยุทธ์ (Strategic Factor) คือ ตัวขับเคลื่อนหลักที่นำพาธุรกิจไปสู่ความสำเร็จ สะท้อนถึงผลการดำเนินงานและความก้าวหน้า ทั้งนี้ ปัจจัยเหล่านี้จะต้องสามารถวัดผลได้ มีการเปรียบเทียบกับค่าเฉลี่ยของอุตสาหกรรม และสามารถนำไปปฏิบัติได้จริง" โดย ปัจจัยเชิงกลยุทธ์ เป็นองค์ประกอบสำคัญที่ช่วยให้ธุรกิจประเมินประสิทธิภาพการดำเนินงาน โดยการกำหนดตัวชี้วัดที่ชัดเจน เพื่อให้สามารถเปรียบเทียบกับมาตรฐานในอุตสาหกรรม และตรวจสอบได้ว่าธุรกิจกำลังเดินหน้าไปในทิศทางที่ถูกต้อง การมีปัจจัยเชิงกลยุทธ์ที่ชัดเจนและนำไปปฏิบัติได้ จะช่วยให้ธุรกิจสามารถสร้างกลยุทธ์ที่มีประสิทธิภาพและมุ่งไปสู่ความสำเร็จในระยะยาว</p><br> <p style="text-indent:30px;">เมื่อเราทราบตำแหน่งของธุรกิจในปัจจุบันแล้ว จะนำไปสู่การวางแผนในอนาคตว่าบริษัทต้องการพัฒนาและเติบโตไปยังตำแหน่งใดในอุตสาหกรรม ซึ่งในส่วนนี้จะใช้ Gap Analysis เข้ามาช่วยในการวิเคราะห์ช่องว่างระหว่างตำแหน่งปัจจุบันของเราและตำแหน่งที่เราต้องการจะไปถึง วิธีการนี้จะเป็นเครื่องมือที่สำคัญในการวางแผนเพื่อพัฒนาธุรกิจและลดช่องว่างระหว่างปัจจุบันและเป้าหมายในอนาคต</p><br>',
        imgSrc: '/img/blog02_title.png',
        authorName:'ธีรภัทร เพ็งช่วย', 
        authorDesc1:'Business Analyst Assistant',
        authorDesc2: 'B.Sc. In Computer Science, CU', 
        authorImg:'/img/author/bon.png' } )

    mockCardRepo.set('003', {
        blogName: 'Creating a Winning Roadmap', 
        desc: '<img src="/img/blog03_02.png"><br><p> <b><u>5C Analysis</u></b> เป็นวิธีวิเคราะห์ธุรกิจที่ช่วยให้เราเข้าใจภาพรวมของสถานการณ์ธุรกิจในหลากหลายมิติ ทั้งภายในและภายนอก ประกอบด้วย 5 ปัจจัยหลักที่สำคัญ ได้แก่</p> <p><b>C1: Climate</b></p> <ul> <li><p>- External influences</p> <ul> <li>= ระบุปัจจัยภายนอกที่กระทบกับธุรกิจเราในปัจจุบัน</li> <li>= หาปัจจัยที่อาจเป็นอุปสรรคต่อองค์กรในอนาคต</li> <li>= วางแผนกลยุทธ์การหาโอกาสจากปัจจัยภายนอก</li> <li>= ลดความเสี่ยงที่อาจมาจากปัจจัยภายนอก</li> </ul> </li> <li><p>- PESTEL Analysis</p> <ul> <li><u>= Political:</u> ปัจจัยที่เป็นผลกระทบจากนโยบายของ “รัฐบาล” เช่น Corporate taxation, Political stability, Trade policy, Environmental law, Labor law</li> <li><u>= Economic:</u> ปัจจัยที่ส่งผลต่อ Purchasing power ของลูกค้าซึ่งอาจส่งผลต่อ demand/ supply ของธุรกิจ เช่น Economic growth, Interest rates, Employment rates, Inflation, Disposable income, Labor costs and productivity rate, Business cycle stage</li> <li><u>= Social:</u> ปัจจัยที่สะท้อนถึง ลักษณะประชากร, ขนบธรรมเนียม, และคุณค่าที่คนในสังคมยึดถือ เช่น Demographic considerations, Lifestyle trend, Consumer beliefs, Cultural barriers, Leisure interest, Class structure and hierarchy</li> <li><u>= Technologies:</u> innovations ทั้งที่เป็นผลดีและอุปสรรคต่อการดำเนินธุรกิจในอุตสาหกรรมและตลาดนั้นๆ เช่น Automation, Technological infrastructure (e.g., 5G, IoT, etc.), Cyber security, R&D activity, Market adoption, Tech ที่คู่แข่งกำลังพัฒนา, ผลกระทบของ tech ต่อ value chain structure</li> <li><u>= Environmental:</u> ผลกระทบที่เกิดจากการเปลี่ยนแปลงทางสิ่งแวดล้อมและมีต่อการดำเนินการของธุรกิจ เช่น Climate change, ภัยพิบัติต่าง ๆ, การจัดการขยะ, การใช้ทรัพยากรอย่างมีจริยธรรมและยั่งยืน, ทัศนติของสังคมต่อ “green” หรือ ecological products</li> <li><u>= Legal:</u> กฎหมายและข้อกำหนดต่าง ๆ ที่มีผลต่อการดำเนินธุรกิจ เช่น Industry regulations, กฎหมายแรงงาน, กฎหมาย IP, Health and Safety laws, advertising laws, การควบคุมการเข้าถึงทรัพยากร</li> </ul> </li> </ul>', 
        imgSrc: '/img/blog03_title.png',
        authorName:'พิมพ์ศจี เกษสุวรรณ', 
        authorDesc1:'Business Analyst Assistant',
        authorDesc2: 'B. Art, CU', 
        authorImg:'/img/author/grace.png' } )
    
    mockCardRepo.set('004', {
        blogName: 'What is IDE Program?', 
        desc: '<p>แผนงานพัฒนาและส่งเสริมให้ประเทศเพิ่มธุรกิจฐานนวัตกรรม (Innovation Driven Enterprises : IDEs) ภายใต้การจัดตั้งของ บพข. มุ่งเน้นการยกระดับผู้ประกอบการขนาดกลาง (Medium Enterprise: ME) และขนาดใหญ่ (Large Enterprise: LE) ไปสู่ IDEs เพื่อสร้างการเติบโตทางธุรกิจที่ก้าวกระโดดและยั่งยืนด้วยนวัตกรรม เพิ่มขีดความสามารถด้านการแข่งขันตอบรับนโยบาย Thailand 4.0 นำไปสู่การยกระดับเศรษฐกิจไทยยั่งยืน</p><p>IDEs ช่วยตอบโจทย์ธุรกิจนวัตกรรม</p><ul><li>- เพิ่มขีดความสามารถ ME/LE  ไปสู่ IDE หรือธุรกิจที่ใช้นวัตกรรม เพื่อสร้างการเติบโตก้าวกระโดดและยั่งยืนให้ผู้ประกอบการขนาดกลางและใหญ่</li><li>- สร้างความได้เปรียบให้กับผู้ประกอบการขนาดกลางและใหญ่ ในการแข่งขันในตลาดทั้งในและต่างประเทศในระยะยาว</li><li>- สร้างความร่วมมือเพื่อแบ่งปันและต่อยอดองค์ความรู้ ระหว่างผู้ประกอบการในห่วงโซ่คุณค่าในรูปแบบของนวัตกรรม</li><li>- ลดการนำเข้าผลิตภัณฑ์หรือบริการด้านเทคโนโลยี รวมถึงส่งเสริมความร่วมมือและร่วมลงทุนระหว่างภาครัฐ ผู้ประกอบการทั้งเล็ก-กลาง-ใหญ่</li><li>- ลดความเหลื่อมล้ำในการเข้าถึงบริการของผู้ประกอบการในภูมิภาค อันนำไปสู่การยกระดับการพัฒนาเศรษฐกิจในระดับภูมิภาคอย่างยั่งยืน</li></ol>', 
        imgSrc: '/img/ide.png',
        authorName:'ธวัชชัย ทิพย์อุด', 
        authorDesc1:'Project Manager',
        authorDesc2: 'M. Tech Management & Innopreneurship, CU', 
        authorImg:'/img/author/ton.png' } )

    const blogContent = mockCardRepo.get(params.bid);
    const sanitizedHtmlString = DOMPurify.sanitize(blogContent.desc);

        return(
            <main className='w-full mb-10 bg-[#f9f9f9]'>
                <div className='max-w-[1240px] mx-auto'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm-grid-cols-3 ss:grid-cols-1
                    gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text:black py-auto'>

                        <div className='col-span-2 gap-x-8 gap-y-8 my-[50px]'>
                            <Image src={ (mockCardRepo.get(params.bid)).imgSrc }
                            alt='Blog Image'
                            width={0} height={0} sizes='100vw' 
                            className='h-56 w-full object-cover'/>
                            <h1 className='font-bold text-2xl my-1 pt-5 text-black'>{ (mockCardRepo.get(params.bid)).blogName }</h1>
                            <div className='text-black' dangerouslySetInnerHTML={{ __html: sanitizedHtmlString }} />
                        </div>

                        <div className='w-full bg-white rounded-x1 overflow-hidden drop-shadow-md max-h-[250px] my-[50px] py-[20px]'>
                            <div>
                                <Image src={(mockCardRepo.get(params.bid)).authorImg}
                                alt='author picture'
                                width={0} height={0} sizes='100vw'
                                className='p-2 w-32 h-32 rounded-full mx-auto'/>
                                <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{(mockCardRepo.get(params.bid)).authorName}</h1>
                                <p className='text-center text-gray-900 font-medium'>{(mockCardRepo.get(params.bid)).authorDesc1}</p>
                                <p className='text-center text-gray-900 font-medium text-sm'>{(mockCardRepo.get(params.bid)).authorDesc2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
}

export async function generateStaticParams() {
    return [{bid:'001'}, {bid:'002'}, {bid:'003'}, {bid:'004'}]
}