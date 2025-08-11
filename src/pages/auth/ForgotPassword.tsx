import ForgotPasswordForm from '@/components/modules/auth/form/ForgotPasswordForm';
import AuthSplitLayout from '@/layouts/AuthSplitLayout';
import bg from '@/assets/img/bg/34.png';

const ForgotPassword = () => {
  return (
    <AuthSplitLayout bg={bg}>
      <ForgotPasswordForm />
    </AuthSplitLayout>
  );
};

export default ForgotPassword;
