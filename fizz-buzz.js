for(var i=1; i<101; i++)
{
  var iMod3 = (i % 3 === 0);
  var iMod5 = (i % 5 === 0);
  if( !iMod3 && !iMod5 ){
    console.log(i);
  }
  else {
    var stringOut = "";
    if( iMod3 )
      stringOut += "Fizz";
    if( iMod5 )
      stringOut += "Buzz";
    console.log(stringOut);
  }
}