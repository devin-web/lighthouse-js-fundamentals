function  loopyLighthouse( range, multiples, words )
{
  for( var i = range[0]; i <= range[1]; i++ )
  {
    var iMod1 = (i % multiples[0] === 0);
    var iMod2 = (i % multiples[1] === 0);
    if( !iMod1 && !iMod2 ){
      console.log(i);
    }
    else {
      var stringOut = "";
      if( iMod1 )
        stringOut += words[0];
      if( iMod2 )
        stringOut += words[1];
      console.log(stringOut);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
