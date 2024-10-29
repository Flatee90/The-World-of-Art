function myProcessForm(event) {
    debugger;
    event.preventDefault(); //prevents the page from refreshing
    const form = event.target;
    const emailInput = form[0];
    const telInput = form[1];
    const email = emailInput.value;
    output(`Your passsword is ${email}.<br>`);
}