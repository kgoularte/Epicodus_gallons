var convertGAtoL=function(gallons)
{
var lit=gallons*3.785412;
return lit;
};

var getinfo=function()
{
var x=prompt("Enter the Number you want to convert from gallon to Liter");
return x;
};

var  GA=getinfo();
var result=convertGAtoL(GA);
alert (GA + " gallons converted to Liters is " + result + " Liters");
