export default async function getShop(id: string) {
    const response = await fetch(`/api/v1/shops/${id}`, {
      cache: "no-store", // Avoid caching for dynamic updates
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch shop details");
    }
  
    return await response.json();
  }
  