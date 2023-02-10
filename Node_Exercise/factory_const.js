
let address = new Address('a', 'b','c');
console.log(address);

function creatAddress(street, city, zipcode){
    return{
        street,
        city,
        zipcode
    };
}

function Address(street, city, zipcode){
    this.street= street;
    this.city= city;
    this.zipcode=zipcode;
}