import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import authService from '../../services/auth/authService';

export const bootstrapAuth = createAsyncThunk('auth/bootstrap', async () => {
  return authService.getStoredSession();
});

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, {rejectWithValue}) => {
    try {
      return await authService.login(credentials);
    } catch (error) {
      return rejectWithValue(error.message || 'Unable to login');
    }
  },
);

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (payload, {rejectWithValue}) => {
    try {
      return await authService.sendOtp(payload);
    } catch (error) {
      return rejectWithValue(error.message || 'Unable to send OTP');
    }
  },
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async (payload, {rejectWithValue}) => {
    try {
      return await authService.verifyOtp(payload);
    } catch (error) {
      return rejectWithValue(error.message || 'Unable to verify OTP');
    }
  },
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const initialState = {
  isBootstrapping: true,
  isAuthenticated: false,
  token: null,
  user: null,
  role: null,
  verificationId: null,
  pendingPhone: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(bootstrapAuth.pending, state => {
        state.isBootstrapping = true;
      })
      .addCase(bootstrapAuth.fulfilled, (state, action) => {
        const session = action.payload;
        state.isBootstrapping = false;
        state.isAuthenticated = Boolean(session?.token && session?.user);
        state.token = session?.token || null;
        state.user = session?.user || null;
        state.role = session?.user?.role || null;
      })
      .addCase(bootstrapAuth.rejected, state => {
        state.isBootstrapping = false;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.user.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unable to login';
      })
      .addCase(sendOtp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationId = action.payload.verificationId;
        state.pendingPhone = action.payload.fullPhoneNumber;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unable to send OTP';
      })
      .addCase(verifyOtp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.user.role;
        state.verificationId = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unable to verify OTP';
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
        state.role = null;
        state.verificationId = null;
        state.pendingPhone = null;
      });
  },
});

export const {clearAuthError} = authSlice.actions;
export default authSlice.reducer;
