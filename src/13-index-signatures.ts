{
  type ToDo = {
    title: string;
    description: string;
  }

  const todo: ToDo = {
    title: 'Learn TypeScript',
    description: 'Study TypeScript'
  }
} 

{
  type ToDo = {
    title: string;
    description: string;
  }

  const todo: ToDo = {
    title: 'Learn TypeScript',
    description: 'Study TypeScript',
  }

  type ToDoDict = {
    title: string;
    description: string;
    labels: {
      [key: string]: boolean; //Index signature
    }
  }

  const todo2: ToDoDict = {
    title: 'Learn TypeScript',
    description: 'Study TypeScript',
    labels: {
      typescript: true,
      javascript: true,
      nodejs: false,
    }
  }


}