
import { ErrorMessage, Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthPageStyled = styled.div`
  padding-top: 100px;
`

export const FormContainer = styled.div`
  background: #fff;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormWrapper = styled.div`
  margin-top: 20px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  text-align:left;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  text-align:left;
  font-size:10px;
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
