function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;    
};

var song = new Person("song");
console.log(song.getName()); // song 을 출력

Person.prototype.name ="kim";   
console.log(Person.prototype.getName());  // kim 을 출력