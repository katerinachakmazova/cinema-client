import * as Yup from 'yup';

const yearValidation = Yup.number()
  .min(1700, 'Year under 1700 is not allowed')
  .max(new Date().getFullYear(), 'Future years are not allowed');

const titleAndNameValidation = Yup.string().min(2).required();

export const personValid = Yup.object().shape({
  fullName: titleAndNameValidation,
  birthYear: yearValidation,
  deathYear: yearValidation,
  films: Yup.array().of(
    Yup.string().trim().required('Movie name can not be empty')
  ),
});

export const studioValid = Yup.object().shape({
  title: titleAndNameValidation,
  foundationYear: yearValidation,
});
