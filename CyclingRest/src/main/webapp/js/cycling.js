window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
	getEvents();
});

function init() {
	//document.cycleForm.submit.addEventListener('click', function(event) {
	var sub = document.getElementById('submitButton');
	sub.addEventListener('click', function(event) {
		event.preventDefault();

		var time = document.cycleForm.time.value;
		var date = document.cycleForm.date.value;
		var distance = document.cycleForm.distance.value;

		var cycleObj = {
			"time" : time,
			"date" : date,
			"distance" : distance
		}
		createEvent(cycleObj);
	})
	
	var edit = document.getElementById('editButton');
	edit.addEventListener('click', function(event) {
		event.preventDefault();
		
		var id = document.cycleForm.id.value;
		var time = document.cycleForm.time.value;
		var date = document.cycleForm.date.value;
		var distance = document.cycleForm.distance.value;
		
		var cycleObj = {
				'id' : id,
				'time' : time,
				'date' : date,
				'distance' : distance
		}
		updateEvent(cycleObj);
	});
	
	var del = document.getElementById('deleteButton');
	del.addEventListener('click', function(event) {
		event.preventDefault();
		
		var id = document.cycleForm.id.value;
		var time = document.cycleForm.time.value;
		var date = document.cycleForm.date.value;
		var distance = document.cycleForm.distance.value;
		
		var cycleObj = {
				'id' : id,
				'time' : time,
				'date' : date,
				'distance' : distance
		}
		deleteEvent(cycleObj);
		
	});
	
}

function deleteEvent(cycleObj) {
	var xhr = new XMLHttpRequest();
	var id = cycleObj.id;
	xhr.open('DELETE', 'api/rides/' + id, true);
	
	xhr.setRequestHeader('Content-type', 'application/json');
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 202) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				console.log(data);
			} else {
				console.log("DELETE request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	
	xhr.send(null);
	cycleForm.reset();
	window.location.reload();
	
	getEvents();
}

function updateEvent(cycleObj) {
	var xhr = new XMLHttpRequest();
	var id = cycleObj.id;
	xhr.open('PATCH', 'api/rides/' + id, true);
	
	xhr.setRequestHeader('Content-type', 'application/json');
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 202) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				console.log(data);
			} else {
				console.log("PATCH request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	
	var newObj = {
			'time' : cycleObj.time,
			'date' : cycleObj.date,
			'distance' : cycleObj.distance
	}
	
	var jsonObject = JSON.stringify(newObj);
	
	xhr.send(jsonObject);
	cycleForm.reset();
	window.location.reload();
	
	getEvents();
}

function createEvent(cycleObj) {
	var xhr = new XMLHttpRequest();

	xhr.open('POST', 'api/rides/', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON
																// request body
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				console.log(data);
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var jsonObject = JSON.stringify(cycleObj); // Convert JS object to JSON
												// string

	xhr.send(jsonObject);
	cycleForm.reset();
	window.location.reload();

	getEvents();
}

function getEvents() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/rides/', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200 && xhr.responseText !== '') {
				var data = JSON.parse(xhr.responseText);
				displayEvents(data);
			} else {
				// var filmData = document.getElementById('filmData');
				// filmData.textContent = 'Film Not Found';
			}
		}
	}
	xhr.send(null);
}

function displayEvents(data) {

	var eventDiv = document.getElementById('eventDiv');
	eventDiv.innerHTML = '';

	var table = document.createElement('table');
	table.align = 'center';
	var headTr = document.createElement('tr');

	var headThId = document.createElement('th');
	headThId.style = "padding-right: 60px";
	headThId.style.display = 'none';
	var headThTime = document.createElement('th');
	headThTime.style = "padding-right: 60px";
	var headThDate = document.createElement('th');
	headThDate.style = "padding-right: 60px";
	var headThDistance = document.createElement('th');

	headThId.textContent = "Id";
	headThTime.textContent = "Time";
	headThDate.textContent = "Date";
	headThDistance.textContent = "Distance";

	headTr.appendChild(headThId);
	headTr.appendChild(headThTime);
	headTr.appendChild(headThDate);
	headTr.appendChild(headThDistance);

	table.appendChild(headTr);

	for (var i = 0; i < data.length; i++) {
		var dataTr = document.createElement('tr');
		dataTr.style = "margin: 25px";
		
		var dataTdId = document.createElement('td');
		dataTdId.style.display = 'none';
		var dataTdTime = document.createElement('td');
		dataTdTime.style = "margin: 25px";
		var dataTdDate = document.createElement('td');
		var dataTdDistance = document.createElement('td');
		
		var id = data[i].id;
		var time = data[i].time;
		var date = data[i].date;
		var distance = data[i].distance;
		
		dataTdId.textContent = id;
		dataTdTime.textContent = time + " : Hours";
		dataTdDate.textContent = date;
		dataTdDistance.textContent = distance + " : Miles";
		
		dataTr.appendChild(dataTdId);
		dataTr.appendChild(dataTdTime);
		dataTr.appendChild(dataTdDate);
		dataTr.appendChild(dataTdDistance);
		

		table.appendChild(dataTr);
	}

	eventDiv.appendChild(table);
	
	var rows = document.getElementsByTagName('tr');
	
	for (var i = 1; i < rows.length; i++) {
		
		rows[i].addEventListener('click', function(e) {
			var thisTr = e.target.parentElement.children;
			var id = thisTr[0].textContent;
			var time = thisTr[1].textContent.slice(0,-8);
			var date = thisTr[2].textContent;
			var distance = thisTr[3].textContent.slice(0,-8);
			
			singleObj = {
					'id' : id,
					'time' : time,
					'date' : date,
					'distance' : distance
			}
			individualView(singleObj);
		});
	};
	
}

function individualView(singleObj) {
	
	var eventDiv = document.getElementById('eventDiv');
	eventDiv.innerHTML = '';
	
	// Hide Submit Button
	var submitButton = document.getElementById('submitButton');
	submitButton.style.display = 'none';
	
	// Display Edit and Delete Buttons
	var editButton = document.getElementById('editButton');
	var deleteButton = document.getElementById('deleteButton');
	editButton.style.display = 'block';
	deleteButton.style.display = 'block';
	
	var id = document.getElementById('idInput');
	var time = document.getElementById('timeInput');
	var date = document.getElementById('dateInput');
	var distance = document.getElementById('distanceInput');
	//console.log(singleObj);
	id.value = singleObj.id;
	time.value = singleObj.time;
	date.value = singleObj.date;
	distance.value = singleObj.distance;
}
