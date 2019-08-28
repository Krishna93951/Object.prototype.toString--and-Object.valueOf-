// Import stylesheets
import './style.css';

// Write Javascript cod
/*function Student (name,USN,branch)
{
  this.name = name;
  this.USN =USN;
  this.branch = branch;
}
const S = new Student('KK','1KS15cs043','CS');
console.log(S.toString());

Student.prototype.toString = function sToString () {
  var r = 'Student' + this.name +'  '+'is of'+'  '+this.USN + '  '+ this.branch ;
  return r;
}
console.log(S.sToString()); */

function Number(n) {
    this.number = n;
}

Number.prototype.valueOf = function() {
    return this.number;
};

var myObj = new Number(4);
console.log(myObj + 'llol'); // 


Number.prototype.valueOf = function() { return customPrimitiveValue; };
console.log(Number.valueOf())