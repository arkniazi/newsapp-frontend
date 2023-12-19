import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, FormikState } from 'formik';
import ReactSelect from '../common/ReactSelect/ReactSelect';
import { ArticleFilterValues } from '../../setup/redux/types/actionTypes';
// import { ReactSelect, Option } from './ReactSelect';

interface Option {
  value: any,
  label: any
}
interface ArticleFilterProps {
  filterValues: ArticleFilterValues,
  categories: Option[];
  sources: Option[];
  authors: Option[];
  show: boolean;
  onHide: () => void;
  onSubmit: (values: ArticleFilterProps['filterValues'] | null) => void;
}

const ArticleFilter: React.FC<ArticleFilterProps> = ({ filterValues, categories, sources, authors, show, onHide, onSubmit }) => {
  const initialValues: ArticleFilterValues = {
    category_id: filterValues?.category_id || null,
    source_id: filterValues?.source_id || null,
    author_name: filterValues?.author_name || null,
    date: filterValues?.date || '',
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Advanced Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
          {({ setFieldValue, values, resetForm }) => (
            <Form>
              <div className="mb-3">
                <ReactSelect
                  name="category_id"
                  label="Select Category"
                  isSearchable
                  isClearable
                  options={categories}
                />
              </div>
              <div className="mb-3">
                <ReactSelect
                  name="source_id"
                  label="Select Source"
                  isSearchable
                  isClearable
                  options={sources}
                />
              </div>
              <div className="mb-3">
                <ReactSelect
                  name="author_name"
                  label="Select Author"
                  isSearchable
                  isClearable
                  options={authors}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="date">
                  Select Publish Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  value={values.date}
                  onChange={(e) => setFieldValue('date', e.target.value)}
                />
              </div>
              <div className="d-flex flex-row justify-content-between">
                <Button type="submit" variant="primary">
                  Search
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    resetForm(initialValues as Partial<FormikState<ArticleFilterValues>>);
                    onSubmit(null);
                  }}
                >
                  Reset
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ArticleFilter;
