import sortPersons from '../show.js';

const persons = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const personsSorted = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sorting Persons by health desc', () => {
  const personsNew = sortPersons(persons);
  expect(personsNew).toEqual(personsSorted);
});
