"use client";
import deleteBooking from "@/libs/deleteBooking";
import editBooking from "@/libs/editBooking";
import { useState } from "react";

export default function BookingCart({ shopJson, token }: { shopJson: object; token: string }) {
  console.log("Initial shopJson:", shopJson); // Debug log

  const [bookings, setBookings] = useState<Array<any>>(Array.isArray(shopJson) ? shopJson : []);
  console.log("Initial bookings state:", bookings); // Debug log

  const [editBookingId, setEditBookingId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({ bookingDate: "", serviceMinute: "" });
  const [loading, setLoading] = useState(false);

  const handleDelete = async (bookingId: string) => {
    setLoading(true);
    try {
      await deleteBooking(bookingId, token);

      // Update bookings after deletion
      setBookings((prev) => prev.filter((booking) => booking._id !== bookingId));
      console.log("Updated bookings after delete:", bookings); // Debug log

      alert("Booking deleted successfully");
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Failed to delete booking");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (booking: any) => {
    setEditBookingId(booking._id);
    setFormValues({
      bookingDate: booking.bookingDate,
      serviceMinute: booking.serviceMinute,
    });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const updatedBooking = await editBooking(editBookingId!, token, formValues);

      // Update bookings after edit
      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === updatedBooking.data._id ? updatedBooking.data : booking
        )
      );
      console.log("Updated bookings after edit:", bookings); // Debug log

      alert("Booking updated successfully");
      setEditBookingId(null);
    } catch (error) {
      console.error("Error updating booking");
      alert("Failed to update booking");
    } finally {
      setLoading(false);
    }
  };

  // Render conditions
  if (!Array.isArray(bookings)) {
    return <p>Error: Invalid bookings data.</p>;
  }

  if (bookings.length === 0 && !loading) {
    return <p>No bookings available.</p>;
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {bookings.map((bookItem: any) => (
        <div
          className="relative z-10 bg-white rounded-lg px-6 mx-5 py-4 my-4 shadow-lg border border-black"
          key={bookItem._id}
        >
          <div className="text-2xl font-bold text-brown-800 mb-2">
            {bookItem.shop?.name || "Unknown Shop"}
          </div>
          <div className="text-md text-brown-700">Date: {bookItem.bookingDate}</div>
          <div className="text-md text-brown-700 mb-4">
            Duration: {bookItem.serviceMinute} minutes
          </div>
          <h5 className="text-md text-brown-700">
            User: {bookItem.user?.name || "Unknown User"}
          </h5>
          <div className="absolute bottom-4 right-6 flex gap-3">
            <button
              className="rounded-md bg-yellow-500 hover:bg-brown-700 px-4 py-2 text-white shadow"
              onClick={() => handleEdit(bookItem)}
            >
              Edit
            </button>
            <button
              className="rounded-md bg-red-500 hover:bg-red-700 px-4 py-2 text-white shadow"
              onClick={() => handleDelete(bookItem._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {editBookingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 w-[400px]">
            <h3 className="text-2xl font-bold mb-4">Edit Booking</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Booking Date</label>
              <input
                type="date"
                value={formValues.bookingDate}
                onChange={(e) => setFormValues({ ...formValues, bookingDate: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Service Duration (Minutes)</label>
              <input
                type="number"
                value={formValues.serviceMinute}
                onChange={(e) => setFormValues({ ...formValues, serviceMinute: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditBookingId(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
