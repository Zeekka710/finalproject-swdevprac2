import mongoose  from 'mongoose'

const BookingSchema = new mongoose.Schema({
  bookingDate: {
    type: Date,
    required: true,
  },
  serviceMinute: {
    type: Number,
    enum: [60,90,120],
    default: 60,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  shop: {
    type: mongoose.Schema.ObjectId,
    ref: "Shop",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
export default Booking
