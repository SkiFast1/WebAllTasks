$(document).ready(function(){
    $("p").css("fontSize","40px");
    $("#el1").css("color","green");
    $("#ya").css("color","red");
    $("#go").css("color","yellow");
    $("button").prop("disabled", true);
    $("a").prepend("↗");
    $("a").attr("target","_blank")
    $("#lb1").css("postion","absolute");
    $("#lb1").css("top","80%");
});

$("#btn1").click(function(){
    $("#tst1").fadeIn(100,50);
});

function reload(){
     $("#pg").load("https://inxaoc.github.io/example/ajax-1.html");   
}

function disa()
{
    let but = document.getElementsByTagName('button')[0];
    but.disabled = true;
}

function createTable() {
	let height = 5;
	let width = 2;
	document.getElementById('tab').innerHTML += '<table id="table"><tbody id="tbody"></tbody></table>';
	for (let i = 0; i < height; i++){
		document.getElementById('tbody').innerHTML += '<tr></tr>';
		for (let j = 0; j < width; j++){
            if (i == 0 && j == 0) {
                document.getElementById('tbody').children[i].innerHTML += '<td><form>Text<form></td>';
            } else if (i == 0 && j == 1){
                document.getElementById('tbody').children[i].innerHTML += '<td><form>Effect/Animation<form></td>';
            } else if (j == 0) {
			document.getElementById('tbody').children[i].innerHTML += '<td><h2 id="tst'+i+'">Test'+i+'</h2></td>';
            } else {
                document.getElementById('tbody').children[i].innerHTML += '<td><form><input id="btn'+i+'" type="button" value="Effect'+i+'" onclick="magick('+i+')"></input><form></td>';
            }
		}
        $("#tst3").fadeOut("slow");
        $("#tst4").slideUp("slow");
	}

    document.getElementById('func').removeChild(document.getElementById('form'));
	for (let k = 0; k < 5; k++){
		document.getElementById('func').innerHTML += '<div class="funcs"></div>';
	}
	localStorage.setItem('height', height);
	localStorage.setItem('width', width);
}

function saveText(row, column) {
	let cell = document.getElementById('tbody').children[row].children[column];
	let mustRemove = cell.children[0];
	let savedText = mustRemove.children[0].value;
	cell.removeChild(mustRemove);
	cell.innerHTML += '<p>' + savedText + '</p>';
}

function JsonParser(data) {
            let output = "";
            $.each(data, function(key, value) {
                output +=  '<li>' + key + ': </li>';
                if ($.isPlainObject(value)) {
                    output += '<ul>' + JsonParser(value) + '</ul>';
                } else if ($.isArray(value)) {
                    output += '<ul>';
                    $.each(value, function(index, value) {
                        output +='<li>' + value + '</li>';
                    })
                    output += '</ul>';
                } else {
                  output += '<ul><li>' + value + '</li></ul>';
                }
            })
    return output;
}

function magick(i) {
        switch (i){
        case 1:
            $("#tst1").fadeOut("slow");
            break;
        case 2:
            $("#tst2").slideToggle("slow");
            break;
        case 3:
            $("#tst3").fadeIn("slow");
            break;
        case 4:
            $("#tst4").slideDown("slow");
            break;
    }
}

function PJson(){
        $.getJSON( "https://inxaoc.github.io/example/ajax.json", function(data) {
        var tmpJSON = data;
        var JSON_Wrapper = $('#jsonWrap');
        JSON_Wrapper.append(JsonParser(tmpJSON));
    });
}
