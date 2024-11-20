"use client";
import { useSession } from "next-auth/react";
import ServiceDateBook from "@/components/LocationDateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Booking() {
  const { data: session } = useSession(); // Get session on the client side
  const urlParams = useSearchParams();
  const id = urlParams.get("id");
  const name = urlParams.get("name");

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [serviceMinute, setServiceMinute] = useState<string>("60");
  const [dateError, setDateError] = useState<string | null>(null); // Error message for date validation

  // Map names to corresponding images
  const imageMap: Record<string, string> = {
    "Tong-Ta Body Massage": "https://drive.usercontent.google.com/download?id=12J-H2fosA9_H7Bq0--yD5NknGCiKsRB2&authuser=0",
    "Foot Massage Balsabai": "https://drive.usercontent.google.com/download?id=1ZB83dlcfERt9ht66RClVZTZgbB9Jm3LR&authuser=0",
    "Magic Hands S15 Massage": "https://drive.usercontent.google.com/download?id=1-b9gk9HUBAWRY7-4B52Xw0DhFgpXdTQQ&authuser=0",
  };

  const bg = {
    backgroundImage: "url(/img/bg.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // Function to validate booking date
  const validateBookingDate = (date: Dayjs | null) => {
    if (date && dayjs(date).isBefore(dayjs(), "day")) {
      setDateError("You cannot select a past date.");
    } else {
      setDateError(null); // Clear error if valid
    }
  };

  // Function to handle booking creation
  const makeBooking = async () => {
    if (!id || !name || !bookingDate || !serviceMinute || dateError) {
      alert(dateError || "Please fill in all required fields.");
      return;
    }

    if (!session || !session.user) {
      alert("You must be logged in to make a booking.");
      return;
    }

    const bookingDetails = {
      shopId: id,
      shopName: name,
      bookingDate: dayjs(bookingDate).format("YYYY/MM/DD"),
      serviceMinute: serviceMinute,
    };

    try {
      const response = await fetch(`http://localhost:5001/api/v1/shops/${id}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${session.user.token}`, // Use the session token
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      const data = await response.json();
      alert("Booking successfully created!");
      console.log("Booking created:", data);
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Failed to create booking.");
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4" style={bg}>
      <div className="text-xl font-medium mt-[50px]">New Reservation</div>
      <div className="text-xl font-medium">Massage Shop: {name}</div>

      <div className="w-fit space-y-4">
        <div className="text-md text-left text-gray-600">
          Please Select Date and Duration of Service.
        </div>

        {/* Render Image Based on Name */}
        {name && imageMap[name] ? (
          <div className="flex justify-center mb-4">
            <Image
              src={imageMap[name]} // Dynamic image based on name
              alt={name}
              width={200}
              height={200}
              className="rounded-md shadow-md"
            />
          </div>
        ) : (
          <div className="text-gray-500 text-center italic">No image available</div>
        )}

        {/* Date Picker and Service Selection */}
        <ServiceDateBook
          onDateChange={(value: Dayjs) => {
            setBookingDate(value);
            validateBookingDate(value); // Validate date
          }}
          onServiceChange={(value: string) => {
            setServiceMinute(value);
          }}
        />
        {dateError && <div className="text-red-500 text-sm mt-2">{dateError}</div>}
      </div>
      <button
        className="block rounded-md text-center text-white text-[13px] font-medium font-Inter
          bg-[#11253e] py-2 px-5 rounded-[100px] items-center"
        onClick={makeBooking}
      >
        Book Now!
      </button>
    </main>
  );
}
