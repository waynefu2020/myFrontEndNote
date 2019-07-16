// this is a note for js
/* 
tips: this is a mutiple line 
this is a note for mutiple line */
var mySaying = "don\'t ask";
var height = "about 5'10\" tall ";

alert(mySaying);
alert(height);

var beatles = Array();
beatles[0] = "John";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";

var beatles = Array("John", "Paul", "George", "Ringo");
var beatles = ["John", "Paul", "George", "Ringo"];
var years = [2014, 2015, 2016, 2017];
var abc = [2014, "John", true];

/*创建对象*/

var lennon = Object();
lennon.name = "John";
lennon.year = "1944";
lennon.living = false;

/*更简洁的创建对象方法 */
var lennon = { name:"John", year:"1944", living:false };

var beatles = Array();
beatles[0] = lennon;

beatles[0].name


