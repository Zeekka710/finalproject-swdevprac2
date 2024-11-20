export default async function editBooking(id: string, token: string, updatedData: object) {
    try {
        const response = await fetch(`http://localhost:5001/api/v1/bookings/${id}`, {
            method: "PUT", // Correct HTTP method for updating resources
            headers: {
                "Content-Type": "application/json", // Ensure JSON format
                authorization: `Bearer ${token}`, // Add authorization token
            },
            body: JSON.stringify(updatedData), // Send updated data in the request body
        });

        if (!response.ok) {
            throw new Error("Failed to update booking");
        }

        return await response.json();
    } catch (error) {
        console.error("Error in editBooking:");
        throw error;
    }
}
