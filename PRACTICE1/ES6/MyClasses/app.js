//Classes
//create the object using the class
class Car{
    constructor(name){
        this.brand=name;
    }
}
//create object mycar
mycar=new Car("Felix");
document.write(mycar.brand);


//Methods in classes

class Person{
    constructor(name){
        this.lastname=name;
    }
    walking(){//method walking
        return this.lastname +'walking';

    }
}
    myperson=new Person("Erick");
    document.write(myperson.walking())
    
    

