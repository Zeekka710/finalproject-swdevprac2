export default async function getBookings(token: string) {
    try {
        console.log("Fetching bookings with token:", token);

        const response = await fetch("http://localhost:5001/api/v1/bookings", {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);

        if (!response.ok) {
            console.error("Response error:", await response.text());
            throw new Error(`Failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched bookings data:", data);

        // Return the data to the calling function
        return data;
    } catch (error) {
        console.error("Error fetching bookings:", error);
        throw error;
    }
}
