interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Nasser',
  lastName: 'Jamal',
  age: 10,
  location: 'Nairobi',
}

const student2: Student = {
  firstName: 'Thondo',
  lastName: 'Bimbo',
  age: 1,
  location: 'LungaLunga',
}

let stdArray: Student[] = [student1, student2];

let table = document.createElement('table');

stdArray.forEach(std => {
  let row = table.insertRow();
  row.insertCell().innerHTML = std.firstName;
  row.insertCell().innerHTML = std.location;
})

document.body.appendChild(table);
