import React from 'react';
import AuthSplitLayout from 'layouts/AuthSplitLayout';
import bg from 'assets/img/bg/30.png';
import SignInForm from 'components/modules/auth/SignInForm';

const SignIn = () => {
  return (
    <AuthSplitLayout bg={bg}>
      <SignInForm layout="split" />
    </AuthSplitLayout>
  );
};

export default SignIn;
