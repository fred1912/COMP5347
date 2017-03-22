function fi(){
		var myselect = document.getElementById("Genre");
		var index = myselect.selectedIndex;
		var genre1 = myselect.options[index].text;
		
		var genre = document.getElementsByName("genre");
		
		if (myselect.options[index].value=="0") {
			for (var i=0;i<genre.length;i++){
			
					genre[i].parentNode.style.display="";
					genre[i].parentNode.bgColor="#FAFCFF";
			
			}
			return;
		}
		for (var i=0;i<genre.length;i++){
			if (genre[i].outerText!=genre1)
			{genre[i].parentNode.style.display="none";}else{
				genre[i].parentNode.style.display="";
				genre[i].parentNode.bgColor="#FAFCFF";
			}
		}
		//genre.style.display="hidden";
	}
function deset(){
	var searchText = document.getElementsByName("searchText");
	
	if (searchText[0].value=="search title") searchText[0].value="";
	searchText[0].style.color="black";
}
function Redo(){
	var searchText = document.getElementsByName("searchText");
	
	if (searchText[0].value=="") searchText[0].value="search title";
	searchText[0].style.color="grey";
}
function search(){
	var searchText = document.getElementsByName("searchText");
	var title = document.getElementsByName("title");
	for (var i=0;i<title.length;i++){
			if (title[i].outerText.indexOf(searchText[0].value)>=0)
				if (title[i].parentNode.style.display=="")
					{title[i].parentNode.bgColor="green";}
		}
}