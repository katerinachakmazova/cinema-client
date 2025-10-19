import * as Yup from 'yup';

export const personValid = Yup.object().shape({
  fullName: Yup.string().required(),
  birthYear: Yup.number()
    .min(1700, 'Year under 1700 is not allowed')
    .max(new Date().getFullYear(), 'Future years are not allowed'),
  deathYear: Yup.number()
    .min(1700, 'Year under 1700 is not allowed')
    .max(new Date().getFullYear(), 'Future years are not allowed'),
  films: Yup.array().of(
    Yup.string().trim().required('Movie name can not be empty')
  ),
});
