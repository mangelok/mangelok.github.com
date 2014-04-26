var navBar = "<table id='navbar'>	<tr>		<td>			<h2>links</h2>			<a href='index.html'>home</a><br>			<a href='resources/resume.pdf'>resume</a><br>			<a href='mailto:m3knight@uwaterloo.ca'>email</a><br>			<a href='http://www.linkedin.com/in/mangelok'>linkedin</a><br>		</td>		<td id='navbar-separator'></td>		<td>			<h2>projects</h2>			<a href='mydirections.htm'>myDirections</a><br>			<a href='invoicer.htm'>Invoicer</a><br>			<a href='smd.htm'>Super Mario Defense</a><br>			<a href='ml.htm'>Mario LOGO</a><br>		</td>	</tr></table>";

function loadNavBar()
{
	document.getElementById('menu').innerHTML = navBar;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "navbar.html", true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState!==4 || this.status!==200){
			console.log("Response: " + this.readyState + " " + this.status);
			return;
		}
		document.getElementById('menu').innerHTML = this.responseText;	
	}
	try {
		xmlhttp.send();
	} catch (exception){
		console.log("Caught error: " + exception.message);
	}
	
	var path = window.location.pathname;
	var page = path.split("/").pop();
	page = page.substring(0,page.length);
	var navhtml = document.getElementById("menu");
	navhtml.innerHTML = navhtml.innerHTML.replace("href=\""+page,"id=\"thisLink\" href=\"javascript: void(0)");
	console.log(navhtml);
}