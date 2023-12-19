import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { VscSettings } from 'react-icons/vsc';
// import styles from './home.module.css';

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setShowFilterModal: (show: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearch, setShowFilterModal }) => (
  <div className={`w-100 d-flex flex-column flex-md-row justify-content-center mb-4`}>
    <Form.Group className={`mb-3 mb-md-0 {styles.searchBar}`}>
      <Form.Control type="text" placeholder="Search News..." value={searchTerm} onChange={handleSearch} />
    </Form.Group>
    <Button variant="outline-primary" onClick={() => setShowFilterModal(true)}>
      <VscSettings size={20} style={{ cursor: 'pointer' }} /> Search
    </Button>
  </div>
);

export default SearchBar;
