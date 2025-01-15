class Todo {
    text: string;
    id: string;
    isCompleted: boolean;
    onToggle: (id:string,isCompleted:boolean)=> void;
    deleteTask: (id:string)=> void;
    constructor(text:string) {
        this.text = text;
        this.id = new Date().toISOString();
        this.isCompleted = false;
    }
}

export default Todo;