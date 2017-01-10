### Project brief
Referral Platform for a Melbourne Medical Startup

Assumed global packages installed : ```nodemon```

1.Run ```npm i``` and ```cp .env.example .env``` on both front-end and back-end folders   
2.Update environment variables for both front-end and back-end in ```.env``` [insert more detailed instructions]
3.run the following :
```cd front-end``` then ```npm run watch```  
```cd back-end``` then ```nodemon```    
3.Go to your browser and visit the following address on localhost
```localhost:9000``` (front end) and ```localhost:4000``` (back end)

### Front End

#### Front End Deployment Setup
The steps below assumes all collaborators are added to the heroku app settings.

In heroku setting, ensure the build pack from is added to the app ```https://github.com/mars/create-react-app-buildpack.git```

On your local terminal,   
1.Login to heroku by running ```heroku login```  
2.Enter your heroku user name and password  
3.Setup heroku remote repositry by running ```git remote add heroku https://git.heroku.com/medrefr.git```   
4.Run ```npm run deploy:heroku```  
5.Once the heroku build process is complete, visit the app at ```https://medrefr.herokuapp.com/```   

### Back End

#### Back End Deployment Setup

### Project management