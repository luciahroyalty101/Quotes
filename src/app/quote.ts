export class Quote {
    id:number;
    author:string;
    state:string;
    user:string;
    day:Date;
    upvotes:number;
    downvotes:number;
    constructor(id:number, author:string,state:string,user:string,day:Date){
        this.id=id,
        this.author=author,
        this.state=state,
        this.user=user,
        this.day=day,
        this.upvotes=0,
        this.downvotes=0;

    }

}
