import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  return (
    <div className="px-xxl-5">
      <div className="text-center mb-6">
        <h4 className="text-body-highlight">Forgot your password?</h4>
        <p className="text-body-tertiary mb-5">
          Enter your email below and we will send <br className="d-sm-none" />
          you a reset link
        </p>
        <Form className="d-flex align-items-center mb-5">
          <Form.Control
            type="email"
            id="email"
            className="flex-1"
            placeholder="Email"
          />
          <Button
            variant="primary"
            className="ms-2"
            endIcon={<FontAwesomeIcon icon={faChevronRight} className="ms-2" />}
          >
            Send
          </Button>
        </Form>
        <Link to="#!" className="fs-9 fw-bold">
          Still having problems?
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
