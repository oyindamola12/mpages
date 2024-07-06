document.addEventListener('DOMContentLoaded', () => {
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const searchInput = document.getElementById('search');

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/datalist');
            const users = await response.json();

            users.forEach(user => {
                const row = userTable.insertRow();
                row.insertCell(0).textContent = user.businessName;
                row.insertCell(1).textContent = user.industry;
                row.insertCell(2).textContent = user.email;
                row.insertCell(3).textContent = user.phoneNumber;
                row.insertCell(4).textContent = user.businessAddress;
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = userTable.getElementsByTagName('tr');

        Array.from(rows).forEach(row => {
            const industry = row.cells[1].textContent.toLowerCase();
            const businessAddress = row.cells[4].textContent.toLowerCase();
            if (industry.includes(filter) || businessAddress.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    fetchData();
});
