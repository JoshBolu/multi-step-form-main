//get all the buttons in the html document you want to manipulate to move through the sub-containers  
const next_button1 = document.querySelector("#next-step1");
const next_button2 = document.querySelector("#next-step2");
const next_button3 = document.querySelector("#next-step3");
const next_button4 = document.querySelector("#next-step4");
const go_back_button2 = document.querySelector("#go-back2");
const go_back_button3 = document.querySelector("#go-back3");
const go_back_button4 = document.querySelector("#go-back4");

//get all sub-container element you'll need to switch between 
const form_container_1 = document.querySelector(".form-container-step1");
const form_container_2 = document.querySelector(".form-container-step2");
const form_container_3 = document.querySelector(".form-container-step3");
const form_container_4 = document.querySelector(".form-container-step4");
const thank_you_container = document.querySelector(".thank-you-container");

const form = document.querySelector('form');//gets the form tag itself

//declare all elements that dsiplays what step of the form the user is at
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const step3 = document.querySelector("#step-3");
const step4 = document.querySelector("#step-4");

//get all input text fields
const name_input = document.querySelector("#name-input");
const email_input = document.querySelector("#email-input");
const phone_no_input = document.querySelector("#phone-no-input");

//get the id of the style to display field is required
const input_error_style1 = document.querySelector("#error-message1");
const input_error_style2 = document.querySelector("#error-message2");
const input_error_style3 = document.querySelector("#error-message3");
const input_error_style4 = document.querySelector("#error-message4");

const add_ons_yearly_price = document.querySelectorAll(".add-ons-yearly-price");
const add_ons_monthly_price = document.querySelectorAll(".add-ons-month-price");

//get the class of the check boxs and radio inputs fields
const free_year_message = document.querySelectorAll(".free-year-message");
const yearly_price = document.querySelectorAll(".yearly-price");
const monthly_price = document.querySelectorAll(".monthly-price");
const toogle_monthly_yearly = document.querySelector("#toogle-monthly-yearly");

//get the service container
const services_container = document.querySelectorAll(".services-container");

//get the id of the the checkboxes and the respective container they are in
const online_services = document.querySelector("#online-servies");
const larger_storage = document.querySelector("#larger-storage");
const customizable_profile = document.querySelector("#customizable-profile");
const check_box = document.querySelector(".checkbox");
const box_1 = document.querySelector(".box1");
const box_2 = document.querySelector(".box2");
const box_3 = document.querySelector(".box3");

//select the last stage change link 
const change = document.querySelectorAll(".change");

//get the ids of the input adio field;
const for_arcade_cont = document.querySelector("#for-arcade-cont");
const for_advanced_cont = document.querySelector("#for-advanced-cont");
const for_pro_cont = document.querySelector("#for-pro-cont");

//get ids and classes needed for displaying in the final step
const total_arcade_cont = document.querySelector("#total-arcade-cont");
const total_advanced_cont = document.querySelector("#total-advanced-cont");
const total_pro_cont = document.querySelector("#total-pro-cont");
const total_yearly_style = document.querySelectorAll(".total-yearly-style");
const total_monthly_style = document.querySelectorAll(".total-monthly-style");
const add_ons_online = document.querySelector("#add-ons-online");
const add_ons_storage = document.querySelector("#add-ons-storage");
const add_ons_custom = document.querySelector("#add-ons-custom");
const total_to_pay = document.querySelector("#total-to-pay");
const add_ons_checkbox = document.querySelectorAll(".add-ons-checkbox")
//declare Email regex
const email_valid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

//event listener to change the border of the container when a checkbox is checked
online_services.addEventListener("change", () => {
    if(online_services.checked){
        box_1.classList.add("services-container-checked");
    }
    else{
        box_1.classList.remove("services-container-checked");
    }
})
larger_storage.addEventListener("change", () => {
    if(larger_storage.checked){
        box_2.classList.add("services-container-checked");
    }
    else{
        box_2.classList.remove("services-container-checked");
    }
})
customizable_profile.addEventListener("change", () => {
    if(customizable_profile.checked){
        box_3.classList.add("services-container-checked");
    }
    else{
        box_3.classList.remove("services-container-checked");
    }
})

// we will have to perfom a task for each element having the same class name using the forEach()
toogle_monthly_yearly.addEventListener("change", () => {
    //using the for each to Iterate over the selected elements
    if(toogle_monthly_yearly.checked){
        free_year_message.forEach((element) => {
            element.style.display = "block";
            element.style.color = "hsl(213, 96%, 18%)";
        })
        yearly_price.forEach((element) => {
            element.style.display = "block";
        })
        monthly_price.forEach((element) => {
            element.style.display = "none";
        })  
        total_monthly_style.forEach((element) => {
            element.style.display = "none";
        })  
        total_yearly_style.forEach((element) => {
            element.style.display = "inline-block";
        })  
    }
    else{
        free_year_message.forEach((element) => {
            element.style.display = "none";
        })
        yearly_price.forEach((element) => {
            element.style.display = "none";
        })
        monthly_price.forEach((element) => {
            element.style.display = "block";
        })
        total_monthly_style.forEach((element) => {
            element.style.display = "inline-block";
        })  
        total_yearly_style.forEach((element) => {
            element.style.display = "none";
        })
    }
    
    const isChecked = toogle_monthly_yearly.checked;

    // Toggle display based on checkbox state
    add_ons_yearly_price.forEach((element) => {
        element.style.display = isChecked ? "block" : "none";
    });
    add_ons_monthly_price.forEach((element) => {
        element.style.display = isChecked ? "none" : "block";
    });
});

//what to happen to the inputs fields when certain events and conditions are met
//name input
name_input.addEventListener("focus", () => {
    name_input.classList.add("focus");
})
name_input.addEventListener("blur", () => {
    name_input.classList.remove("focus");
})
name_input.addEventListener("input", () => {
    if_empty(name_input,input_error_style1);
})
//email input
email_input.addEventListener("focus", () => {
    email_input.classList.add("focus");
})
email_input.addEventListener("blur", () => {
    email_input.classList.remove("focus");
})
email_input.addEventListener("input", () => {
    if_empty(email_input, input_error_style2);
    validate_input(email_input.value);
})
//phone number input
phone_no_input.addEventListener("focus", () => {
    phone_no_input.classList.add("focus");
})
phone_no_input.addEventListener("blur", () => {
    phone_no_input.classList.remove("focus");
})
phone_no_input.addEventListener("input", () => {
    if_empty(phone_no_input, input_error_style3);
})

//change the behaviour of the form to submit after 5 seconds of clicking the button
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setTimeout(function() {
        // Simulate form submission after 5 seconds
        form.submit();
    }, 5000);
});

//event listener to change to the next page changing the navigation style
// event.preventDefault() stops the browser from reloading when the button is clicked
// if the next button of page 1 is clicked and the input fields are not filled, it won't go to the next page and will display an error style
next_button1.addEventListener("click", () => {
    if(name_input.value == "" && email_input.value == "" && phone_no_input.value == ""){
        if_empty(name_input,input_error_style1);
        if_empty(email_input, input_error_style2);
        if_empty(phone_no_input, input_error_style3);
        event.preventDefault();
    }
    else if(name_input.value == "" && email_input.value == ""){
        if_empty(name_input,input_error_style1);
        if_empty(email_input, input_error_style2);
        event.preventDefault();
    }
    else if(email_input.value == "" && phone_no_input.value == ""){
        if_empty(email_input, input_error_style2);
        if_empty(phone_no_input, input_error_style3);
        event.preventDefault();
    }
    else if(name_input.value == "" && phone_no_input.value == ""){
        if_empty(name_input,input_error_style1);
        if_empty(phone_no_input, input_error_style3);
        event.preventDefault();
    }
    else if(name_input.value == ""){
        if_empty(name_input,input_error_style1);
        event.preventDefault();
    }
    else if(email_input.value == ""){
        if_empty(email_input, input_error_style2);
        event.preventDefault();
    }
    else if(phone_no_input.value == ""){
        if_empty(phone_no_input, input_error_style3);
        event.preventDefault();
    }
    else{
        //if all conditions are met button would move to previous the next page
        to_next_page(form_container_1, form_container_2);
        event.preventDefault();
        change_next_navigation_style(step1 ,step2);
    }
})
next_button2.addEventListener("click", () => {
    to_next_page(form_container_2, form_container_3);
    event.preventDefault();
    change_next_navigation_style(step2, step3);
})
    
next_button3.addEventListener("click", () => {
    selected_plan();
    selected_adds_ons();
    form_container_3.style.display = "none";
    form_container_4.style.display = "block";
    event.preventDefault();
    change_next_navigation_style(step3, step4);
    get_price();
})

next_button4.addEventListener("click", () => {
    to_next_page(form_container_4, thank_you_container);
})

//event listener to change to the previous page and update the navigatio style
go_back_button2.addEventListener("click" , () => {
    to_previous_page(form_container_2, form_container_1);
    event.preventDefault();
    change_prev_navigation_style(step2, step1);
})
go_back_button3.addEventListener("click" , () => {
    to_previous_page(form_container_3, form_container_2);
    event.preventDefault();
    change_prev_navigation_style(step3, step2);
    empty_plan_cont();
})
go_back_button4.addEventListener("click" , () => {
    to_previous_page(form_container_4, form_container_3);
    event.preventDefault();
    change_prev_navigation_style(step4, step3);
    empty_plan_cont();
})
change.forEach(element => {
    element.onclick = () => {
    to_previous_page(form_container_4, form_container_2);
    change_prev_navigation_style(step4, step2);
    empty_plan_cont();
    }
})

// changes the page from current page to the next one by removing the display and showing it interchangably
function to_next_page(form_cont1, form_cont2){
    form_cont1.style.display = "none";
    form_cont2.style.display = "flex";
}

// changes the page from current page to previous one by removing the display and showing it interchangably
function to_previous_page(form_cont2, form_cont1){
    form_cont2.style.display = "none";
    form_cont1.style.display = "flex";
}

// it is the function that keeps us updated on what step USER is currently filling
function change_next_navigation_style(s1 ,s2){
    s1.classList.remove("active");
    s1.classList.add("steps");
    s2.classList.remove("steps");
    s2.classList.add("active");
}
function change_prev_navigation_style(s1,s2){
    s1.classList.remove("active");
    s1.classList.add("steps");
    s2.classList.remove("steps");
    s2.classList.add("active");
}

// if_empty() removes the normal focus style and adds an error style to the input field and does vice versal too when needed
function if_empty(input_field, input_error){
    if(input_field.value == ""){
        input_field.classList.remove("focus");
        input_field.classList.add("error");
        input_error.style.display = "block";
    }
    else{
        input_field.classList.remove("error");
        input_field.classList.add("focus");
        input_error.style.display = "none";
    }
}

//empty the step 4 container whenever called on to update the new container if USER wants to change plan 
function empty_plan_cont(){
    total_advanced_cont.style.display = "none";
    total_arcade_cont.style.display = "none";
    total_pro_cont.style.display = "none";
    add_ons_online.style.display = "none";
    add_ons_storage.style.display = "none";
    add_ons_custom.style.display = "none";  
}

// chooses what elements to be displayed when the add-ons to be added are clicked
function selected_adds_ons(){
    if(online_services.checked && larger_storage.checked && customizable_profile.checked){
        add_ons_online.style.display = "flex";
        add_ons_storage.style.display = "flex";
        add_ons_custom.style.display = "flex";        
    }
    else if(online_services.checked && customizable_profile.checked){
        add_ons_online.style.display = "flex";
        add_ons_custom.style.display = "flex";    
    }
    else if(online_services.checked && larger_storage.checked){
        add_ons_online.style.display = "flex";
        add_ons_storage.style.display = "flex";        
    }
    else if(larger_storage.checked && customizable_profile.checked){
        add_ons_storage.style.display = "flex";
        add_ons_custom.style.display = "flex";        
    }
    else if(online_services.checked){
        add_ons_online.style.display = "flex";        
    }
    else if(larger_storage.checked){
        add_ons_storage.style.display = "flex";        
    }
    else if(customizable_profile.checked){
        add_ons_custom.style.display = "flex";        
    }
}
// chooses what elements to be displayed when the plan to be chosen is clicked
function selected_plan(){
    if(for_arcade_cont.checked){
        total_arcade_cont.style.display = "flex";
    }
    else if(for_advanced_cont.checked){
        total_advanced_cont.style.display = "flex";
    }
    else if(for_pro_cont.checked){
        total_pro_cont.style.display = "flex";
    }
}

// displays the total amount of the purchase made
function get_price(){
    //gets the amount to be used from the html element
    const yearly_price_arcade = document.querySelector("#yearly-price-arcade").textContent;
    const yearly_price_advanced = document.querySelector("#yearly-price-advanced").textContent;
    const yearly_price_pro = document.querySelector("#yearly-price-pro").textContent
    ;
    
    let total = 0;
    if(toogle_monthly_yearly.checked){
        total_to_pay.innerHTML = perform_total_calc(yearly_price_arcade, yearly_price_advanced, yearly_price_pro, total);
    }
    //divide the total by ten to get the price for monthly therefore no need to import new values
    else{
        total = perform_total_calc(yearly_price_arcade, yearly_price_advanced, yearly_price_pro, total);
        total_to_pay.innerHTML = total/10;
    }
}

// adds the selected price to total and returns the total price 
function perform_total_calc(price1, price2, price3 , total){
    if(for_arcade_cont.checked){
        total += parseInt(price1);
    }
    else if(for_advanced_cont.checked){
        total += parseInt(price2);
    }
    else if(for_pro_cont.checked){
        total += parseInt(price3);
    }
    add_ons_checkbox.forEach((element) => {
        if(element.checked){
            let number = parseInt(element.value);
            total += number;   
        }
    })
    return total;
}
function validate_input(input){
    if(email_valid.test(input)){
        email_input.classList.remove("error");
        email_input.classList.add("focus");
        input_error_style4.style.display = "none";
    }
    else if(input == ""){
        email_input.classList.remove("focus");
        email_input.classList.add("error");
        input_error_style4.style.display = "none";
    }
    else{
        email_input.classList.remove("focus");
        email_input.classList.add("error");
        input_error_style4.style.display = "block";
    }
}