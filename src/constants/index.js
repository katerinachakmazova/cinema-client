// API
export const BASE_URL = 'http://localhost:5000';

// Slider constants
export const posters = [
  {
    id: 1,
    url: 'https://kino-teatr.ua/public/main/films/2025-08/poster_68aaa9bb47b23.jpg',
    alt: 'poster',
  },
  {
    id: 2,
    url: 'https://kino-teatr.ua/public/main/films/2025-08/poster_68b166592487e.jpg',
    alt: 'poster',
  },
  {
    id: 3,
    url: 'https://kino-teatr.ua/public/main/films/2025-09/poster_68d2491b62bd7.jpg',
    alt: 'poster',
  },
  {
    id: 4,
    url: 'https://kino-teatr.ua/public/main/films/2025-09/poster_68ca3bd4ec250.jpg',
    alt: 'poster',
  },
  {
    id: 5,
    url: 'https://kino-teatr.ua/public/main/films/2025-09/poster_68d4d755960f7.jpg',
    alt: 'poster',
  },
];
export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

// Constants for forms
export const emptyPerson = {
  films: [],
  fullName: '',
  birthYear: '',
  deathYear: '',
  nationality: '',
  image: '',
};

export const emptyStudio = {
  title: '', 
  location: '', 
  foundationYear: '', 
  logo: ''

}
