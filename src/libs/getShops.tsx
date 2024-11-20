export default async function getShop() {

    await new Promise( (resolve)=>setTimeout(resolve, 5000) )
    
    const response = await fetch("/api/v1/shops", { next: {tags:['shops']} })
    if(!response.ok) {
        throw new Error("Failed to fetch massage shop")
    }

    return await response.json()
}