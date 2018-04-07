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
