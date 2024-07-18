const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        const searchInput = document.getElementById('searchIndustryInput');
        const locationInput = document.getElementById("inputSuburb");
        const userlength = document.getElementById("userlength");

        document.addEventListener('DOMContentLoaded', () => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://www.mpageshub.com/datalist');
                    const users = await response.json();
                    userlength.textContent = users.length;
                    users.forEach(user => {
                        const row = userTable.insertRow();
                        row.insertCell(0).textContent = user.businessName;
                        row.insertCell(1).textContent = user.industry;
                        row.insertCell(2).textContent = user.email;
                        row.insertCell(3).textContent = user.phoneNo;
                        row.insertCell(4).textContent = user.businessAddress;
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        });

        const filterData = () => {
            const filter = searchInput.textContent.toLowerCase();
            const location = locationInput.value.toLowerCase();
            const rows = userTable.getElementsByTagName('tr');
            Array.from(rows).forEach(row => {
                const industry = row.cells[1].textContent.toLowerCase();
                const businessAddress = row.cells[4].textContent.toLowerCase();
                if (industry.includes(filter) && businessAddress.includes(location)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }