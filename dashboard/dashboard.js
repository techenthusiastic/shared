const sideNavBar = document.getElementById("sideNavBar");
function toggleSideBar(event) {
	const ele = event.target;
	console.log(ele.getAttribute("data-isOpen"));
	let src = "";
	if (ele.getAttribute("data-isOpen") === "true") {
		sideNavBar.style.width = "0";
		ele.setAttribute("src", "icon/nav-toggle-open.svg");
		ele.setAttribute("data-isOpen", false);
	} else {
		sideNavBar.style.width = "17%";
		ele.setAttribute("src", "icon/nav-toggle-close.svg");
		ele.setAttribute("data-isOpen", true);
	}
}
