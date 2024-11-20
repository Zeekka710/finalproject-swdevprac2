import Image from "next/image";
import getShop from "@/libs/getShop";
import Link from "next/link";

export default async function ShopDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const shopDetail = await getShop(params.id);

    const bg = {
      backgroundImage: "url(/img/bg.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
      <main className="text-center p-5" style={bg}>
        <h1 className="text-[50px] font-inter font-medium mt-[100px]">
          {shopDetail.data.name}
        </h1>
        <div className="flex flex-col lg:flex-row my-5 items-start mt-8 lg:mt-20 gap-6">
          <Image
            src={shopDetail.data.picture}
            alt="Shop Image"
            width={300}
            height={300}
            className="rounded-lg border border-gray-300 shadow-sm object-cover"
          />
          <div className="flex-1">
            {/* Boxed text */}
            <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-sm text-left">
              <div className="my-2">
                <span className="font-bold">Address:</span>{" "}
                {shopDetail.data.address}
              </div>
              <div className="my-2">
                <span className="font-bold">Postal Code:</span>{" "}
                {shopDetail.data.postalcode}
              </div>
              <div className="my-2">
                <span className="font-bold">Tel:</span> {shopDetail.data.tel}
              </div>
              <div className="my-2">
                <span className="font-bold">Price Level:</span>{" "}
                {shopDetail.data.priceLevel} (All included)
              </div>
            </div>
            <div className="text-center mt-4">
              <Link href={`/booking?id=${params.id}&name=${shopDetail.data.name}`}>
                <div className="h-[40px] px-[30px] bg-[#11253e] rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="pt-[5px] w-[68px] h-[30px] text-center text-white text-[13px] font-medium font-Inter tracking-tight">
                    Book Now !
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <div className="text-center mt-[100px]">
        <p className="text-red-500">Error fetching shop details.</p>
      </div>
    );
  }
}

export const dynamic = "force-dynamic"; // Ensure the route is dynamically rendered

