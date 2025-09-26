import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
// ==============================================
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// ==============================================
import { emptyActor } from '../../constants';
import { createActor, updateActor } from '../../store/slices/actorsSlice';
import { actorsValid } from '../../util/ValidSchemas';

function ActorsForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const currentActor = useSelector((state) => state.actorsList.actors).find(
    (actor) => actor.id === id
  );
  const initialValues = {
    ...emptyActor,
    ...currentActor,
    alive: !currentActor?.deathYear,
  };
  const textFieldProps = {
    size: 'small',
    fullWidth: true,
    sx: { mb: 2 },
  };
  const onFormSubmit = (values) => {
    const submitValues = { ...values };
    delete submitValues.alive;
    values.id
      ? dispatch(updateActor(submitValues))
      : dispatch(createActor(submitValues));
  };
  const goBack = () => navigate(-1);
  const filmFieldArray = ({ push, remove, form }) => {
    const { values } = form;
    return (
      <div>
        <Button
          {...textFieldProps}
          type='button'
          variant='outlined'
          onClick={() => push('')}
        >
          Add a film
        </Button>
        {values.films &&
          values.films.length > 0 &&
          values.films.map((film, index) => (
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  flexDirection: { xs: 'column', sm: 'row' },
                  mb: { xs: 0, sm: 2 },
                }}
                key={index}
              >
                <Field
                  as={TextField}
                  label='Movie Name'
                  name={`films.${index}`}
                  {...textFieldProps}
                  sx={{ alignSelf: 'center' }}
                />
                <IconButton
                  type='button'
                  sx={{
                    width: { xs: '100%', sm: 'auto' },
                    mb: { xs: 2, sm: 0 },
                  }}
                  onClick={() => remove(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
              <ErrorMessage name={`films.${index}`}>
                {(message) => (
                  <Alert severity='error' sx={{ mb: 2 }}>
                    {message}
                  </Alert>
                )}
              </ErrorMessage>
            </Box>
          ))}
      </div>
    );
  };
  const renderActorForm = ({ values, isValid }) => {
    return (
      <Form style={{ width: '80%' }}>
        <Box>
          <label>Alive</label>
          <Field name='alive'>
            {({ field, form }) => {
              return (
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(e) => {
                    const newValue = e.target.checked;
                    form.setFieldValue(field.name, newValue);
                    if (newValue) form.setFieldValue('deathYear', '');
                  }}
                />
              );
            }}
          </Field>
        </Box>
        <Field
          as={TextField}
          type='text'
          name='fullName'
          label='Full Name'
          {...textFieldProps}
        />
        <ErrorMessage name='fullName'>
          {(message) => <Alert severity='error'>{message}</Alert>}
        </ErrorMessage>
        <Field
          as={TextField}
          type='text'
          name='birthYear'
          label='Birth Year'
          {...textFieldProps}
        />
        <ErrorMessage name='birthYear'>
          {(message) => <Alert severity='error'>{message}</Alert>}
        </ErrorMessage>
        <Field
          as={TextField}
          type='text'
          name='deathYear'
          label='Death Year'
          disabled={values.alive}
          {...textFieldProps}
        />
        <ErrorMessage name='deathYear'>
          {(message) => <Alert severity='error'>{message}</Alert>}
        </ErrorMessage>
        <Field
          as={TextField}
          type='text'
          name='nationality'
          label='Nationality'
          {...textFieldProps}
        />
        <Field
          as={TextField}
          type='text'
          name='image'
          label='URL for poster'
          {...textFieldProps}
        />
        <FieldArray name='films'>{filmFieldArray}</FieldArray>
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
        validationSchema={actorsValid}
        enableReinitialize
        validateOnMount
      >
        {renderActorForm}
      </Formik>
    </Box>
  );
}

export default ActorsForm;
