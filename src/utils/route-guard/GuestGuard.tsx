import { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthHook from '../../hooks/modules/useAuthHook';

export type GuardProps = {
  children: ReactElement | null;
};

const GuestGuard = ({ children }: GuardProps) => {
  const { isAuthenticated } = useAuthHook();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(location?.state?.from ? location?.state?.from : '/dashboard', {
        state: {
          from: location.pathname
        },
        replace: true
      });
    }
  }, [isAuthenticated, navigate, location]);

  return children;
};

export default GuestGuard;
