// components/LoginForm/LoginComponent.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../setup/redux/actions/authAction';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormWrapper = styled.div`
  margin-top: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledInput = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const ErrorText = styled(ErrorMessage)`
  color: red;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginComponent = ({ login }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values, actions) => {
    const isSubmit = await login(values);
    if (isSubmit) {
      navigate('/');
    }
    actions.setSubmitting(false);
  };

  return (
    <Container className="container">
      <h2>Login</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
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
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export const Login = connect(mapStateToProps, { login })(LoginComponent);
