interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let user1: Student = {
      firstName: "Shobi",
      lastName: "Ola-Adisa",
      age: 21,
      location: "Somewhere"
}

let user2: Student = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      location: "Here"
}

let studentsList = [user1, user2];
let table = document.createElement('table');
let tbody = document.createElement('tbody');

table.appendChild(tbody);
document.body.appendChild(table);

studentsList.map((item: Student) => {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td_name = document.createElement('td');
    td_name.innerHTML = item.firstName;
    tr.appendChild(td_name);
    let td_location = document.createElement('td');
    td_location.innerHTML = item.location;
    tr.appendChild(td_location);

    return tr;
});
