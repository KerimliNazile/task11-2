
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const table = document.getElementById("userTable");

console.log(age);

document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

const married = document.getElementById("married").checked ? "Yes" : "No";
 




    if (false) {
        alert("Please fill out all fields.");
        return;


       
    }
    const tr = document.createElement('tr');
    const firstNamee = document.createElement('td');
    const lastNamee = document.createElement('td');
    const agee = document.createElement('td');
    const marriedd = document.createElement('td');

    firstNamee.innerHTML = firstName.value
    lastNamee.innerHTML = lastName.value
    agee.innerHTML = age.value
    marriedd.innerHTML = married
    table.append(tr);

    tr.append(firstNamee, lastNamee, agee, marriedd);

    // Clear the form
    document.getElementById("userForm").reset();

});