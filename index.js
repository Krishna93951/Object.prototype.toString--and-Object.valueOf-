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
console.log(S.sToString()); 

function Number(value) {
   this.value = value
}

Number.prototype.valueOf = function() {
    return `Number is 2 and its twice is ${this.value}`
};

var obj = new Number (4)
console.log(obj.valueOf()); 


Number.prototype.valueOf = function() { return customPrimitiveValue; };
console.log(Number.valueOf())

*/
//Array.from(keys)
const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.keys()));

//Array.from(values)
const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));


//Array.from() using arrow as Map function
console.log(Array.from({length: 5}, (v, i) => i));
