

//create a new request object
let myRequest = new XMLHttpRequest();


function XHRFail() {
	console.log("An error occured while transferring the data")
};

function Loaded() {
	console.log("event.target", event.target)
	var data = JSON.parse(event.target.responseText);
	outputSongs(data.songs);
}

//setup event listeners for completed request and aborted request
myRequest.addEventListener("load", Loaded);
myRequest.addEventListener("error", XHRFail);


//Tell which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
myRequest.open("GET", "songs.json");

//Get request
myRequest.send();


//DOM manipulation stuff
function outputSongs(songsArray) {
	let songList = document.getElementById("songList");
	songsArray.forEach( function(song) {
		songList.innerHTML += `<div class="songInfo">
				<h3>${song.title}</h3>
				<ul>
					<li>${song.artist}</li>
					<li>${song.album}</li>
					<li>${song.genre}</li>
				</ul>
				<button class="delete">Delete</button>
			</div>`;
	}); 
					let songRow = document.getElementsByClassName("songInfo");
					//Add delete button to each row and, when it is clicked, delete the entire row in the DOM
					let deleteBtn = document.getElementsByClassName("delete");
					deleteBtn[0].addEventListener("click", function() {
						songRow[0].remove();
					});
					deleteBtn[1].addEventListener("click", function() {
						songRow[1].remove();
					});
					deleteBtn[2].addEventListener("click", function() {
						songRow[2].remove();
					});
}


