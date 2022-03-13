/*
     Author : Sahir Xd 
     github : https://github.com/SahirXD

*/

function selectQuery(query){
	return document.querySelector(query)
}

function redirect(destination){
	window.location.href = destination
}

export{
	selectQuery,
	redirect
}