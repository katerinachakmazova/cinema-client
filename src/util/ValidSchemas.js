import * as Yup from 'yup';

const yearValidation = Yup.number()
  .min(1700, 'Year under 1700 is not allowed')
  .max(new Date().getFullYear(), 'Future years are not allowed');

const titleAndNameValidation = Yup.string().min(2).required();
const arrayFieldsValidation = Yup.string().trim();
export const personValid = Yup.object().shape({
  fullName: titleAndNameValidation,
  birthYear: yearValidation,
  deathYear: yearValidation,
  films: Yup.array().of(
    arrayFieldsValidation.required('Movie name can not be empty')
  ),
});

export const studioValid = Yup.object().shape({
  title: titleAndNameValidation,
  foundationYear: yearValidation,
});
export const movieValid = Yup.object().shape({
  title:titleAndNameValidation, 
  releaseYear:yearValidation, 
  stars:Yup.array().of(
    arrayFieldsValidation.required('Star name can not be empty')
  ),
  producers: Yup.array().of(
    arrayFieldsValidation.required('Producer name can not be empty')
  ),
  companies: Yup.array().of(
    arrayFieldsValidation.required('Company name can not be empty')
  ),
})