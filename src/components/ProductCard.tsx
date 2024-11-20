import React from "react";
import Image from "next/image";
import Link from "next/link";
import InteractiveCard from "./InteractiveCard";

export default function ProductCard({
  shopName,
  imgSrc,
  onEdit,
  onDelete,
  isAdmin,
  shopId,
}: {
  shopName: string;
  imgSrc: string;
  onEdit: (e: React.MouseEvent) => void;
  onDelete: (e: React.MouseEvent) => void;
  isAdmin: boolean;
  shopId: string;
}) {
  return (
    <div className="relative flex flex-col items-center">
      <InteractiveCard contentName={shopName}>
        <div className="relative bg-white rounded-lg overflow-hidden w-full h-[300px] shadow-md">
          {/* Link Section */}
          <Link href={`/shop/${shopId}`} className="block h-full w-full">
            {/* Image Section */}
            <Image
              src={imgSrc}
              alt={shopName}
              fill={true}
              className="object-cover rounded-t-lg"
            />
          </Link>

          {/* Admin Buttons */}
          {isAdmin && (
            <div className="absolute top-2 right-2 z-10 flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent Link navigation
                  onEdit(e);
                }}
                className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent Link navigation
                  onDelete(e);
                }}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </InteractiveCard>

      {/* Shop Name */}
      <div className="mt-2 text-center font-Roboto text-black text-lg font-bold">
        {shopName}
      </div>
    </div>
  );
}
