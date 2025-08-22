/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from 'react-bootstrap';
import { getIn, type FormikErrors, type FormikTouched } from 'formik';

export function getFieldClass(
  touched: FormikTouched<any> | undefined,
  errors: FormikErrors<any> | undefined,
  path: string
) {
  const isTouched = Boolean(getIn(touched, path));
  const err = getIn(errors, path);

  const hasError =
    typeof err === 'string' || (Array.isArray(err) && err.length > 0);

  return isTouched && hasError ? 'is-invalid' : '';
}

type Props = {
  touched?: FormikTouched<any>;
  errors?: FormikErrors<any>;
  path: string;
};

export function FieldErrorFeedback({ touched, errors, path }: Props) {
  const isTouched = Boolean(getIn(touched, path));
  const err = getIn(errors, path);

  let message: string | undefined;
  if (typeof err === 'string') message = err;
  else if (Array.isArray(err)) message = err.join(', ');

  return isTouched && message ? (
    <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
  ) : null;
}
