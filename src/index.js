import { newTodo, updateTodo, retriveTodo } from './todos'

localStorage.clear();
newTodo('good title', 'des', 'due', 'pri', 'note', true, 'proj');
newTodo('second','second','second','second','second',true, 'proj');
newTodo('third', 'third', 'third', 'third', 'third', true, 'new' );
updateTodo('proj+0', 'title', 'bext title');
console.log(retriveTodo('proj+0'))