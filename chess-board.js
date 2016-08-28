function chessBoardLine(doesStartWithWhite, length)
{
  var stringToReturn = "";
  var curLength = length;
  var moduloOf2 = 1;
  if( !doesStartWithWhite )
  {
    moduloOf2 = 0;
  }

  for(var i=1; i<=length; i++)
  {
    if(i % 2 === moduloOf2 )
    {
      stringToReturn += " ";
    }
    else
    {
      stringToReturn += "#";
    }
  }
  return stringToReturn;
}

function chessBoard( width, height, whiteAtTopLeft )
{
  var startwithWhite = whiteAtTopLeft;
  for(var i = 1; i< (height+1); i++)
  {
    console.log( chessBoardLine(startwithWhite, width) );

    startwithWhite = !startwithWhite;
  }
}

chessBoard(8, 8, true);
