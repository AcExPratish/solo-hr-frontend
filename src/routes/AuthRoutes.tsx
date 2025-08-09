import SignIn from 'pages/auth/SignIn';
import ForgotPassword from 'pages/auth/ForgotPassword';
import ResetPassword from 'pages/auth/ResetPassword';
import { RouteObject } from 'react-router-dom';
import GuestGuard from '../utils/route-guard/GuestGuard';

export const AuthRoutes: RouteObject = {
  path: '/auth',
  children: [
    {
      path: 'sign-in',
      element: (
        <GuestGuard>
          <SignIn />
        </GuestGuard>
      )
    },
    {
      path: 'forgot-password',
      element: (
        <GuestGuard>
          <ForgotPassword />
        </GuestGuard>
      )
    },
    {
      path: 'reset-password',
      element: (
        <GuestGuard>
          <ResetPassword />
        </GuestGuard>
      )
    }
  ]
};
