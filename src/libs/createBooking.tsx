export default async function createBooking(id: string, token: string) {

    await new Promise( (resolve)=>setTimeout(resolve, 5000) )

    const response = await fetch(`/api/v1/${id}/bookings}`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    if(!response.ok) {
        throw new Error("Failed to fetch bookings")
    }

    return await response.json()
}