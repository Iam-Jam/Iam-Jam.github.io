// function operation(action) {
//     let eeId = document.getElementById("txtEEID").value;
//     let eeName = document.getElementById("txtEEName").value;
//     let eeHours = document.getElementById("txtEEHours").value;

//     if (action === 'log') {
//         if (eeId === '' || eeName === '' || eeHours === '') {
//             alert("Please fill in all fields.");
//             return;
//         }

//         let table = document.getElementById("result-table").getElementsByTagName('tbody')[0];
//         let newRow = table.insertRow();
//         newRow.innerHTML = `
//             <td>${eeId}</td>
//             <td>${eeName}</td>
//             <td>${eeHours}</td>
//             <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
//             <td><button class="btn btn-warning" onclick="editRow(this)">Edit</button></td>`;
    

//     } else if (action === 'total') {
//         let totalHours = 0;
//         let rows = document.querySelectorAll("#result-table tbody tr");
//         rows.forEach(row => {
//             totalHours += parseInt(row.cells[2].innerText);
//         });
//         document.getElementById("TotalHours").value = totalHours;
//     }
// }

// function removeRow(button) {
//     let row = button.closest('tr');
//     let rowIndex = row.rowIndex;
//     document.getElementById("result-table").deleteRow(rowIndex);
// }


//next line here

// function operation(action) {
//     let eeId = document.getElementById("txtEEID").value;
//     let eeName = document.getElementById("txtEEName").value;
//     let eeHours = document.getElementById("txtEEHours").value;

//     if (action === 'log') {
//         if (eeId === '' || eeName === '' || eeHours === '') {
//             alert("Please fill in all fields.");
//             return;
//         }

//         let table = document.getElementById("result-table").getElementsByTagName('tbody')[0];
//         let newRow = table.insertRow();
//         newRow.innerHTML = `
//             <td>${eeId}</td>
//             <td>${eeName}</td>
//             <td>${eeHours}</td>
//             <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
//             <td><button class="btn btn-warning" onclick="editRow(this)">Edit</button></td>`;

//         document.getElementById("btnLogHours").textContent = "Update Data";

//     } else if (action === 'total') {
//         let totalHours = 0;
//         let rows = document.querySelectorAll("#result-table tbody tr");
//         rows.forEach(row => {
//             totalHours += parseInt(row.cells[2].innerText);
//         });
//         document.getElementById("TotalHours").value = totalHours;
//     }
// }

// function removeRow(button) {
//     let row = button.closest('tr');
//     let rowIndex = row.rowIndex;
//     document.getElementById("result-table").deleteRow(rowIndex);
// }

// function editRow(button) {
//     let row = button.closest('tr');
//     let cells = row.cells;
//     let eeNameInput = document.getElementById("txtEEName");
//     let eeHoursInput = document.getElementById("txtEEHours");

//     eeNameInput.value = cells[1].textContent;
//     eeHoursInput.value = cells[2].textContent;

//     document.getElementById("btnLogHours").textContent = "Update Data";
// }

function operation(action) {
    let eeId = document.getElementById("txtEEID").value;
    let eeName = document.getElementById("txtEEName").value;
    let eeHours = document.getElementById("txtEEHours").value;

    if (action === 'log') {
        if (eeId === '' || eeName === '' || eeHours === '') {
            alert("Please fill in all fields.");
            return;
        }

        let table = document.getElementById("result-table").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${eeId}</td>
            <td>${eeName}</td>
            <td>${eeHours}</td>
            <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
            <td><button class="btn btn-warning" onclick="editRow(this)">Edit</button></td>`;

    } else if (action === 'update') {
        let eeNameInput = document.getElementById("txtEEName");
        let eeHoursInput = document.getElementById("txtEEHours");
        let row = document.querySelector("#result-table tbody tr");

        row.cells[1].textContent = eeNameInput.value;
        row.cells[2].textContent = eeHoursInput.value;

        document.getElementById("btnLogHours").textContent = "LOG HOURS";
        document.getElementById("btnLogHours").setAttribute("onclick", "operation('log')");
    } else if (action === 'total') {
        let totalHours = 0;
        let rows = document.querySelectorAll("#result-table tbody tr");
        rows.forEach(row => {
            totalHours += parseInt(row.cells[2].innerText);
        });
        document.getElementById("TotalHours").value = totalHours;
    }
}

function removeRow(button) {
    let row = button.closest('tr');
    let rowIndex = row.rowIndex;
    document.getElementById("result-table").deleteRow(rowIndex);
}

function editRow(button) {
    let row = button.closest('tr');
    let cells = row.cells;
    let eeNameInput = document.getElementById("txtEEName");
    let eeHoursInput = document.getElementById("txtEEHours");

    eeNameInput.value = cells[1].textContent;
    eeHoursInput.value = cells[2].textContent;

    let logHoursButton = document.getElementById("btnLogHours");
    logHoursButton.textContent = "Update Data";
    logHoursButton.setAttribute("onclick", "operation('update')");
}


