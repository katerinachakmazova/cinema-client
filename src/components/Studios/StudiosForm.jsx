import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
// ==============================================
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
// ==============================================
import { emptyStudio } from '../../constants';
import { createStudio, updateStudio } from '../../store/slices/studiosSlice';
import { studioValid } from '../../util/ValidSchemas';

function StudiosForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const currentStudio = useSelector((state) => state.studiosList.studios).find(
    (studio) => studio.id === id
  );
  const initialValues = {
    ...emptyStudio,
    ...currentStudio,
  };
  const textFieldProps = {
    size: 'small',
    fullWidth: true,
    sx: { mb: 2, mt: 2 },
  };
  const goBack = () => navigate('/studios');
  const onFormSubmit = (values) => {
    const submitValues = { ...values };
    values.id
      ? dispatch(updateStudio(submitValues))
      : dispatch(createStudio(submitValues));
    goBack();
  };
  const renderStudioForm = ({ values, isValid }) => {
    return (
      <Form style={{ width: '80%' }}>
        <Field
          as={TextField}
          type='text'
          name='title'
          label='Title'
          {...textFieldProps}
        />
        <ErrorMessage name='title'>
          {(message) => <Alert severity='error'>{message}</Alert>}
        </ErrorMessage>
        <Field
          as={TextField}
          type='text'
          name='foundationYear'
          label='Foundation Year'
          {...textFieldProps}
        />
        <ErrorMessage name='foundationYear'>
          {(message) => <Alert severity='error'>{message}</Alert>}
        </ErrorMessage>
        <ErrorMessage name='deathYear'>
          {(message) => <Alert severity='error'>{message}</Alert>}
        </ErrorMessage>
        <Field
          as={TextField}
          type='text'
          name='location'
          label='Location'
          {...textFieldProps}
        />
        <Field
          as={TextField}
          type='text'
          name='logo'
          label='URL for Logo'
          {...textFieldProps}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            '& button': {
              width: { xs: '100%', md: 'auto' },
            },
          }}
        >
          <Button variant='contained' type='submit' disabled={!isValid}>
            Submit
          </Button>
          <Button variant='outlined' type='reset'>
            Reset
          </Button>
          <Button variant='outlined' type='button' onClick={goBack}>
            Return
          </Button>
        </Box>
      </Form>
    );
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={studioValid}
        enableReinitialize
        validateOnMount
      >
        {renderStudioForm}
      </Formik>
    </Box>
  );
}

export default StudiosForm;
