export class Book {
  name: string;
  date: any;
  title: string;
  constructor(name: string, date: string, title: string) {
    this.name = name;
    this.date = new Date(date);
    this.title = title;
  }
}
