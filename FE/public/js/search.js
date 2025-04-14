
    function FilterkeyWord() {
        // Declare variables
        var input, filter, table, tr, td, i;
        input = document.getElementById("search_input");
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
    
    
    
    // All Columns search script
    function FilterkeyWord_all_table() {
    
    // Count td if you want to search on all table instead of specific column
    
    count = $('.wrapper_all .table').children('tbody').children('tr:first-child').children('td').length; 
    
        // Declare variables
        var input, filter, table, tr, td, i;
        input = document.getElementById("search_input_all");
        filter = input.value.toLowerCase();
    
        table = document.getElementById("menu_item_table_all");
        tr = table.getElementsByTagName("tr");
    
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 1; i < tr.length; i++) {
          
          var flag = 0;
          for(j = 0; j < count; j++){
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                var td_text = td.innerHTML;  
                if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                //var td_text = td.innerHTML;  
                //td.innerHTML = 'shaban';
                  flag = 1;
                } else {
                  
                }
              }
            }
          if(flag==1){
                     tr[i].style.display = "";
          }else {
             tr[i].style.display = "none";
          }
        }
    }
