// import { AddressModel } from './address-model'

export class RegisterModel {
    public Id: string
    public FirstName: string
    public LastName: string
    public Email: string
    public Password: string
    public Hobby: string
    public PreferredLanguages: string
    public Accepted: boolean
    public AddressLine: string
    public PostalCode: string
    public City: string

    constructor(firstname:string = '', lastname:string = '', email:string = '', password:string = '', hobby:string = '', preferredlanguages:string = '', accepted:boolean = false, addressline:string = '', postalcode:string = '', city:string = '') {
        this.FirstName = firstname
        this.LastName = lastname
        this.Email = email
        this.Password = password
        this.Hobby = hobby
        this.PreferredLanguages = preferredlanguages
        this.Accepted = accepted
        this.AddressLine = addressline
        this.PostalCode = postalcode
        this.City = city
    }
}
