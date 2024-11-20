export default async function getShop(id: string) {
    const response = await fetch(`http://localhost:5001/api/v1/shops/${id}`, {
      cache: "no-store", // Avoid caching for dynamic updates
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch shop details");
    }
  
    return await response.json();
  }
  