// alert('Hello world!');
var someNumber = 123; //int - integer
console.log(someNumber);
var somePi = 3.14; //float
var SomeText = 'da jebkāda garuma <a href="kkāds links">' + someNumber + '</a>'; //string - labākais variants
var SomeText2 = "Da jebkāda garuma <a href= /"/"</a>"; //string - dīvains variants
var SomeText3 = 'Dajebkāds texts '; //string

var someTrue = false; //bool
var someNothing = null; //null
var someNothing2;

var someCars = ['vaz', 'gaz', 'zaz', 'kebab', 'maz', 'bmw', 123, false, null, 3.14];
console.log(someCars[2]);
someCars[4] = 'Foo';
someCars.push('Bar');
console.log(someCars);

var person = {
    name: 'Jane',
    surname: 'Kebab',
    age: 21,
    'middle-name': 'bobby', 
};

console.log(person.surname);
console.log(person['middle-name']);

var people = [
    {
        name: 'Jane',
        surname: 'Kebab',
        age: 21,
    },
    {
        name: 'John',
        surname: 'Kebab',
        age: 22,
    },
];

var bar = 'name';
console.log(people[1].name); // same variants
console.log(people[1]['name']); // same variants
console.log(people[1][bar]); //same variants

// +   -   *    /   %  - varianti matemātiskā darbībām

//<   >    <=    >=    ==    != 

//===   !==

//1 == 1    - true
//2 == 1    - false
// 2 == '2'   - true
// 2 == 'a2'   - false
// 1 == false    - false
// 'asd' == true   - true
//'' == true     - false
// 0 == true    - true



//&&     ||     AND OR
var num1 = 123;
if(1 == 1) {
    console.log(321);
} else if(num2  == 3){
    
} else {

}

var num3 = 3;
switch (num3) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    
    default:
        console.log('nothing');
        break;
}

// while (false) {
//     console.log(1);
// }

// do {
//     console.log(1);
// }// while(false);



// for (var i = 0; 1 < 10; i++){
//     console.log(i);
// }

// var j = 0;
// console.log(j);
// j++;

var cars2 = ['vaz', 'zaz', 'gaz','uaz'];
console.log('----------------------');
for(var a in cars2) {
    console.log(a);
}

console.log('-----------------------------');
for(var b of cars2) {
    console.log(b);
}

console.log('-----------------------------');

console.log(parseInt('123'));
console.log(parseInt('11aa'));
console.log(parseInt('aa22'));
console.log(parseInt('11aa11'));
console.log(parseFloat('3.14'));


console.log(Math.PI);
console.log(Math.floor(1.1));
console.log(Math.round(1.1));
console.log(Math.ceil(1.1));

var now = new Date();
console.log(now);

var bar = 123;

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(1, 2));
console.log(bar);

// 0  - 50
// ja skaitlis bez atlikma dalās ar 2  -> 'fizz'
// ja skaitlis bez atlikma dalās ar 2  -> 'fizz'
// ja skaitlis bez atlikma dalās ar 2 un 3-> 'fizz bazz'
// ja ne ar vienu -> izvada skaitli

console.log('===============================');
var kebabs = 0;
for ( var i = 0; i <= 50; i++) {
    console.log(i);   

    if (50 / 2 && 50 / 3) {
        console.log('fizz bazz');
        
    }
     if (50 / 2) {
        console.log('fizz');
    }
     if (50 / 3){
    console.log('bazz');
    }

}


// function palindrome(str){
//     var st='';    
//   st=str.replace(/[^a-z]/ig,"").toLowerCase();    
//   var arr=[];    
//   arr=st.split('');    
//   arr=arr.reverse();    
//   var strr='';    
//   strr=arr.join('');
//   if(strr==st) {
//      return true;
//  }
//  return false;
// }
// console.log(palindrome('Ann a'), palindrome('Peteris')); ////Google variants kopa ar viktoriju

function isPalindrom(word) {
    word = word.toUpperCase();
    word.replace( / /g, '');
    var reverse = word.split('').reverse().join('');

    return word == reverse;
}

console.log(isPalindrom('a n n a'));
console.log(isPalindrom('foo'));


