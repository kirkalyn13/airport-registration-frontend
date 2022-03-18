import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { SERVER } from '../../App'
import axios from 'axios'

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

export const fetchUserData = createAsyncThunk("fetchData", async (userNumber) =>
  axios
    .get(`${SERVER}/information/${userNumber}`)
    .then((response) => response.data[0])
    .catch((error) => console.log(error))
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: initialFieldValues,
    },
    reducers:{
        login: (state, action) => {
            state.data = action.payload
        },
        edit: (state, action) => {
            state.data = action.payload
        },
        logout: (state) => {
            state.data = initialFieldValues
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.data = initialFieldValues
          })
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
          state.data = action.payload
        })
      }
})


export const {edit, login, logout} = userSlice.actions
export default userSlice.reducer