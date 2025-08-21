# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/Screencastfrom2025-08-2116-51-32-ezgif.com-video-to-gif-converter.gif)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/interactive-rating-component-R9zsV9ioDB)
- Live Site URL: [Live site](https://jocular-druid-0ade33.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Arrow Functions
- Mobile-first workflow

### What I learned

I was able to improve my knowledge of pseudo-classes while manipulating button styles and performing simple transitions.

```
button:disabled {
    cursor: not-allowed;
}

button:enabled {
    background-color: var(--white);
    transition: all 1s ease 1ms;
}

button:active {
    outline: 0;
    transform: translateY(-1px);
}
```

## Author

- Frontend Mentor - [@viniciusfrsantos2](https://www.frontendmentor.io/profile/viniciusfrsantos2)