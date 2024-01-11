document.write("60. to create a new string without the first and last characters of a given string."+"<br>");
function test60(str){
    return str.substring(1,str.length-1);
}
document.write("The string :sanjeev , Ans :"+test60("sanjeev")+"<br><br>");