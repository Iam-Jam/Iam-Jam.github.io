const doctors = []; // Array to store the JSON data

// Function to display data in the table
function displayData(page) {
  const tbody = document.getElementById('doctorTableBody');
  tbody.innerHTML = ''; // Clear previous data

  const perPage = 15;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  for (let i = startIndex; i < endIndex && i < doctors.length; i++) {
    const doctor = doctors[i];
    const row = `
      <tr>
        <td>${doctor.id}</td>
        <td>${doctor.title}</td>
        <td>${doctor.firstname}</td>
        <td>${doctor.lastname}</td>
        <td>${doctor.practice_name}</td>
        <td>${doctor.contact_number}</td>
        <td>${doctor.email}</td>
        <td>${doctor.city}</td>
        <td>${doctor.state}</td>
        <td>${doctor.visit_type}</td>
        <td>${doctor.insurance_carrier}</td>
        <td>${doctor.insurance_plan}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  }
}

// Function to generate pagination options
function generatePaginationOptions() {
  const select = document.getElementById('pagination');
  select.innerHTML = '';

  for (let i = 1; i <= Math.ceil(doctors.length / 15); i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }
}

// Function to handle search
function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredDoctors = doctors.filter(doctor => {
    return doctor.firstname.toLowerCase().includes(searchTerm) || doctor.lastname.toLowerCase().includes(searchTerm);
  });

  displayData(1); // Display filtered data on page 1
  generatePaginationOptions(); // Update pagination options
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', handleSearch);

// Event listener for refresh button
document.getElementById('refreshBtn').addEventListener('click', () => {
  displayData(1); // Display initial data on page 1
  generatePaginationOptions(); // Generate pagination options
  document.getElementById('searchInput').value = ''; // Clear search input
});

// Event listener for pagination select
document.getElementById('pagination').addEventListener('change', (event) => {
  const page = parseInt(event.target.value);
  displayData(page);
});

// Fetch JSON data and populate doctors array
fetch('json.json')
  .then(response => response.json())
  .then(data => {
    doctors.push(...data.data);
    displayData(1); // Display initial data on page 1
    generatePaginationOptions(); // Generate pagination options
  })
  .catch(error => console.error('Error fetching data:', error));
