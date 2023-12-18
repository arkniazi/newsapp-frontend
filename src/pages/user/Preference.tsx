import React, { useEffect } from 'react';
import { Formik, Form, FormikState } from 'formik';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { updateUserPreferences } from '../../setup/redux/actions/authAction';
import ReactSelect  from '../../components/common/ReactSelect/ReactSelect';
import Loader from '../../components/Loader/Loader';
import { makeLabelOptions, makeOptions } from '../../utils/helpers';
import { getArticleMeta } from '../../setup/redux/actions/articleAction';
import { RootState, SelectOptionType, UserPreferencesProps, UserPreferencesType } from '../../setup/redux/types/actionTypes';


const UserPreferences: React.FC<UserPreferencesProps> = ({
  user,
  sources,
  categories,
  authors,
  loading,
  updateUserPreferences,
  getArticleMeta,
}) => {
  useEffect(() => {
    getArticleMeta({ type: 'all' });
  }, [getArticleMeta]);

 const authorOptions: SelectOptionType[] = makeLabelOptions(authors) ?? [];
 const categoryOptions: SelectOptionType[] = makeOptions(categories) ?? [];
 const sourceOptions: SelectOptionType[] = makeOptions(sources) ?? [];

  const preferences = user?.preferences;

  const initialValues: UserPreferencesType = {
    favorite_sources: preferences?.favorite_sources || [],
    favorite_categories: preferences?.favorite_categories || [],
    favorite_authors: preferences?.favorite_authors || [],
  };

  const onSubmit = (values: any) => {
    updateUserPreferences(values);
  };

  return (
    <div className="container">
      <Loader loading={loading} />
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 text-start">
          <h2>Preferences</h2>
          <p>Customize your article feed.</p>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ setFieldValue, values, resetForm }) => (
              <Form>
                <div className="mb-3">
                  <ReactSelect
                    name="favorite_categories"
                    label="Favorite Categories"
                    isSearchable
                    isClearable
                    isMulti
                    options={categoryOptions}
                  />
                </div>
                <div className="mb-3">
                  <ReactSelect name="favorite_sources" label="Favorite Sources" isSearchable isClearable isMulti options={sourceOptions} />
                </div>
                <div className="mb-3">
                  <ReactSelect
                    name="favorite_authors"
                    label="Favorite Authors"
                    isSearchable
                    isClearable
                    isMulti
                    options={authorOptions}
                  />
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <Button type="submit" variant="primary">
                    Save Preferences
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      resetForm(initialValues as Partial<FormikState<UserPreferencesType>>);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    user: state.auth.user,
    categories: state.article.categories,
    sources: state.article.sources,
    authors: state.article.authors,
    loading: state.ui? state.ui.loading : false,
  };
};

export default connect(mapStateToProps, { updateUserPreferences, getArticleMeta })(UserPreferences);
