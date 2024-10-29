function myProcessForm(event) {
    debugger;
    event.preventDefault(); //prevents the page from refreshing
    const form = event.target;
    const datetimeInput = form[0];
    const telInput = form[1];
    const emailInput = form[2]
    const nameInput = form[3]

    const date = datetimeInput.value;
    output(`Your phone appointment is ${date}.<br>`);
}