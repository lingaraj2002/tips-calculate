form.addEventListener('submit',function(a){
	a.preventDefault();
		
let form = document.querySelector("#form");
let bill = document.querySelector("#bill-amount").value;
let tips = document.querySelector("#tips").value;
let tipamt = document.querySelector("#tips-amount").value;
let total = document.querySelector("#total").value;
let display = document.querySelector(".dis");
	
	let tipsamount = tips/100*bill;
	
	let totalamount = parseInt(bill) + tipsamount;	
	document.querySelector("#tips-amount").value = tipsamount;
	document.querySelector("#total").value = totalamount;
	display.style.display="block";
});
