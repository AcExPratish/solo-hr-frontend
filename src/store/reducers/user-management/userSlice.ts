import { TMeta } from '@/types/modules';
import { TUser } from '@/types/modules/user-management/user';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  users: TUser[];
  user: TUser;
  meta: TMeta;
}

const initialState: UserState = {
  users: [],
  user: <TUser>{},
  meta: <TMeta>{}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUser(state, action) {
      state.users = action.payload.results || [];
      state.meta = action.payload.meta || <TMeta>{};
    },

    getOneUser(state, action) {
      state.user = action.payload.row || null;
    },

    createOneUser(state, action) {
      state.users = [action.payload.row, ...state.users];
    },

    updateOneUser(state, action) {
      state.users = state.users.map(item => {
        if (item.id !== action.payload.id) return item;
        else return { ...item, ...action.payload.row };
      });
    },

    removeOneUser(state, action) {
      state.users = state.users.filter(item => item.id !== action.payload.id);
    }
  }
});

export const {
  getAllUser,
  getOneUser,
  createOneUser,
  updateOneUser,
  removeOneUser
} = userSlice.actions;
export default userSlice.reducer;
