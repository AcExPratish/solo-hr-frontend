import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';
import SignOut from 'pages/auth/SignOut';
import ForgotPassword from 'pages/auth/ForgotPassword';
import ResetPassword from 'pages/auth/ResetPassword';
import LockScreen from 'pages/auth/LockScreen';
import TwoFA from 'pages/auth/TwoFA';
import { RouteObject } from 'react-router-dom';

export const AuthRoutes: RouteObject = {
  path: '/auth',
  children: [
    {
      path: 'sign-in',
      element: <SignIn />
    },
    {
      path: 'sign-up',
      element: <SignUp />
    },
    {
      path: 'sign-out',
      element: <SignOut />
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />
    },
    {
      path: 'reset-password',
      element: <ResetPassword />
    },
    {
      path: 'lock-screen',
      element: <LockScreen />
    },
    {
      path: '2FA',
      element: <TwoFA />
    }
  ]
};
