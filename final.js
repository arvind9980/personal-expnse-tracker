
function ADD(){
   
var table = document.getElementById("mytable");
var a = document.getElementById("dat").value;
if(a==0){
    alert("Date must be filled");
    return false;
}
var b = document.getElementById("nm").value;
if(b==null||b==""){
  alert("Description must be filled");
  return false;
}

var c = document.getElementById("pr").value;
if(c==null){
  alert("Price must be filled");
  return false;
}
else if(c==0){
    alert("Price can not be Zero");
    return false;
}

  var row = table.insertRow(1);
  row.id="2";
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = a;
  cell2.innerHTML = b;
  cell3.innerHTML = c;
 
}

function edit(){
  const content = document.getElementById("mytable");
const edit = document.getElementById("edit");

edit.addEventListener("click", function() {
  content.contentEditable = true;
} );
}
 function done(){
const content = document.getElementById("mytable");
const done = document.getElementById("done");
done.addEventListener("click", function() {
    content.contentEditable = false;
} )
}




function tot(){

    var table = document.getElementById("mytable")
    sumVal = 0;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
            }
            
        document.getElementById("val").innerHTML = " = " + sumVal;
        console.log(sumVal);

}

