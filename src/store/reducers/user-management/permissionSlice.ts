import { TMeta } from '@/types/modules';
import { TPermission } from '@/types/modules/user-management/permission';
import { createSlice } from '@reduxjs/toolkit';

interface PermissionState {
  permissions: TPermission[];
  meta: TMeta;
}

const initialState: PermissionState = {
  permissions: [],
  meta: <TMeta>{}
};

const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    getAllPermission(state, action) {
      state.permissions = action.payload.results || [];
      state.meta = action.payload.meta || <TMeta>{};
    }
  }
});

export const { getAllPermission } = permissionSlice.actions;
export default permissionSlice.reducer;
