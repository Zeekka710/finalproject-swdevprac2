export default async function updateBooking(id: string, token: string) {

    await new Promise( (resolve)=>setTimeout(resolve, 5000) )

    const response = await fetch(`/api/v1/bookings/${id}`, {
        method: "UPDATE",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    if(!response.ok) {
        throw new Error("Failed to fetch booking")
    }

    return await response.json()
}