function generateCalendar() {
	$("#date1").flatpickr({
		enableTime: true,
		dateFormat: "m-d-Y",
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
