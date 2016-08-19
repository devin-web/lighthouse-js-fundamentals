for( var i = 100; i < 201; i++ )
{
  var iMod3 = (i % 3 === 0);
  var iMod4 = (i % 5 === 0);
  if( !iMod3 && !iMod4 ){
    console.log(i);
  }
  else {
    var stringOut = "";
    if( iMod3 )
      stringOut += "Loopy";
    if( iMod4 )
      stringOut += "Lighthouse";
    console.log(stringOut);
  }
}