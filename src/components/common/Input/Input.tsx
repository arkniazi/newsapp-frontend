// components/common/Input.tsx
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  // Add additional styling or Bootstrap classes if needed
`;

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  // Add other input props as needed
}

const Input: React.FC<InputProps> = ({ type, id, value, onChange, placeholder }) => {
  return <StyledInput type={type} id={id} value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;
