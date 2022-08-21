import Movie from '../ts/Movie';

test('create movie item ', () => {
  const movie = new Movie(125, 'Carol', 150, 2005, 'USA', 'Change one thing, everything is there', 'fantasy', '127 min / 01:50');

  expect(movie).toEqual({
    country: 'USA',
    genre: 'fantasy',
    id: 125,
    name: 'Carol',
    price: 150,
    slogan: 'Change one thing, everything is there',
    time: '127 min / 01:50',
    year: 2005,
  });
});
