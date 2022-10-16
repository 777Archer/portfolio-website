console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}
else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; ++i){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('You chose', mode, 'as your web page color.')
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}
	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'bluepage.css'
	}
	if(mode == 'green'){
		document.getElementById('theme-style').href = 'greenpage.css'
	}
	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purplepage.css'
	}

	localStorage.setItem('theme', mode)
}



const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();
  form.reset(); // RESET FORM

  const { name, email, message } = event.target;

	// Use your API endpoint URL you copied from the previous step
  const endpoint =
    "https://5ybszuq60i.execute-api.us-east-1.amazonaws.com/default/email-contact-lambda-function";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
	const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      document.getElementById("result-text").innerText =
        "Email sent successfully!";
    })
    .catch((error) => {
      document.getElementById("result-text").innerText =
        "An unkown error occured.";
    });
});



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*//Original JavaScript Code bellow
console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}
else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; ++i){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('You chose', mode, 'as your web page color.')
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}
	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'bluepage.css'
	}
	if(mode == 'green'){
		document.getElementById('theme-style').href = 'greenpage.css'
	}
	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purplepage.css'
	}

	localStorage.setItem('theme', mode)
}


const form = document.querySelector('form')
form.addEventListener('submit', event => {
  // prevent the form submit from refreshing the page
  event.preventDefault()
 
  const { name, email, message } = event.target
  console.log('Name: ', name.value)
  console.log('email: ', email.value)
  console.log('Message: ', message.value)
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/