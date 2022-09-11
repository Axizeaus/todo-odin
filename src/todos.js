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

    // get title(){
    //     return this.title;
    // }

    // set title(newTitle){
    //     this.title = newTitle;
    // }

    // get description(){
    //     return this.description;
    // }

    // set description(newDescription){
    //     this.description = newDescription
    // }

    // get dueDate(){
    //     return this.dueDate;
    // }

    // set dueDate(newDueDate){
    //     this.dueDate = newDueDate;
    // }

    // get priority(){
    //     return this.priority;
    // }

    // set priority(newPriority){
    //     this.priority = newPriority
    // }

    // get note(){
    //     return this.note;
    // }

    // set note(newNote){
    //     this.note = newNote
    // }

    // get check(){
    //     return this.check;
    // }

    // set check(newCheck){
    //     this.check = newCheck
    // }

    // get project(){
    //     return this.project
    // } 

    // set project(newProject){
    //     this.project = newProject
    // }
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
    addTodo(obj);
}

