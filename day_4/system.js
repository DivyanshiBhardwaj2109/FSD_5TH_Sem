const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${marks}</td>
        <td>${grades}</td>
        <td>${course}</td>
        <td>${action}</td>
        <td>
            <button class="delete-btn" onclick="deleteStudent(this)">
                Delete
            </button>
        </td>
    `;

    table.appendChild(row);

    form.reset();
});

function deleteStudent(button) {
    button.parentElement.parentElement.remove();
}