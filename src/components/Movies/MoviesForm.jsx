import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
// ==============================================
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// ==============================================
import { emptyMovie } from '../../constants';
import { createMovie, updateMovie } from '../../store/slices/moviesSlice';
import { movieValid } from '../../util/ValidSchemas';

function MoviesForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const currentMovie = useSelector((state) => state.moviesList.movies).find(
    (movie) => movie.id === id
  );
  const initialValues = {
    ...emptyMovie,
    ...currentMovie,
  };
  const textFieldProps = {
    size: 'small',
    fullWidth: true,
    sx: { mb: 2, mt: 2 },
  };
  const goBack = () => navigate('/movies');
  const onFormSubmit = (values) => {
    const submitValues = { ...values };
    values.id
      ? dispatch(updateMovie(submitValues))
      : dispatch(createMovie(submitValues));
    goBack();
  };
  const createFieldArray = ({push, remove, form}, nameOfEntity) => {
    const {values} = form;
    let singularWord = nameOfEntity.slice(0, -1);
    singularWord = singularWord[0].toUpperCase() + singularWord.slice(1);
    if(singularWord[singularWord.length-1]==='e' && singularWord[singularWord.length-2]==='i'){
      singularWord = singularWord.slice(0, singularWord.length-2);
      singularWord+='y';
    }
    return(
            <div>
        <Button
          {...textFieldProps}
          type='button'
          variant='outlined'
          onClick={() => push('')}
        >
          Add a {singularWord}
        </Button>
        {values[nameOfEntity] &&
          values[nameOfEntity].length > 0 &&
          values[nameOfEntity].map((item, index) => (
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
                  label= {`${singularWord} Name`}
                  name={`${nameOfEntity}.${index}`}
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
              <ErrorMessage name={`${nameOfEntity}.${index}`}>
                {(message) => (
                  <Alert severity='error' sx={{ mb: 2 }}>
                    {message}
                  </Alert>
                )}
              </ErrorMessage>
            </Box>
          ))}
      </div>
    )

  }
  const renderMovieForm = ({isValid }) => {
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
          name='releaseYear'
          label='Relase Year'
          {...textFieldProps}
        />
        <ErrorMessage name='releaseYear'>
          {(message) => <Alert severity='error'>{message}</Alert>}
        </ErrorMessage>
        <Field
          as={TextField}
          type='text'
          name='poster'
          label='Poster'
          {...textFieldProps}
        />
        <FieldArray name='stars'>{(arrayHelpers) => createFieldArray(arrayHelpers, 'stars')}</FieldArray>
        <FieldArray name='producers'>{(arrayHelpers) => createFieldArray(arrayHelpers, 'producers')}</FieldArray>
        <FieldArray name='companies'>{(arrayHelpers) => createFieldArray(arrayHelpers, 'companies')}</FieldArray>
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
        validationSchema={movieValid}
        enableReinitialize
        validateOnMount
      >
        {renderMovieForm}
      </Formik>
    </Box>
  );
}

export default MoviesForm;
