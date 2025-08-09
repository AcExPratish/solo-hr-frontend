import { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthHook from '../../hooks/modules/useAuthHook';
import PhoenixLoader from '@/components/common/PhoenixLoader';

export type GuardProps = {
  children: ReactElement | null;
};

const AuthGuard = ({ children }: GuardProps) => {
  const { isAuthenticated, isAuthLoading, setAuthInitialized } = useAuthHook();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Initialize auth state on mount - this will set loading to false
    // after we've determined the auth state from localStorage
    const timer = setTimeout(() => {
      setAuthInitialized();
    }, 100); // Small delay to prevent flash

    return () => clearTimeout(timer);
  }, [setAuthInitialized]);

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      window.location.href = window.location.origin + '/auth/sign-in';
    }
  }, [isAuthenticated, isAuthLoading, navigate, location]);

  // Show loader while determining auth state
  if (isAuthLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
        <PhoenixLoader />
      </div>
    );
  }

  // Only render children if authenticated
  return isAuthenticated ? children : null;
};

export default AuthGuard;
