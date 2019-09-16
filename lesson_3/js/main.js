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

var num1 = 123;
if(num1) {
    console.log(321);
} else if(num2  == 3){
    
}

