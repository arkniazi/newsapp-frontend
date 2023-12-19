import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { login } from '../../setup/redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { LoginFormValues, RootState } from '../../setup/redux/types/actionTypes';
import {
  ErrorText,
  FormContainer,
  FormWrapper,
  AuthPageStyled,
  StyledInput,
  StyledLabel,
  StyledLink,
  SubmitButton,
} from './styled';


interface LoginComponentProps {
  user: any;
  login: (values: LoginFormValues) => Promise<boolean | undefined>;
}


const LoginComponent: React.FC<LoginComponentProps> = ({ login }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
    
    try {
     const isSubmit = await login(values);
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
        <h2>Login</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <FormWrapper>
                  <Form>
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

                    <p>
                      {"Don't have an account?"} <StyledLink to="/register">Register</StyledLink>
                    </p>

                    <SubmitButton type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Logging in...' : 'Login'}
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

const mapStateToProps = (state: RootState) => {
  return {
    user: state.auth.user,
  };
};

export const Login = connect(mapStateToProps, { login })(LoginComponent);
