function classement() {
    const table = document.getElementById('rankingTable');
    const rows = Array.from(table.rows).slice(1); // Get all rows except the header
    const dateIndex = 3; // Date is the 4th column (index 3)

    // Sorting logic based on the date in descending order
    rows.sort((a, b) => {
      const dateA = new Date(a.cells[dateIndex].textContent);
      const dateB = new Date(b.cells[dateIndex].textContent);
      return dateB - dateA; // Sorting in descending order (newest first)
    });

    // Re-append sorted rows to the table
    rows.forEach(row => table.appendChild(row));
  }

  // Call the sort function when the page loads
  window.onload = classement;
  
