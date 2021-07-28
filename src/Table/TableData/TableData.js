
function Data(id, name, age, gender, profession, technology, experience, employment) {

  function createData(id, name, age, gender, profession, technology, experience, employment) {
    return {
      id, name, age, gender, profession, technology, experience, employment
    };
  }

  return createData(
    id, name, age, gender, profession, technology, experience, employment
  )
}


export const rows = [
  Data(
    1,
    'Levan Natsvlishvili',
    24,
    'Male',
    'Software Engineer',
    'React',
    'Middle',
    'Full-Time'
  ),
  Data(
    2,
    'Sophia Shinjikashvili',
    28,
    'Female',
    'Software Engineer',
    'React',
    'Senior',
    'Remote'
  ),
  Data(
    3,
    'Malkhaz dartsmelidze',
    25,
    'Male',
    'Software Engineer',
    'Laravel',
    'Senior',
    'Part-Time',
  ),



];

export const Database = () => {
  const database = [];
  rows.map((row) => {
    database.push(Object.entries(row))

    return true;
  })
  return database;
}