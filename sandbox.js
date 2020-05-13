const names = ['shaun', 'crystal'];  //literal
console.log(names);

// constructor function
const ages = new Array(20,25,30);
console.log(ages);

const userOneName = {};  //literal
const userTwoName = new Object();  //constructor


// not an object, it is a primitive type
// JS wraps it temporarily into a wrapper object and allows properties & methods to be used on it
const name = 'mario';
console.log(name);

const nameThree = new String('ryu'); //string with object wrapper
console.log(nameThree);

const newNumber = new Number(5);
const newBoolean = new Boolean(true);
//etc.


// object literal notation
const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'chun li',
    email: 'chun.li@thenetninja.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userTwo.email, userTwo.username);
userTwo.login();

// class keyword (uses original prototype model)
// no commas
class User {
    constructor(username, email){
        //set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`)
        return this;
    }
}

const user10 = new User('mario', 'mario@thenetninja.co.uk');  //instance of the class
const user11 = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(user10, user11);
user10.login();
user11.login();

user10.logout();
user11.logout();

user10.incScore();
user10.incScore();

user10.login().incScore().incScore().logout();


// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object


// class inheritence or subclasses
class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
    }
}

const user12 = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');
console.log(user12);

let users = [user10, user11, user12];
console.log(users);

user12.deleteUser(user11);
console.log(users);

// constructors (under the hood)
// not really a class, using the prototype model underneath the class veneer

console.log('Array prototype', Array.prototype);







