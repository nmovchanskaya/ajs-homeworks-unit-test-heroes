export default function sortPersons(persons) {
  persons.sort((a, b) => b.health - a.health);

  return persons;
}
