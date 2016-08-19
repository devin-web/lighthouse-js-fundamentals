function calcAge( yearBorn, curYear )
{
  return curYear - yearBorn;
}

function outputAges( name, agePostBirthday )
{
  console.log( name + " is " + String( agePostBirthday ) + " or " + String( agePostBirthday - 1 ) + " years old, depending on whether they had their birthday this year yet." );
}

var CalibanBorn = 1995;
var MirandaBorn = 1988;
var FerdinandBorn = 1978;
var currentYear = 2016;

outputAges( "Caliban", calcAge( CalibanBorn, currentYear ) );
outputAges( "Miranda", calcAge( MirandaBorn, currentYear ) );
outputAges( "Ferdinand", calcAge( FerdinandBorn, currentYear ) );