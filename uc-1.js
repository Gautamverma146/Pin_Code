function validatePin(pincode){
    let regex = /^[1-9][0-9]{5}$/;
    return regex.test(pincode);
}

console.log("Validating pincode " + validatePin(400088));