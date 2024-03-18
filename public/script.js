

  //  Sticky Navbar

	window.addEventListener('scroll', function() {
		let header = document.querySelector('header');
		header.classList.toggle('sticky', window.scrollY > 0);
	  });





	  //form

	//   const form=document.getElementById("formSection");

	//   form.addEventListener("submit", function (event){

	// 

	// 	event.preventDefault();

	// 	const nameValue=document.getElementsByClassName("name").value;
	// 	const emailValue=document.getElementsByClassName("email").value;
	// 	const selectValue=document.getElementsByClassName("selecting").value;
	// 	const massegeValue=document.getElementsByClassName("message").value;

	// 	if (nameValue==""||emailValue==""||massegeValue==""||selectValue==""){
	// 	    alert("please fill this form properly");
	// 		return;
	// 	};

		
	// 	function validateEmail(emailValue) {
	// 		// Regular expression for validating an email address
	// 		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// 		return re.test(emailValue);
	
	// 	};


	// 	console.log(nameValue);
	// 	console/log(emailValue);
	// 	console.log(selectValue);
	// 	console.log(massegeValue);
		
	//   });





	  //check

	//   function isEvenOrOdd(number) {
	// 	if (number % 2 === 0) {
	// 		return 'Even';
	// 	} else {
	// 		return 'Odd';
	// 	}
	// }
	
	// // Example usage:
	// var result = isEvenOrOdd(7);
	// console.log(result); // Output: Odd
	



  
	const form=document.getElementById("formSection").value;


		function validation(){
			const nameValue = document.getElementById('name').value;
			
	const emailValue = document.getElementById('email').value;
	const selectValue = document.getElementById('select').value;
	const messageValue = document.getElementById('message').value;

			 	if ( nameValue ==""||emailValue==""||messageValue==""||selectValue==""){
		    alert("please fill this form properly");
			return;
		};

console.log(nameValue);
console.log(emailValue);
console.log(selectValue);
console.log(messageValue);
		};


		function validateEmail(emailValue) {
			// 		 Regular expression for validating an email address
					 const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					 return re.test(emailValue);
			
				 };
		
    	