import React from 'react';
import './App.css';
import Humain from './humain'

class Student extends Humain {
 constructor(){
    super()
    this.name ="imad"
    this.job = "developper"
    this.skills =["js","react","php","SQL"]

}
}
const me = new Student("Nedim", "Musicien", ["guitara", "kajon", "saxophone"]);
console.log (me.getjob("web developper"));

console.log(me);
console.log(me.learnNewSkill("React"));
console.log(me.forgetSkill("Reat"));
console.log(me.leaveJob());

function App() {


    {return (
    <div className="App">

    </div>
  );
}
}
export default App;
