import "./styles.css";

function addDropdownListeners() {
	let dropdownButtons = document.getElementsByClassName("dropdown-button");
	for (let button of dropdownButtons) {
		button.addEventListener("click", function () {
			this.classList.toggle("active");
		});
	}
}

addDropdownListeners();
