import {createSlice} from '@reduxjs/toolkit'

const initialFieldValues = {
    username: "",
    password: "",
    lastName: "",
    firstName: "",
    middleName: "",
    sex: "",
    birthday: "",
    address: "",
    email: "",
    contactNumber: 0,
    photo: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: initialFieldValues
    },
    reducers:{
        login: (state, action) => {
            state.value = action.payload
        },
        edit: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialFieldValues
        }
    }
})


export const {edit, login, logout} = userSlice.actions
export default userSlice.reducer