export default function appointmentTime() {
    var select = document.getElementById("time");

    // Start and end time in 24-hour format
    var startHour = 8;  // 8 AM
    var endHour = 15;   // 3 PM

    // Loop to create time options with 30-minute intervals
    for (var hour = startHour; hour <= endHour; hour++) {
        // Add both "00" and "30" minutes for each hour
        for (var minute = 0; minute < 60; minute += 30) {
            var formattedTime = formatTime(hour, minute);

            // Create the option element
            var option = document.createElement("option");
            option.value = formattedTime;
            option.textContent = formattedTime;

            // Append the option to the select element
            select.appendChild(option);
        }
    }
    var select = document.getElementById("date1");
    select.flatpickr({
      enableTime: false,
      dateFormat: "d-m-Y",
      "disable": [
        function(date) {
           return (date.getDay() === 0 || date.getDay() === 7);  // disable weekends
        }
      ],
      "locale": {
        "firstDayOfWeek": 1 // set start day of week to Monday
      }
    });
}
function formatTime(hour, minute) {
    var hourString = hour < 10 ? '0' + hour : hour.toString();
    var minuteString = minute === 0 ? '00' : '30'; // For 30-minute intervals
    return hourString + ":" + minuteString;
}
