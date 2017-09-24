export class Animal {
   date : Date = new Date();
   month: number = this.date.getMonth() + 1;
   day: number = this.date.getDate();
   year: number = this.date.getFullYear();
  public entryDate : string = this.month+"."+this.day+"."+this.year;
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public numCare: string, public sex: string, public likes: string, public dislikes:string) {};
}
