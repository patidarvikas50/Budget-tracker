import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count:0
}

const counterSlice = createSlice({
    name: 'count',
    initialState,


reducers: {
    setCount: (state, action)=>{
        return state.count += action?.payload
    }
}
})
export const {setCount} =counterSlice.actions;
export default counterSlice.reducer;

