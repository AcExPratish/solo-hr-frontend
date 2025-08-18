import OnboardingStepBreadCrumb from '@/components/modules/onboarding/OnboardingStepBreadCrumb';
// import { checkScope } from '@/helpers/auth';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import {
  //  useNavigate,
  useParams
} from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { TLoader } from '@/types/modules';
import PhoenixLoader from '@/components/common/PhoenixLoader';
import OnboardingCreateAccountForm from '@/components/modules/onboarding/form/create-account/OnboardingCreateAccountForm';

const OnboardingAccountCreationPage = () => {
  // React Hooks
  // const { t } = useTranslation();
  // const navigate = useNavigate();
  const { employeeId } = useParams();
  const currentStage = 'account_creation';

  // Use States
  const [loader, setLoader] = React.useState<TLoader>({
    list: false,
    form: false
  });

  // Use Effects
  React.useEffect(() => {
    // !checkScope('onboarding.create_account') && navigate('/dashboard');
  }, []);

  React.useEffect(() => {
    if (employeeId) {
      setLoader({ ...loader, list: true });
      //hit api
      setLoader({ ...loader, list: false });
    }
  }, [employeeId]);

  return (
    <React.Fragment>
      {loader?.list ? (
        <PhoenixLoader />
      ) : (
        <React.Fragment>
          <OnboardingStepBreadCrumb
            activeStage={currentStage}
            employeeDetail={{}}
          />

          <Row className="g-3">
            <Col xs={12}>
              <OnboardingCreateAccountForm />
            </Col>
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default OnboardingAccountCreationPage;
