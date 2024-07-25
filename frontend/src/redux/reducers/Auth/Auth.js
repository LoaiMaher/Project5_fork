import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || null,
        userId: localStorage.getItem("userId") || null,
        roleId: localStorage.getItem("roleId") || null,
        isLoggedIn : localStorage.getItem("token")?false:true,
        images: null,
        username: null,
    },
    reducers: {
        setLogin: (state, action) => {
            const { token, userId, roleId } = action.payload;
            state.token = token;
            state.userId = userId;
            state.roleId = roleId;
            state.isLoggedIn = true;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            localStorage.setItem("roleId", roleId);
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
            localStorage.setItem("userId", action.payload);
        },
        setLogout: (state) => {
            state.token = null;
            state.userId = null;
            state.roleId = null;
            state.isLoggedIn = false;
            localStorage.clear();
        },
        setUserInfo: (state, action) => {
            state.username = action.payload.username;
            state.images = action.payload.images;
          }
    }
});

export const { setLogin, setUserId, setLogout,setUserInfo } = authSlice.actions;
export default authSlice.reducer;