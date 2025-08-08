import AuthSplitLayout from 'layouts/AuthSplitLayout';
import bg from 'assets/img/bg/31.png';
import SignOutForm from 'components/modules/auth/SignOutForm';

const SignOut = () => {
  return (
    <AuthSplitLayout bg={bg} logo={false}>
      <SignOutForm />
    </AuthSplitLayout>
  );
};

export default SignOut;
