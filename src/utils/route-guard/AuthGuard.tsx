import { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthHook from '../../hooks/modules/useAuthHook';

export type GuardProps = {
  children: ReactElement | null;
};

const AuthGuard = ({ children }: GuardProps) => {
  const { isAuthenticated } = useAuthHook();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = window.location.origin + '/auth/sign-in';
    }
  }, [isAuthenticated, navigate, location]);

  return children;
};

export default AuthGuard;
