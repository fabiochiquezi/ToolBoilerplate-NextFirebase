<br />
<p align="center">
    <img src="https://www.chiquezi.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flogo%2Flogo.c442afade084ba1adfa95e1aecfc83d0.svg&w=384&q=75" width="125">
</p>

# 🤙 Boilerplate NextJS/Firebase

[![Website](https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Ffabiochiquezi.github.io%2F)](https://boilerplate.chiquezi.com/)

This is my boilerplate of two main frameworks that I like to use: NextJS and Firebase. However, it has a set of tools already configured such as jest, cypress, typescript... And a folder structure to facilitate the process of building the front-end of your application.

#### Motivation

Every time I was about to start a project I had to remember how to do every detail of the configuration, so I just made it easy to install and go straight to coding. Also, I structured the folders based on my own Front-end architecture principles, hope you like it.

## 📡 Technologies / Packages

-   HTML
-   CSS
-   StyledComponents
-   TailwindCSS
-   JavaScript / Typescript
-   React / NextJS
-   Firebase
-   Firebase Emulator
-   ESLint
-   Jest
-   Cypress

## 📂 Structure

    - cypress (e2e)
    - public
    - helpers
    - pages
        -- ...pages
        -- ...config files (routes, messages, global styles...)
        -- structure
        -- share
            --- components
            --- store
            --- types

## 🚀 How to run

1. **git clone** https://github.com/fabiochiquezi/ToolBoilerplate-NextFirebase.git
2. **cd** ToolBoilerplate-NextFirebase
3. **yarn install** or **npm install**
4. **yarn dev** to run. **yarn test** to unit tests. **yarn cypress** to e2e tests.

Obs: don't forget to config a firebase server if you want to use it. Put the data config in the **/pages/firebase.settings.json** file

---

<sub>My simple App with the boilerplate: </sub>

<div float="left">
<img
    src="design/md-screenshot/screen-01.jpg?raw=true"
    alt="screenshot"
    title="screenshot"
    width="250"
/>
</div>
