function validatePin(pincode){
    //it will restrict alphabet and speacial character at the beginning

    let regex = /^[1-9][0-9]{5}$/;
    return regex.test(pincode);
}

console.log("Validating pincode " + validatePin("A40088"));//false