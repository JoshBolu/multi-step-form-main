# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview 

We'll be looking on what the project is all about and how it should behave.

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- see what step they are on.
- choose if they want a yearly or monthly plan.
- Receive form validation messages if:
  - A field has been missed.
  - The email address is not formatted correctly.
  - A step is submitted, but no selection has been made(only in step 1).

### Screenshot
DESKTOP VIEW:
![desktop view 1](assets\screenshot\desktop\desktop-view2.png)
![desktop view 2](assets\screenshot\desktop\desktop-view3.png)
![desktop view 3](assets\screenshot\desktop\desktop-view4.png)
![desktop view 4](assets\screenshot\desktop\desktop-view5.png)
![desktop view 5](assets\screenshot\desktop\desktop-view6.png)
![desktop view 6](assets\screenshot\desktop\desktop-view7.png)
![desktop view 7](assets\screenshot\desktop\desktop-view8.png)
![desktop view 8](assets\screenshot\desktop\desktop-view9.png)
![desktop view 9](assets\screenshot\desktop\desktop-view10.png)
MOBILE VIEW:
![mobile view 1](assets\screenshot\mobile\mobile-view1.png)
![mobile view 2](assets\screenshot\mobile\mobile-view2.png)
![mobile view 3](assets\screenshot\mobile\mobile-view3.png)
![mobile view 4](assets\screenshot\mobile\mobile-view4.png)
![mobile view 5](assets\screenshot\mobile\mobile-view5.png)
![mobile view 6](assets\screenshot\mobile\mobile-view6.png)
![mobile view 7](assets\screenshot\mobile\mobile-view7.png)
![mobile view 8](assets\screenshot\mobile\mobile-view8.png)
![mobile view 9](assets\screenshot\mobile\mobile-view9.png)


### Links

- Solution URL: (https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ/solutions)
- Live Site URL: (https://joshbolu.github.io/multi-step-form-main/)

## My process

This contains some of the steps and thinking process of me building this app. When i took on this challenge from font-end mentorship. I was at first overwhemled with the fact of building this and how i was going to do it, but i then started breaking it down like putting each form stages into it's own section and moving thright each of them by hidding the display when a button is clicked.

After thinking of all that, I then started writting the HTML code only till i got to the first step of the form then styled everthing together, once desired result is reached I change the display of the form step I just finished working on to display "none" then work on the next step of the form in the same html then css writting of code format till i'm done with everything. Next thing is to make sure the app is responsive on all device view-port, Once all that was settled started with the writting the Javascript code. The Javascript code i needed was for moving throghout steps, changing the desired styles as when needed and also claculating the total amount and writting into desired Html elements.  

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- javascript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

i learnt a lot of things while building the multi-step form, some of these things are:
- Firstly always think of a plan first before starting to program.
- the Display property is a powerfull tool from block, to flex or even inline or none as they were all important to my work.
- Learn to understand the box model because when you know that to debug why some elements are behaving wrongly and rectify them.
- In javascript the queryselectorAll can come in handy as it can help you select multiple eleents at the same time, can be very efficient when used well with the forEach() method.
- Classlist is something i liked again that's very interesting, very easy to change style of elements. 
- How i created a toogle to was something new to me and a little bit challenging, position property was the key to the design here.
- how efficiently i used the label with the input field checkbox and radio to create the add-ons and plan container 

```html
<label for="for-arcade-cont">  
  <div class="holding-container">
    <input type="radio" name="plan" id="for-arcade-cont" checked>
    <div class="option-container arcade-option">
      <div class="image-cont">
        <img src="icon-arcade.svg" alt="arcade logo">
      </div>                
      
      <div class="description-price-cont">
        <h4>Arcade</h4>
        <p class="monthly-price">$<span id="monthly-price-arcade">9</span>/mo</p>
        <p class="yearly-price">$<span id="yearly-price-arcade">90</span></p>
        <p class="free-year-message">2 months free</p>
      </div>
    </div>
  </div>
</label>
in this code the labelis used to make sure no matter the part of the container is clicked the radio button which is hidden would be checked and the appropraite style will be used, also the option conatainer is given a positon of absolute and attached to the width of the class "holding-conatainer". The spans are used to hold the price and given specific id which the javascript will be working on.
```

```js
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
//i liked this function because of the way i used the forEach() to calculate the of the checkbox selected with the queryselectorAll selector.
```

### Continued development

I would like to focus on how to use forEach() method effectively. My understanding of the cocept GRID still looks shaky, tried using it but haven't really still gotten the hang of it just continued with FLEX as it was a problem that can still be solved with it. In HTML want to know when to use certain html elements at the right place(e.g Main, Header, Section).

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for in the naming of my html tds and classes. I really liked this pattern and will be looking forward on how to improve them and use it going forward.

## Author

- Frontend Mentor - [@JoshBolu](https://www.frontendmentor.io/profile/JoshBolu)