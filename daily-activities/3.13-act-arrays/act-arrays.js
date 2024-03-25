// let Items = [];
// let result = "";

// document.getElementById("btn-log").addEventListener('click', function () {
//     let EmployeeID = parseFloat(document.getElementById("txtEEID").value);
//     let EmployeeName = parseFloat(document.getElementById("txtEEName").value);
//     let EmployeeHours = parseFloat(document.getElementById("txtEEHours").value);
//     let result;

//     Items.push([EmployeeID, EmployeeName, EmployeeHours]);
//     DrawList();
// });

// function remove(index) {
//     Items.splice(index, 1);
//     DrawList();
// }

// function DrawList() {
//     let Table = "";

//     for(let x = 0; x < Items.length; x++)
//         Table += "<tr>"+ Items[x][0] + Items[x][1] + Items[x][2] + "<button class='btn btn-success' onclick='remove("+x+")'>Remove</button></tr>";

//     document.getElementById("TotalHours").innerHTML = List;
// }


// function operation(action) {
  
//     let eeId = document.getElementById("txtEEID").value;
//     let eeName = document.getElementById("txtEEName").value;
//     let eeHours = document.getElementById("txtEEHours").value;

//     if (eeId === '' || eeName === '' || eeHours === '') {
//         alert("Please fill in all fields.");
//         return;
//     }

//     if (action === 'log') {
       
//         let table = document.getElementById("result-table").getElementsByTagName('tbody')[0];
//         let newRow = table.insertRow(-1);
//         newRow.innerHTML = `<td>${eeId}</td><td>${eeName}</td><td>${eeHours}</td><td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>`;

       
//         document.getElementById("txtEEID").value = '';
//         document.getElementById("txtEEName").value = '';
//         document.getElementById("txtEEHours").value = '';
//     } else if (action === 'remove') {
      
//         let row = event.target.parentNode.parentNode.parentNode;
//         row.parentNode.removeChild(row);
//     } else if (action === 'total') {
       
//         let totalHours = 0;
//         let rows = document.getElementById("result-table").getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//         for (let i = 0; i < rows.length; i++) {
//             totalHours += parseInt(rows[i].getElementsByTagName('td')[2].innerText);
//         }

       
//         document.getElementById("TotalHours").value = totalHours;
//     }
// }

// function removeRow(button) {
   
//     let row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

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
//         newRow.innerHTML = `<td>${eeId}</td><td>${eeName}</td><td>${eeHours}</td><td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>`;
//     } else if (action === 'total') {
//         let totalHours = 0;
//         let rows = document.getElementById("result-table").getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//         for (let i = 0; i < rows.length; i++) {
//             totalHours += parseInt(rows[i].getElementsByTagName('td')[2].innerText);
//         }
//         document.getElementById("TotalHours").value = totalHours;
//     }
// }

// function removeRow(button) {
//     let row = button.closest('tr');
//     row.parentNode.removeChild(row);
// }

// MY CODE STARTS HERE

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
    let rowIndex = row.rowIndex;
    document.getElementById("result-table").editRow(rowIndex);
}



// MY CODE ENDS HERE


//COACH JES'S CODE STARTS HERE

// let EmpHours = [];

// document.getElementById("btnLog").addEventListener('click', function() {
//     let EmpId = document.getElementById("txtEmpId").value;
//     let EmpName = document.getElementById("txtEmpName").value;
//     let EmpHrs = document.getElementById("txtEmpHrs").value;

//     EmpHours.push([EmpId, EmpName, EmpHrs]);

//     DrawTable();
// });

// function DrawTable() {
//     let TableBody = "";
//     let Total = 0;
//     for(let x = 0; x < EmpHours.length; x++) {
//         TableBody += "<tr>";
//         TableBody += "<td>"+ EmpHours[x][0]+"</td>";
//         TableBody += "<td>"+ EmpHours[x][1]+"</td>";
//         TableBody += "<td>"+ EmpHours[x][2]+"</td>";
//         TableBody += "<td><button class='btn btn-danger btn-sm' onclick='remove("+x+");'>Remove</buton></td>";
//         TableBody += "</tr>";

//         Total += parseFloat(EmpHours[x][2]);
//     }

//     document.getElementById("p-total").innerText = Total;
//     document.getElementById("tableBody").innerHTML = TableBody;
// }

// function remove(index) {
//     EmpHours.splice(index, 1);
//     DrawTable();
// }

//COACH JES'S CODE STARTS HERE



// MY CODE STARTS HERE

// let EmpHours = [];

// document.getElementById("log").addEventListener('click', function () {
//     let EEId = document.getElementById("txtEEID").value;
//     let EEName = document.getElementById("txtEEName").value;
//     let EEHours = document.getElementById("txtEEHours").value;

//     EmpHours.push([EEId, EEName, EEHours]);
//     DrawTable();
// });

// function DrawTable() {
//     let TableBody = "";
//     let Total = 0;
//     for(let x = 0; x < EmpHours.length; x++) {
//         TableBody += "<tr>";
//         TableBody += "<td>"+ EmpHours[x][0]+"</td>";
//         TableBody += "<td>"+ EmpHours[x][1]+"</td>";
//         TableBody += "<td>"+ EmpHours[x][2]+"</td>";
//         TableBody += "<td><button class='btn btn-danger btn-sm' onclick='remove("+x+");'>Remove</buton></td>";
//         TableBody += "</tr>";

//         Total += parseFloat(EmpHours[x][2]);
//     }

//     document.getElementById("total").innerText = Total;
//     document.getElementById("tableBody").innerHTML = TableBody;
// }

// function remove(index) {
//     EmpHours.splice(index, 1);
//     DrawTable();
// }

// MY CODE ENDS HERE