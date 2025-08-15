import { TMeta } from '@/types/modules';
import { TRole } from '@/types/modules/user-management/role';
import { createSlice } from '@reduxjs/toolkit';

interface RoleState {
  roles: TRole[];
  role: TRole;
  meta: TMeta;
}

const initialState: RoleState = {
  roles: [],
  role: <TRole>{},
  meta: <TMeta>{}
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    getAllRole(state, action) {
      state.roles = action.payload.results || [];
      state.meta = action.payload.meta || <TMeta>{};
    },

    getOneRole(state, action) {
      state.role = action.payload.row || null;
    },

    createOneRole(state, action) {
      state.roles = [...state.roles, action.payload.row];
    },

    updateOneRole(state, action) {
      state.roles = state.roles.map(item => {
        if (item.id !== action.payload.id) return item;
        else return { ...item, ...action.payload.row };
      });
    },

    removeOneRole(state, action) {
      state.roles = state.roles.filter(item => item.id !== action.payload.id);
    }
  }
});

export const {
  getAllRole,
  getOneRole,
  createOneRole,
  updateOneRole,
  removeOneRole
} = roleSlice.actions;
export default roleSlice.reducer;
