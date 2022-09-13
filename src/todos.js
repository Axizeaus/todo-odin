import { addTodo } from "./storage";

class Todo{
    constructor(title, description, dueDate, priority, note, check, project ){
        this.title = title ;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.note = note;
        this.check = check;
        this.project = project;
    }

    get todoTitle(){
        return this.title;
    }

    set todoTitle(newTitle){
        this.title = newTitle;
    }

    get todoDescription(){
        return this.description;
    }

    set todoDescription(newDescription){
        this.description = newDescription;
    }

    get todoDueDate(){
        return this.dueDate;
    }

    set todoDueDate(newDueDate){
        this.dueDate = newDueDate;
    }

    get todoPriority(){
        return this.priority;
    }

    set todoPriority(newPriority){
        this.priority = newPriority;
    }

    get todoNote(){
        return this.note;
    }

    set todoNote(newNote){
        this.note = newNote;
    }

    get todoCheck(){
        return this.check;
    }

    set todoCheck(newCheck){
        this.check = newCheck;
    }

    get todoProject(){
        return this.project
    } 

    set todoProject(newProject){
        this.project = newProject
    }
}

export function newTodo(
    title = 'default', 
    description = 'default', 
    dueDate = 'default', 
    priority = 'default', 
    note = 'default', 
    check = false,
    project = 'default'){
    const obj = new Todo(title, description, dueDate, priority, note, check, project);
    console.log(obj);
    addTodo(obj, project);
}

