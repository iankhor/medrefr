### Project brief
Referral Platform for a Melbourne Medical Startup

1.Run ```npm i``` on both front-end and back-end folders
2. 
```
cd front-end
npm run begin  

cd back-end
nodemon
```
3.Go to your browser and visit the following address on localhost
```
localhost:9000
localhost:4000
```
Port 9000 is your front end
Port 4000 us your back end

### Front End





#### Front End Deployment Setup
The steps below assumes all collaborators are added to the heroku app settings.

In heroku setting, ensure the build pack from is added to the app ```https://github.com/mars/create-react-app-buildpack.git```

On your local terminal, 
1. Login to heroku by running ```heroku login```
2. Enter your heroku user name and password
3. Setup heroku remote repositry by running ```git remote add heroku https://git.heroku.com/medrefr.git``` 
4. Commit all files to git by running ```git add .``` (or relevant files) and then ```git push heroku master``` (or whichever branch)
5. Run ```npm run deploy:heroku```
6. Once the heroku build process is complete, visit the app at ```https://medrefr.herokuapp.com/``` 

### Back End

#### Back End Deployment Setup

### Project management