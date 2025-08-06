
# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). 


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
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon


### Screenshot

![](./Screenshot%20(713).png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Bensolve/article-preview-component-master)
- Live Site URL: [Add live site URL here](https://article-preview-template.netlify.app/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first design workflow
- Desktop-first layout (structure)



### What I learned

- I learned how to connect JavaScript to the DOM and manipulate elements using classList.
- I now understand how a toggle function works — it checks if a class exists, removes it if it does, or adds it if it doesn't.

- This helped me show and hide the share panel by toggling CSS classes like

```css 
.share-panel .active {
  display: none; - to hide
  display: block; - to show 
}   

```

```js
// Example toggle logic
shareButton.addEventListener('click', () => {
  sharePanel.classList.toggle('active'); // Add or remove the "active" class
});


```
You see how the active class is connected to the css section  .

### Continued development

- Frontend Frameworks: I plan to rebuild this component using modern frameworks like React, Next.js, or Vue to practice component-based architecture, state management, and interactivity using real-world tools.

- Responsive and Accessible UI: I want to refine my skills in crafting UIs that are not only responsive but also accessible, following WCAG standards and semantic HTML.

- Developer Experience & Tooling: I aim to explore tools widely used by industry professionals, such as:

- TypeScript for type-safe code

- Tailwind CSS for utility-first styling

- Git/GitHub workflows (branching, pull requests)

- Testing tools like Vitest or Testing Library for component testing

### Useful resources

- [ChatGPT by OpenAI](https://chatgpt.com/) - Helped me understand and improve the structure, accessibility, and organization of my HTML. It guided me with step-by-step explanations and feedback as I built the project.

- [Meta AI on WhatsApp] - Was useful for quick clarifications and lightweight answers during the build. It helped me validate ideas and get basic assistance on the go


## Author


- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Bensolve)
- Twitter - [@yourusername](https://x.com/Benjaminkissa1)


## Acknowledgments

Big thanks to ChatGPT (OpenAI) for step-by-step help in refining the code and structure for this challenge.