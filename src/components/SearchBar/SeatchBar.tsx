import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { VscSettings } from 'react-icons/vsc';
import styled from 'styled-components';

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setShowFilterModal: (show: boolean) => void;
}

const ButtonStyled = styled.button`
  border-color: #d95f5f;
  color: #d95f5f;
  border-radius:0;
  &:hover {
    border-color: #d95f5f;
    background: #d95f5f;
    color: #fff;
  }
`;

const FormGroupStyled = styled(Form.Group)`
  .form-control {
    border-radius: 0;
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearch, setShowFilterModal }) => (
  <div className={`w-100 d-flex flex-column flex-md-row justify-content-center mb-4`}>
    <FormGroupStyled>
      <Form.Control type="text" placeholder="Search News..." value={searchTerm} onChange={handleSearch} />
    </FormGroupStyled>
    <ButtonStyled className="btn" onClick={() => setShowFilterModal(true)}>
      <VscSettings size={20} style={{ cursor: 'pointer' }} /> Search
    </ButtonStyled>
  </div>
);

export default SearchBar;
