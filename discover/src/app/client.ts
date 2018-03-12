export class Client {
    constructor(
        public firstname: String,
        public lastname: String,
        public member: boolean
    ){}

    public getFullName(): String{
        return `${this.firstname} ${this.lastname}`;
    }
}
