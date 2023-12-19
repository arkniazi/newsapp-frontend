import styled from 'styled-components';

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  cursor: pointer;
`;

interface PaginationLinkProps {
  active?: boolean;
  disabled?: boolean;
}

const PaginationLink = styled.a<PaginationLinkProps>`
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #292828;
  color: #292828;
  font-weight: ${({ active, disabled }) => (active ? 'bold' : disabled ? 'normal' : 'normal')};

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }

  ${({ active }) =>
    active &&
    `
    color: #fff !important;
    background: #292828;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: rgb(198, 197, 202);
    border: 1px solid rgb(198, 197, 202);
    cursor: not-allowed;
  `}
`;


export { PaginationStyled, PaginationLink };
