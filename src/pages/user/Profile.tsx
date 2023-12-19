import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikState } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../setup/redux/actions/authAction';
import { Button } from 'react-bootstrap';
import Loader from '../../components/Loader/Loader';
import { RootState, UpdateProfileValues } from '../../setup/redux/types/actionTypes';

//@ts-ignore
const UserProfile = ({ user, updateUserProfile, loading }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    current_password: Yup.string(),
    new_password: Yup.string().min(8, 'New Password must be at least 8 characters'),
    confirm_new_password: Yup.string().oneOf([Yup.ref('new_password')], 'New Password must match'),
  });

  const initialValues = {
    name: user?.name,
    email: user?.email,
    current_password: '',
    new_password: '',
    confirm_new_password: '',
  };

  const onSubmit = (values: UpdateProfileValues) => {
   const updatedValues = {
     ...values,
     current_password: values.current_password === '' ? undefined : values.current_password,
     new_password: values.new_password === '' ? undefined : values.new_password,
     confirm_new_password: values.confirm_new_password === '' ? undefined : values.confirm_new_password,
   };

   updateUserProfile(updatedValues);
  };

  return (
    <div className="container">
      <Loader loading={loading} />
      <h2>User Profile</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 text-start">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ resetForm }) => (
              <Form>
                <FormField label="Name" name="name" type="text" />
                <FormField label="Email" name="email" type="email" />
                <FormField label="Old Password" name="current_password" type="password" />
                <FormField label="New Password" name="new_password" type="password" />
                <FormField label="Confirm New Password" name="confirm_new_password" type="password" />

                <div className="d-flex flex-row justify-content-between">
                  <Button type="submit" variant="primary">
                    Update Profile
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      resetForm(initialValues as Partial<FormikState<UpdateProfileValues>>);
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

//@ts-ignore
const FormField = ({ label, name, type }) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <Field type={type} id={name} name={name} className="form-control" autoComplete="off" />
    <ErrorMessage name={name} component="div" className="text-danger" />
  </div>
);

const mapStateToProps = (state: RootState) => {
  return {
    user: state.auth.user,
    loading: state.ui.loading,
  };
};

export default connect(mapStateToProps, { updateUserProfile })(UserProfile);
