function counter(str) { 
  return str.split(' ').length;
}

let line = "This is NNoV team web-base!"
document.write(line, '<br>');
document.write('Number of symbols: ', line.length, '<br>')
document.write('Number of words: ', counter(line), '<br>');
document.write('URL: ', document.URL, '<br>');
document.write('Protocol: ', document.location.protocol, '<br>');
document.write('File name: ', document.location.pathname.split('.')[0], '<br>');
document.write('Extension: ', document.location.pathname.split('.')[1], '<br>');


let GET_params = window.location.search.replace( '?', '');
document.write('Parameters: ', GET_params, '<br>');

let anch = 'New_Anchor_Again';
document.write('New anchor_1: ', anch.anchor('sup_morn_b'), '<br>');
document.write('New anchor_2: ', anch.anchor('sup_dail_b'), '<br>');
document.write('New anchor_3: ', anch.anchor('sup_vech_b'), '<br>');

document.write('<a href="https://www.hackthebox.eu/home/users/profile/102313" target="_blank" id="SF1_HTB_ID">My HTB profile!</a><br>')
document.write('<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" id="RICK_ROLLED">Is this a meme?</a><br>')

document.write('<img src="norm.jpg" style="width: 30%; height: 50%" id="pic1">')
document.write('<img src="hack8.jpg" style="width: 50%; height: 50%" id="pic2"><br>')

document.write('Number of Anchors: ', document.anchors.length,'<br>');
document.write('Numbers of links: ', document.links.length,'<br>');

document.write('Content of the first Anchor: ', document.anchors[0].innerHTML, '<br>')

document.write('Number of pics: ', document.images.length,'<br>');
document.write("First pic's width: ", document.images[0].width,'<br>');
let max = -1;
for(i=0; i<document.images.length;i++){
    if (document.images[i].width > max) {
        max = document.images[i].width;
    }
}
document.write("Biggest width: ", max,'<br>');
document.write('Sum of widths: ', document.images[0].width + document.images[1].width, '<br>')

for(i=0; i<10; i++){
  document.write('<form id="',i,'">')
  document.write('<input type="button" class="dvosh" value="Sup_Dvach" onClick="alert(\'Form_name\')"></input>')
  document.write('<input type="button" class="dvosh2" value="Number" onClick="alert(',i,')"></input>')
  document.write('<input type="button" class="dvosh2" value="Number of fields" onClick="alert(',document.forms[i].childElementCount+1,')"></input>')
  document.write('</form>')
}
for(i=0; i<10; i+=2){
  document.write(document.forms[i].id, ' ')
}
document.write('<form id="form1"><input type="reset" value="RESET"></input><input type="text" placeholder="Write smth to reset"></input></form>')
document.write('<form id="form2"><input type="button" id="butt"></input><input type="password" placeholder="you_wont_see"> No_Flag_Here! GTFO!</input></form>')
for(i=0; i<10; i++){
    if(i % 2 != 0){
        document.write('<a href="https://codeby.net/resources/?page=',i+1,'">Link',i+1,'</a><br>')
    } else {document.write('<a href="https://codeby.net">General</a><br>')}
}

var refs="";
for(i=0; i<document.links.length; i++){
  refs=refs+document.getElementsByTagName('a')[i].href+',';}
var refnames=[];
for (i = 0; i < document.links.length; i++)
{
if (refnames.includes(document.getElementsByTagName('a')[i].innerHTML) != 1 && (document.getElementsByTagName('a')[i].innerHTML != 'New_Anchor_Again'))
    refnames.push(document.getElementsByTagName('a')[i].innerHTML);
}
/*
let k = 0;
for(i=0; i<document.links.length; i++){
  if(document.getElementsByTagName('a')[i].innerHTML != "General"){
  refnames=refnames+document.getElementsByTagName('a')[i].innerHTML+', ';
} else if(k == 0){
refnames=refnames+document.getElementsByTagName('a')[i].innerHTML+', ';
k+=1;}
}
*/
document.write(' <table border=1, cellpadding=2, cellspacing=0, width="90%">');
for (i = 0; i <= 0; i++){
    document.write("<tr>");
    for (k = 0; k <= 2; k++){
            if (k == 0){
                document.write('<td>');
                document.write(refnames);
                }
            if (k == 1){
                document.write('<td>');
                document.write(document.links.length);
                }
            if (k == 2){
                document.write('<td>');
                document.write(refs);
                }
                document.write("</td>");
        }
        document.write("</tr>");
}
document.write("</table>");
