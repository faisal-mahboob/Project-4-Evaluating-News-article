In this project I used Microsoft Visual Studio to write in HTML, CSS and mainly in JS. Using JS i made an express server and dev server. I wrote a fetch
request from the client facing server , the made a post request from the dev server to get Semantic Information from a WebAPI. This information was then 
shown to the user. I used Webpack to build all the files and minified all files in development stage.

The project includes .env file used to keep API KEY safe from being shown to the public. There is a Jest testing done to test the functions used to 
fetch data and to check the URL inpout by the user. Their is also used service workers to let the site work even without an active server.

You can install Visual Studio Code here: https://code.visualstudio.com/

In this project there is a 4 folders, __test, dist, node_modules, src folders. The dist and node_modules folder will form when in terminal
"npm run build-prod" and "npm run build-dev" are run. There are 10 files,.babelrc, .env,.gitattributes,.gitignore,package.json,package-lock.json,
REQUIREMENTS.md, webpack.dev and webpack.prod files.

