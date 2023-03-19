
//VO
export default class Address {

    _street: string;
    _number: number;
    _city: string;
    _zipCode: string;


    constructor(street: string, number: number, city: string, zipCode: string, country: string) {
        this._street = street;
        this._number = number;
        this._city = city;
        this._zipCode = zipCode;

        this.validate()
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is Required")
        }

        if (this._number === 0 || this._number === undefined) {
            throw new Error("Number is Required")
        }

        if (this._city.length === 0) {
            throw new Error("City is Required")
        }

        if (this._zipCode.length === 0) {
            throw new Error("ZipCode is Required")
        }


    }

    changeStreet(street: string) {
        this._street = street;
        this.validate();
    }

    changeNumber(number: number) {
        this._number = number;
        this.validate();
    }

    changeCity(city: string) {
        this._city = city;
        this.validate();
    }

    changeZipCode(zipCode: string) {
        this._zipCode = zipCode;
        this.validate();
    }


}