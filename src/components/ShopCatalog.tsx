"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import editShop from "@/libs/editShop";
import deleteShop from "@/libs/deleteShop";

export default function ShopCatalog({
  shops,
  isAdmin,
  token,
}: {
  shops: { _id: string; name: string; picture: string; priceLevel: string; address: string; province: string; postalcode: string; tel: string }[];
  isAdmin: boolean;
  token: string;
}) {
  const [shopList, setShopList] = useState(shops || []);

  const handleEdit = async (shopId: string) => {
    // Prompt the user for updated data
    const updatedData = {
      name: prompt("Enter new shop name:", shopList.find((shop) => shop._id === shopId)?.name || "") || "",
      priceLevel: prompt("Enter new price level:", shopList.find((shop) => shop._id === shopId)?.priceLevel || "") || "",
      address: prompt("Enter new address:", shopList.find((shop) => shop._id === shopId)?.address || "") || "",
      province: prompt("Enter new province:", shopList.find((shop) => shop._id === shopId)?.province || "") || "",
      postalcode: prompt("Enter new postal code:", shopList.find((shop) => shop._id === shopId)?.postalcode || "") || "",
      tel: prompt("Enter new telephone number:", shopList.find((shop) => shop._id === shopId)?.tel || "") || "",
      picture: prompt("Enter new picture URL:", shopList.find((shop) => shop._id === shopId)?.picture || "") || "",
    };

    // Validate that at least one field is updated
    if (Object.values(updatedData).every((value) => value.trim() === "")) {
      alert("No updates were made.");
      return;
    }

    try {
      // Send the updated data to the backend
      const updatedShop = await editShop(shopId, token, updatedData);

      // Update the shop list in the state
      setShopList((prev) =>
        prev.map((shop) =>
          shop._id === shopId ? { ...shop, ...updatedShop.data } : shop
        )
      );

      alert("Shop updated successfully!");
    } catch (error) {
      console.error("Error updating shop:", error);
      alert("Failed to update shop.");
    }
  };

  const handleDelete = async (shopId: string) => {
    console.log("Deleting shop with ID:", shopId);

    if (confirm("Are you sure you want to delete this shop?")) {
      try {
        const result = await deleteShop(shopId, token);
        console.log("Delete result:", result);

        // Update shop list in state
        setShopList((prev) => prev.filter((shop) => shop._id !== shopId));
        alert("Shop deleted successfully!");
      } catch (error) {
        console.error("Failed to delete shop");
        alert("Failed to delete shop:");
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {shopList.map((shop) => (
        <ProductCard
          key={shop._id}
          shopId={shop._id}
          shopName={shop.name}
          imgSrc={shop.picture}
          isAdmin={isAdmin}
          onEdit={(e) => {
            e.stopPropagation(); // Prevent Link navigation
            handleEdit(shop._id);
          }}
          onDelete={(e) => {
            e.stopPropagation(); // Prevent Link navigation
            handleDelete(shop._id);
          }}
        />
      ))}
    </div>
  );
}
