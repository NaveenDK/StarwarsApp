# StarwarsApp
Basic use of Expressjs
# Application error 
Heroku gives an application error if the  following line is not added in package.json file:

"scripts": {
        "start": "node app.js"
    },
    
 you can type in the following to access the log files if needed: 
 heroku logs --tail
