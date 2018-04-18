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

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('john');

var designerQuestion = interviewQuestion('designer');
designerQuestion('seif');
