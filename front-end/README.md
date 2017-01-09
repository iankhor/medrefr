This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) 
and [Material UI](http://material-ui.com) as the front end framework

An example of the boilerplate can be seen [here](https://still-stream-52331.herokuapp.com/)

### Instructions
1.Git clone repository into your local directory  
2.Run ```npm i``` in your local directory  
3.Run ```cp .env.example .env```  
4.Start React App with ```npm run watch```  
5.Open React App at ```localhost:9000```   

### Notes
1.Update any environment variables where applicable in your local ```.env``` file  
2.Update CSS only in the style.styl  
3.Any changes in the code and ```.styl``` files will automatically recompile the project  
4.Update routes in the component called ```Routes``` in ```\src\components\shared\Routes.js```  
5.The component ```JSONDebugger``` can be used to display JSON data by passing the component a JSON file with the prop name ```json```.  
See example in ```\src\components\PageOne.js```    
6.Assuming heroku is all set up on your terminal, use the command ```npm run deploy:heroku``` to deploy your app to [Heroku](http://www.heroku.com)   
7.[placeholder]