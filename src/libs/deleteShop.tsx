export default async function deleteShop(id: string, token: string) {

    await new Promise( (resolve)=>setTimeout(resolve, 5000) )

    const response = await fetch(`https://finalproject-beckend-swdevprac2.vercel.app/api/v1/shops/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete shop: ${response.statusText}`);
      }
  
    return await response.json(); // Assuming the backend sends a response
    }
  