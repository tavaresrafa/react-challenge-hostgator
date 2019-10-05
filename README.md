# HostGator Challenge

`SSL(https) link:` [react-hostgator-challenge](https://react-hostgator-challenge.surge.sh/)

## Extra Challenge Points

`Utilização de automatizadores (Used Webpack to automate the list below):`
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

`Utilização de pré-processadores de CSS (SASS, LESS e etc):` The project was implemented with SASS.

`Utilização de ES6:` The project was implemented using ES6.

`Animações e efeitos:`
- Bounce animation in the scroll down button, the animation was made with CSS only.
- Transition effect when hovering the buttons of cycle and plans, the animation was made with CSS only.
- Animation to the loading component that appears while the data request is in progress, the animation was made with CSS only.

`Otimização de Performance:`

![Lighthouse score:](https://github.com/tavaresrafa/react-challenge-hostgator/blob/master/src/assets/img/lighthouse.jpg)

I've implemented everything that I could to get the highest score possible based on the Lighthouse's feedback. I'm going to describre below the Lighthouse log of why is not achieving 100% in some points:

- Performance: First Meaningful Paint.

- Accessibility: Background and foreground colors do not have a sufficient contrast ratio. 
(One of the reasons to not score 100%, is the green background contrast in the "40%" text. So, this should be rethinked in the design level).

- Best practices: Does not use HTTP/2 for all of its resources.

- SEO: Page is blocked from indexing.

## Technologies
List of main languages and libraries used in this project:
- SASS
- ReactJS
- Webpack
- Babel
- Axios
- Slick

## Architecture/Methodology
- Mobile First
- Concepts of RSCSS

## How to run

`npm install` (You need to have installed latest version of `NodeJS` to run this)

`npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

## How to build

`npm run build` or `yarn build`

In order to see the build you need to deploy or run in a local server.

To run in a local server run this:

```
yarn global add serve
serve -s build
```
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
