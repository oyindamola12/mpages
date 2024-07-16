document.addEventListener('DOMContentLoaded', () => {
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const searchInput = document.getElementById('searchIndustryInput');
    const location = document.getElementById("inputSuburb");
    const userlength = document.getElementById("userlength");

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

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.textContent.toLowerCase();
        const rows = userTable.getElementsByTagName('tr');
        const getloc= location.value.toLowerCase().replace(/,/g, '').split(' ');
        Array.from(rows).forEach(row => {
            const industry = row.cells[1].textContent.toLowerCase();
            const businessAddress = row.cells[4].textContent.toLowerCase();
            if (industry.includes(filter) && businessAddress.includes(getloc)) {
                row.style.display = 'block';
            } else {
                row.style.display = 'none';
            }
        });
    });

    fetchData();
});
