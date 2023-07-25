function processData(){
    let fullname=document.getElementById("fullname").value;
    let address=document.getElementById("address").value;
    let postalcode=document.getElementById("postalcode").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let pickupdate=document.getElementById("pickupdate").value;
    
    // alert("Name: " +fullname+ "\nAddress: " +address+ "\nPostal Code: "+ postalcode+ "\nPhone: "+phone+ "\nEmail: " +email+ "\nPickup Date: "+pickupdate+".");
    displaydetails(fullname, address, postalcode, phone, email, pickupdate);
}

function displaydetails(fn, add, pc, ph, email, pickd){
    document.getElementById("cxfullname").innerHTML = fn;
    document.getElementById("cxaddress").innerHTML = add;
    document.getElementById("cxpostalcode").innerHTML = pc;
    document.getElementById("cxphone").innerHTML = ph;
    document.getElementById("cxemail").innerHTML = email;
    document.getElementById("cxpickupdate").innerHTML = ("Date you selected for pickup - " + pickd);

    document.getElementById("outputform").style.visibility = "visible";
    document.getElementById("foodhampers").style.visibility = "visible";

}

function resetform() {
    document.getElementById("outputform").style.visibility = "hidden";
    document.getElementById("foodhampers").style.visibility = "hidden";
    document.getElementById("receipt").style.visibility = "hidden";
}

function submitorder() {
    const vegRate = 30;
    const fruitRate = 20;
    const chickenRate = 7;
    const porkRate = 5;

    let veghamper = parseFloat(document.getElementById("veg").value);
    let fruithamper = parseFloat(document.getElementById("fruit").value);
    let chicken = parseFloat(document.getElementById("chicken").value);
    let pork = parseFloat(document.getElementById("pork").value);

    let total = 0;
    var output ="";
    if(veghamper>0){
        total+=(vegRate*veghamper);
        output+=("<tr><td>Vegetable Hamper</td><td>"+veghamper+"</td>");
    }
    if(fruithamper>0){
        total+=(fruitRate*fruithamper);
        output+=("<tr><td>Fruit Hamper</td><td>"+fruithamper+"</td>");
    }
    if(chicken>0){
        total+=(chickenRate*chicken);
        output+=("<tr><td>Fresh Chickens</td><td>"+chicken+"</td>");
    }
    if(pork>0){
        total+=(porkRate*pork);
        output+=("<tr><td>Pork</td><td>"+pork+"</td>")
    }

    if(output){
        document.getElementById("receipt-table").innerHTML = output;
    }
    document.getElementById("totalbill").innerHTML = ("$"+total);

    document.getElementById("receipt").style.visibility = "visible";
}

