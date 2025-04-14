
function FilterkeyWord2() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search_input2");
    filter = input.value.toLowerCase();
    table = document.getElementById("menu_item_table");
    tr = document.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
      // change index to change your column search

        if (td) {
            if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}