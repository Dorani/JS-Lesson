# JS-Lesson-1

  - JS is a lightweight (doesn't use much memory from computer), cross platform, object oriented computer programming language.

  - JS is one of 3 core technologies of web development

  - JS can be used in different places:
      - Client-side: JS was traditionaly only used in the browser
      - Server-side: Thanks to node.js, we can use JS on the server as well.


# What happens to our code?

  - JS is always hosted in some environment, typically a browser. This is where JS runs. Such google chrome, Firefox etc...

  - When we write our JS code and run it, behind the scenes:
      - Host where our JS code lives has a JS engine, that takes our code and executes it.

  - 1st thing that happens:
      - Our code is parsed by a parser (reads our code line by line and checks if the syntax of the code is correct)
      - If we make mistakes, it throws an array and stops the execution
      - If everything is correct, then the parser produces a data stucture known as the "abstract syntax tree":
          - This is then translated into machine code (set of instructions that can be executed directly by computer processor)

          - Only when it is converted, it runs and does the work.


# Execution Context:

  - A container that stores variables, and in which a piece of our code is evaluated and executed

  - The default context is the global context:
      - code that is not inside any function
      - associated with global object
      - in the browser, thats the window object
  - So this means the global execution context is associated with the global object ( which is the window object ) in the browser.
  - They get stacked as our code gets executed


# How is the Execution Context created?

  - When a function is called:
      - a new execution context is put on top of the execution stack.
      - this happens in 2 stages:
          - Creation phase:
              - Creation of the variable object
                - The argument object is created, containing all the arguments that were passed into the function.
                - The code is scanned for function declarations, for each function, a property is created in the variable object, pointing to the function.
              - Creation of the scope chain
              - Determine value of the 'this' variable

          - Execution phase:
              - The code of the function that generated the current execution context is ran line by line
