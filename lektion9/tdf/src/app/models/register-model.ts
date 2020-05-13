import { AddressModel } from './address-model'

export class RegisterModel {
    public Id: string
    public FirstName: string
    public LastName: string
    public Email: string
    public Password: string
    public Hobby: string
    public PreferredLanguage: string
    public Accepted: boolean
    public Address: AddressModel
}
