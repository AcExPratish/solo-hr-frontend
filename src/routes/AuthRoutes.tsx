import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';
import SignOut from 'pages/auth/SignOut';
import ForgotPassword from 'pages/auth/ForgotPassword';
import ResetPassword from 'pages/auth/ResetPassword';
import LockScreen from 'pages/auth/LockScreen';
import TwoFA from 'pages/auth/TwoFA';
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
      path: 'sign-up',
      element: (
        <GuestGuard>
          <SignUp />
        </GuestGuard>
      )
    },
    {
      path: 'sign-out',
      element: (
        <GuestGuard>
          <SignOut />
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
    },
    {
      path: 'lock-screen',
      element: (
        <GuestGuard>
          <LockScreen />
        </GuestGuard>
      )
    },
    {
      path: '2FA',
      element: (
        <GuestGuard>
          <TwoFA />
        </GuestGuard>
      )
    }
  ]
};
