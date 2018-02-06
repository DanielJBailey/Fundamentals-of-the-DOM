
document.addEventListener ('DOMContentLoaded', function () {

    //Create button div to house start button
    let buttonDiv = document.createElement('div');
    document.body.appendChild(buttonDiv);

    //Create start button and append to button div
	let startButton = document.createElement('button');
	startButton.className = 'button';
	startButton.innerText = 'Add Square!';
	buttonDiv.appendChild(startButton);

    //Create framework to append body div's
	let boxFrame = document.createElement('div');
	boxFrame.className = 'box-frame';
	document.body.appendChild(boxFrame);

    //Create credits framework
	let credits = document.createElement('p');
	credits.className = 'credits';
	credits.innerText = 'Created by Daniel J.Bailey for Covalence.io';
	document.body.appendChild(credits);

    //Create Event Listener to create boxes
	startButton.addEventListener ('click', function() {
		let box = document.createElement('div');
		box.className = 'newBox';
		box.id = document.getElementsByClassName('newBox').length;
		let boxText = document.createElement('h1');
		boxText.innerText = box.id;
		boxText.id = 'boxFont';
		box.appendChild(boxText);
		boxFrame.appendChild(box);	

        //Add double click event listener
        box.addEventListener('dblclick', function () {
            if (event.target.id % 2 == 0) {
                alert('This is even!');
            } else {
                alert('This is odd!');
            }            
        });

        //Changing box background color on click 
		box.addEventListener ('click', function() {
			box.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		});

        //Hover effect to show box id #
		box.addEventListener('mouseover', function() {
		    boxText.style.display = 'block';
		});

        //Remove hover effect upon mouse leave to hide box id #
		box.addEventListener('mouseleave',function() {
		    boxText.style.display = 'none';
		});
	});
});