import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BookingItem } from "../../../interfaces"

type CartState = {
    bookItems: BookingItem[];
}

const initialState:CartState = { bookItems:[] }

export const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            state.bookItems.push(action.payload);
        },
        removeBooking: (state, action:PayloadAction<BookingItem>)=> {
            const remainItems = state.bookItems.filter( obj => {
                return ( (obj.shopName !== action.payload.shopName)
                    || (obj.bookingDate !== action.payload.bookingDate)
                    || (obj.serviceMinute !== action.payload.serviceMinute) )
            })
            state.bookItems = remainItems
        }
    }
})

export const { addBooking, removeBooking } = cartSlice.actions
export default cartSlice.reducer