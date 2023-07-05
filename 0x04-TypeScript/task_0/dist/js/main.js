var student1 = {
    firstName: 'Nasser',
    lastName: 'Jamal',
    age: 10,
    location: 'Nairobi',
};
var student2 = {
    firstName: 'Thondo',
    lastName: 'Bimbo',
    age: 1,
    location: 'LungaLunga',
};
var stdArray = [student1, student2];
var table = document.createElement('table');
stdArray.forEach(function (std) {
    var row = table.insertRow();
    row.insertCell().innerHTML = std.firstName;
    row.insertCell().innerHTML = std.location;
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map