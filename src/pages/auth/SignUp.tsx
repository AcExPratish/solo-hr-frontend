import AuthSplitLayout from 'layouts/AuthSplitLayout';
import bg from 'assets/img/bg/32.png';
import SignUpForm from 'components/modules/auth/SignUpForm';

const SignUp = () => {
  return (
    <AuthSplitLayout bg={bg}>
      <SignUpForm />
    </AuthSplitLayout>
  );
};

export default SignUp;
