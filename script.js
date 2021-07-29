const login_form = document.getElementById("login-form");
const loginStatus = login_form.querySelector("#loginStatus");
let oldClassName = "alert-danger";
function showLoginStatus(className, msg) {
	const clsList = loginStatus.classList;
	clsList.remove(oldClassName);
	clsList.add(className);
	//
	loginStatus.innerHTML = msg;
	loginStatus.style.display = "block";
	oldClassName = className;
}
const login_auth_URL = "http://localhost:5000/user/login/auth";
//
login_form.addEventListener("submit", async (event) => {
	event.preventDefault();
	showLoginStatus("alert-primary", "Request Initiated - Please wait.....");
	try {
		//
		const formData = new FormData(login_form);
		const formBody = new URLSearchParams(formData).toString();
		const promise = await fetch(login_auth_URL, {
			method: "POST",
			body: formBody,
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
		});
		const resp = await promise.json();
		if (promise.status === 200 && promise.ok === true) {
			showLoginStatus(
				"alert-success",
				"&starf; Login Success - wait till you are redirected."
			);
		} else
			showLoginStatus(
				"alert-danger",
				resp.error ? resp.error.message : "Something went wrong"
			);
	} catch (error) {
		showLoginStatus(
			"alert-danger",
			"&starf; Something went wrong. Connection Lost"
		);
	}
});
