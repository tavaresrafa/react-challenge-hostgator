# HostGator Challenge

`HTTPS (SSL) Link:` [react-hostgator-challenge](https://react-hostgator-challenge.surge.sh/)

## Extra Challenge Points

`Utilização de pré-processadores de CSS (SASS, LESS e etc):` The project was implemented with SASS.

`Utilização de ES6:` The project was implemented using ES6.

`Medidas de segurança:` For secure communication used HTTPS (SSL).

`Utilização de automatizadores (Used Webpack to automate the list below):`
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

`Animações e efeitos:`
- Bounce animation in the scroll down button, the animation was made with CSS only.
- Transition effect when hovering the buttons of cycle and plans, the animation was made with CSS only.
- Animation to the loading component that appears while the data request is in progress, the animation was made with CSS only.

`Otimização de Performance:`

![Lighthouse score:](https://github.com/tavaresrafa/react-challenge-hostgator/blob/master/src/assets/img/lighthouse-score.png)

I've implemented everything to get the highest score possible based on the Lighthouse feedback.

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
