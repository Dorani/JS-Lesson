//------------------------------------------------
//Functions returning a function
//A function that creates different interview questions for specific jobs

//For each job, we return a function that returns a string, using a person's name as an input


function interviewQuestion(job){//accepts a string which is a job
  if (job === 'designer') {//if the job is designer
    return function(name){//return an annomous function, pass in name parameter
      console.log(name + ', can you please explain what UX is?');
    }
  } else if (job === 'teacher'){//another job
    return function(name){//again return an annomous function which accepts name
      console.log('what subject do you teach' + ' ' + name + ' ?');
    }
  } else {
    return function(name){//return a function
      console.log('hello' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');//create a var and store question always for teacher, make sure you pass in the string teacher
teacherQuestion('john');//calling the var which is a function and pass in the name john since it accepts a name as an input

var designerQuestion = interviewQuestion('designer');
designerQuestion('seif');

//interviewQuestion will not just return a value like with other Functions
//instead it returns an entire function we can then use later
//because functions are 1st class functions in JS, they are effectively Objects
//we essentially return an object
