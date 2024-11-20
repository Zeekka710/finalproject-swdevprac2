import getBookings from "@/libs/getBookings";
import BookingCart from "@/components/BookingCart";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";

export default async function Booking() {
    const bg = {
        backgroundImage: "url(/img/bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user.token) {
            console.error("Session or token is missing");
            return <p>You must be logged in to view bookings.</p>;
        }

        const userToken = session.user.token;
        const shopJson = await getBookings(userToken);

        if (!shopJson || !shopJson.data) {
            throw new Error("No bookings data available");
        }

        return (
            <main className="text-center min-h-screen items-center justify-between overflow-hidden" style={bg}>
                <h1 className="mt-[100px] text-xl font-medium">Your Bookings</h1>
                <Suspense fallback={<p>:Loading ... <LinearProgress /></p>}>
                    <BookingCart shopJson={shopJson.data} token={userToken} />
                </Suspense>
            </main>
        );
    } catch (error) {
        console.error("Error in Booking component:", error);
        return <p>Failed to load bookings. Please try again later.</p>;
    }
}
