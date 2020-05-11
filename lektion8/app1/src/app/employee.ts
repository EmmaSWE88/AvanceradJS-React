import {v4 as uuidv4} from 'uuid'

export class Employee {
    public Id: string
    public FirstName: string
    public LastName: string
    public Email: string

    constructor(firstName:string, lastName:string, email:string) {
        this.Id = uuidv4()
        this.FirstName = firstName
        this.LastName = lastName
        this.Email = email
    }

    FullName() { return `${this.FirstName} ${this.LastName}` }
}