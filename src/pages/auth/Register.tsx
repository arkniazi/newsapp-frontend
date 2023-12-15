import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { register } from '../../setup/redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { RegisterFormValues } from '../../setup/redux/types/actionTypes';
import { ErrorText, FormContainer, FormWrapper, AuthPageStyled, StyledInput, StyledLabel, StyledLink, SubmitButton } from './styled';

interface RegisterComponentProps {
  register: (values: RegisterFormValues) => Promise<boolean | undefined>;
}

const RegisterComponent: React.FC<RegisterComponentProps> = ({ register }) => {
  const navigate = useNavigate();

  const initialValues: RegisterFormValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = async (values: RegisterFormValues, actions: FormikHelpers<RegisterFormValues>) => {
    try {
      const isSubmit = await register(values);
      if (isSubmit) {
        navigate('/');
      }
    } catch (error) {
      // Handle any errors or display a message
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <AuthPageStyled className="">
      <FormContainer className="container pt-5">
        <h2>Register</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <FormWrapper>
                  <Form>
                    <div className="mb-3">
                      <StyledLabel htmlFor="name">Name</StyledLabel>
                      <StyledInput type="text" id="name" name="name" className="form-control" />
                      <ErrorText name="name" component="div" />
                    </div>

                    <div className="mb-3">
                      <StyledLabel htmlFor="email">Email</StyledLabel>
                      <StyledInput type="text" id="email" name="email" className="form-control" />
                      <ErrorText name="email" component="div" />
                    </div>

                    <div className="mb-3">
                      <StyledLabel htmlFor="password">Password</StyledLabel>
                      <StyledInput type="password" id="password" name="password" className="form-control" />
                      <ErrorText name="password" component="div" />
                    </div>

                    <div className="mb-3">
                      <StyledLabel htmlFor="password_confirmation">Confirm Password</StyledLabel>
                      <StyledInput type="password" id="password_confirmation" name="password_confirmation" className="form-control" />
                      <ErrorText name="password_confirmation" component="div" />
                    </div>

                    <p>
                      {'Already have an account?'} <StyledLink to="/login">Login</StyledLink>
                    </p>

                    <SubmitButton type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </SubmitButton>
                  </Form>
                </FormWrapper>
              )}
            </Formik>
          </div>
        </div>
      </FormContainer>
    </AuthPageStyled>
  );
};

export default connect(null, { register })(RegisterComponent);
