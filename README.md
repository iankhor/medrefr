Overview
========
* [Project brief](#project-brief)
* [Business problem](#business-problem)
* [Solution](#solution)
* [User stories](#user-stories)
   * [GP](#gp)
   * [Psychiatrist/specialist](#psychiatristspecialist)
   * [Triage officer (TO)](#triage-officer-(TO))
   * [Patients](#patients)
* [Concept, Design & Build](#concept-design-build)
    * [Concept](#concept)
    * [Design](#design)
    * [Build](#build)
    * [Comparison](#concept-design-build-comparison)
* [Work flow](#work-flow)
* [Technology stack](#technology-stack)
* [Front-end: React component hierarchy diagram](#front-end-react-component-hierarchy-diagram)
* [Back-end: MongoDB schema design](#back-end-mongodb-schema-design)
* [Notable package, services and tools used](#notable-packages-services-tools-used)
* [Style guide](#style-guide)
  * [Color](#color)
  * [Font type](#font-type)
  * [Code style](#code-style)
* [Installation, Setup, Deployment](#installation--setup--deployment)
  * [Pre-requisites](#pre-requisites)
  * [Setup procedure](#setup-procedure)
  * [Deployment(optional)](#deployment-optional)
* [Project management in Trello](#project-management-in-trello)
* [Outstanding issues / bugs](#outstanding-isses-bugs)
* [Final web app link](#final-web-app-link)


Project brief
=============
\[ ... insert 150 charcter summary \]
\[ ... team members : ian & sharon (include github profile link) \]


Business problem
=======
* healthcare provider
* receives referrals from GPs for rural patients
* provides psychiatric consultations remotely
* manual business process
* receives referrals via fax from GPs
* uses MS Excel to assign patient to specialists

Solution
========
* single Platform
* users : GPs, specialists, psychiatrist
* high level workflow: 
  * GP : submits a referrals
  * Speciliast : signs up to be on the panel
  * Triage officer : assigns referrals to appropriate specialists

User stories
============
GP
--
1. As a GP, I am able to sign up to via CH's webpage in a the role of a psychiatrist, so that I can submit referrals for my patients
2. As a GP, when i sign up there is a CAPTCHA verification, so that I have an implicit reassurance that no fake accounts can be created.
3. As a GP, I am able to submit a referral through an e-form, so that I could allow my patient to seek specialist treatment from a psychiatrist.
4. As a GP, I know that my referral submission is encrypted post submission, so that my patient's privacy is protected.
5. As a GP, I am able to edit my submitted referral, so that I can provide accurate patient details for triage.
6. As a GP, I am able to edit my user profile once being approved, so that my details are always up to date.
7. As a GP, I am able to search for a patient's eligibility for the referral program using a patient's postcode.
8. As as admin, I am able to filter all referrals based on the criteria (completed, non-completed), so i know how many outstanding referrals there are.

Psychiatrist/specialist
----------
1. As a psychiatrist/specialist, I am able to sign up to via CH's webpage in a the role of a psychiatrist/specialist, so that I can be on the CH's specialist panel.
2. As a psychiatrist/specialist, when i sign up there is a CAPTCHA verification, so that I have an implicit reassurance that no fake accounts can be created.
3. As a psychiatrist/specialist, I am able to see a full list of assigned referrals, so that I can click into a referral and read its details.
4. As a psychiatrist/specialist, I am able to click into a specific referral and read the details of the referral, so that i can accept and decline an assigned referral.
5. As a psychiatrist/specialist, I know the referral i am reading is encrypted, so that the patient's privacy is protected.
6. As a psychiatrist/specialist, I am able to edit my user profile once being approved, so that my details are always up to date.
7. As as psychiatrist/specialist, I am able to filter all referrals based on the criteria (completed, non-completed), so that I can quickly know how many referrals i need to attend to.

Triage officer (TO)
--------------
1. As an triage officer, I am able to see a whole list of received referrals, so that I can perform triage duties.
2. As an triage officer, I am able to choose whether to allow an approved psychiatrist to appear on the biopage, so that GP/ patients would be able to see who is on the specialist panel.
3. As an triage officer, I can approve the a new psychiatrist/specialist who just signed up, so that they will be on the list of approved specialist to be assigned to referrals.
4. As an triage officer, I am able to assign a referral to an approved list of psychiatrist, so that I can allow patients to see a suitable psychiatrist.
5. As an triage officer, I am able to assign referrals to a panel of psychiatrist, so that my patients could seek treatment.
6. As an triage officer, I am able to see basic high level analytics like total referrals, total referrals per GP/provider, no shows, and accepted/declined referrals, so that i can make future business decisions.
7. As an triage officer, I am able to see analytics such as total no shows, accepted/declined in relation to a specific referral, so that i can make future business decisions.
8. As an triage officer, I am able to record when a patient is a no show, so that this information can be used for billing or reporting purposes
9. As an triage officer, I am able to record the appointment time so that I am able to keep track of appointments and make any necessary follow up.
10. As as triage officer, I am able to filter all referrals based on the criteria (completed, non-completed), so that i can quickly perform my triage duties.

Patients
--------
1. As a patient, I am able to see the 'emergencies' and 'contact us' details on the main page (or near landing page section) without the need to search the page for it, so that I can quickly get assistance when accessing the webpage.

Concept, Design and build
=========================

...insert intro paragraph

Concept
-------
... insert intro para ...
... mobile first design ...
... hand drawn bla bla ... initial ideation of how the look and feel of the app should be ...
... low fidelity ...
![Concept](https://github.com/iankhor/files/blob/master/MedReFR/01.%20Wireframe%20-%20Concept.jpg)

Design
------
... design concept using sketch ... high fidelity design of hand drawn concepts
... further improvements as well during design stage ...
... decided on material UI ...
![Concept](https://github.com/iankhor/files/blob/master/MedReFR/03%20.%20Wireferame%20-%20Sketch.png)

Build (MVP)
-----
... initial MVP with React ...
... to see it in action in a browser and mobile ...
... helped in further iterating the design ...
![Build](https://github.com/iankhor/files/blob/master/MedReFR/04%20.%20Wireferame%20-%20React%20MVP.png)

Concept, Design Build comparison
================================
![Comparison](https://github.com/iankhor/files/blob/master/MedReFR/05%20.%20Wireferame%20-%20Concept%20Design%20Build%20comparison.jpg)


Workflow
========
\[ ... TO BE ADDED ... \]  

Technology stack
========
Front-end: 
* React.js  

Back-end: 
* MongoDB
* Express.js
* Node.js  

Front-end: React component hierarchy diagram
===============================================
/[ .. some explanation of the design ... \]   
![Component Hierarchy Diagram](https://github.com/iankhor/files/blob/master/MedReFR/12.%20Component%20Hierarchy%20DiagramV1.3.jpg)

Back-end: MongoDB schema design
===================================
/[ .. some explanation of the db design ... \]  

Colons can be used to align columns.

| key        | type, default value |
| ------------- |:-------------:| 
| email | String | 
| password | String | 
| createdAt | Date, Date.now | 


*User*  

| key | type, default value  |
|:----| ------------------|
|email | String |
|password | String |
|createdAt| Date, Date.now |


*Profile*  
key | type, default value  
--- | ----  
surname| String
givenName| String
dateOfBirthDay| Number
dateOfBirthMonth| Number
dateOfBirthYear| Number
providerNumber| String
contactNumber| Number
primaryPlaceOfPractice| String
role| String
subSpecialty| String
userID| ObjectID
createdAt| Date, Date.now

*Referral Schema*
key | type, default value  
--- | ----  
referralStatus | String, "Pending" 
patientSurname| String               
patientgivenName| String            
patientGender| String               
patientBirthDay| Number              
patientBirthMonth| Number           
patientBirthYear| Number            
patientAddress| String              
patientPostcode| Number             
patientMedicare| Number     
patientContactNumber| Number        
doctorSurname| String               
doctorGivenName| String             
doctorClinic| String                
doctorAddress| String
doctorPostcode| Number              
doctorContactNumber| Number         
referralAppointmentDay| Number      
referralAppointmentMonth| Number 
referralAppointmentYear| Number     
referralRequestedService| String    
referralReasonForReferral| String   
referralUrgent|Boolean false
referralRuralCode| String  
referralAppointmentHour| Number 
referralAppointmentMinute| Number 
referralAppointmentPeriod| String 
role| String
createdAt| Date, Date.now
assignedUserID| ObjectID




Notable packages, services, tools used
===========================================
* [auth0](https://auth0.com)
* [react-router v4](https://github.com/ReactTraining/react-router/tree/v4)
* [axios](https://github.com/mzabriskie/axios)
* [react-parallax](https://github.com/RRutsche/react-parallax)
* [material-ui](https://github.com/callemall/material-ui)
* [formsy-material-ui](https://github.com/mbrookes/formsy-material-ui)
* [heroku](https://www.heroku.com)
* [sketch](https://www.sketchapp.com)
* [trello](https://trello.com)

Style Guide
===========
\[... colors/font theme to be used were ...\]  

CSS frawework
-------------
\[ talk about Material UI decision]  

Color
-----
1. ![Primary](https://github.com/iankhor/files/blob/master/MedReFR/06.%20Styleguide%20-%20Primary%20color%201) Primary: RGB(49, 86, 63) / #315685 
2. ![Secondary 1](https://github.com/iankhor/files/blob/master/MedReFR/07.%20Styleguide%20-%20Secondary%20color%201) Secondary 1: RGB(66, 179, 229)/ #42B3E5
3. ![Secondary 2](https://github.com/iankhor/files/blob/master/MedReFR/08.%20Styleguide%20-%20Secondary%20color%202) Secondary 2: RGB(32, 32, 32)/ #202020 
4. ![Font 1](https://github.com/iankhor/files/blob/master/MedReFR/09.%20Styleguide%20-%20Text%20color%201) Font: RGB(144,144,144) / #909090 

Font type
----
\[... insert text here bla bla bla ...\]    
![Font type](https://github.com/iankhor/files/blob/master/MedReFR/11.%20Styleguide%20-%20Font.png)

Code Style
----------
1. Custom methods (non-lifecycle methods) in each React class must begin with an underscore ie : ```_thisMethod(a , b)``` 
2. \[ insert more code style \]  

Installation / Setup / Deployment
=================================

Pre-requisites
--------------
The following packages are assumed to be installed globally in your local machine  
1. [Nodemon](https://github.com/remy/nodemon)  
2. [Mongo](https://github.com/mongodb/mongo)  

Setup procedure
---------------
Clone a copy of this repositry in your local machine. `git clone https://github.com/iankhor/medrefr.git`

**Front-end**  
1. Go into the front-end folder. `cd front-end`  
2. Make a copy of **.env.example** file and rename it **.env** `cp .env.example .env`  
3. In the *.env* file, ensure the variable is *REACT_APP_API_URL=http://localhost:4000* (or you can alter this based your personal preference)  
4. Install npm packages by runinng `npm install`  
5. Start the front-end server by running `npm run watch`  
6. On your web browser, go to `localhost:9000`  

**Back-end**  
1. Go into the back-end folder. `cd back-end`  
2. Make a copy of **.env.example** file and rename it **.env** `cp .env.example .env`  
3. Start your local mongo database by running `mongod --dbpath ~/__YOUR_MONGODB_PATH___` (or your own mongo database link)  
4. In the *.env* file, ensure the variable is `MONGODB_URI=mongodb://localhost/__YOUR_MONGODB_NAME___` (or you can alter this based your personal preference)  
5. Install npm packages by runinng `npm install`  
6. Start the back-end server by running `nodemon`  
7. On your web browser, go to `localhost:4000` to see if the MedReFR welcome screen appears.  

Deployment (optional)
---------------------
\[ ... This is done at your own risk etc etc disclaimer ... \]  
The following steps assumes you have an [Heroku](http://www.heroku.com) account set up.  
Ensure you are logged into heroku by running `heroku login` in both your front-end and back-end folders.

**Back-end (complete this first before to minimise the errors)**  
1. In Heroku, create an app for the front-end called `medrefr-api` (or an app name that is available)  
2. Note the git URL down. For example : `https://git.heroku.com/medrefr-api.git`  
3. Add/update the **config variables** for `MONGODB_URI` with the link to your mongo database.  
4. Lastly, save the setting from step 1 to 3 in your heroku app.  
5. On your local machine, go into your back-end folder. `cd back-end`    
6. Initialiase a git repositry. `git init`  
7. Add the heroku git repositry in step 2. `git remote add heroku https://git.heroku.com/medrefr-api.git`    
8. Run the script `npm run deploy:heroku`. This should take about 1-2 minutes to build and setup on heroku.    
9. Once the build process has completed, visit `https://medrefr-api.herokuapp.com/`  

**Front-end**  
1. In Heroku, create an app for the front-end called `medrefr` (or an app name that is available)  
2. Note the git URL down. For example : `https://git.heroku.com/medrefr.git`  
3. Add/update the **config variables** for `REACT_APP_API_URL` with a value of `https://medrefr-api.herokuapp.com` (or the name of the api server of your choice)  
4. Under **buildpacks**, add this buildpack link `https://github.com/mars/create-react-app-buildpack.git`   
5. Lastly, save the setting from step 1 to 4 in your heroku app.  
6. On your local machine, go into your front-end folder. `cd front-end`    
7. Initialiase a git repositry. `git init`  
8. Add the heroku git repositry in step 2. `git remote add heroku https://git.heroku.com/medrefr.git`    
9. Add a new file called `static.json` to configure a single page application with heroku. 
```
{
  "root": "build/",
  "clean_urls": false,
  "routes": {
                "/**": "index.html"
            },
  "headers": {
    "/**": {
      "Strict-Transport-Security": "max-age=7776000"
    }
  }
}
```  
10. Run the script `npm run deploy:heroku`. This should take about 1-2 minutes to build and setup on heroku.    
11. Once the build process has completed, visit `https://medrefr.herokuapp.com/`


### Project management in Trello
================================
/[ .. bla bla used trello for PM /]  
/[ .. insert link to trello ... /]  

### Outstanding issues / bugs
================================
/[ ... highlight outstanding issues ... /]  

### Final web app link
================================
[MedReFR (Click here)](https://medrefr.herokuapp.com)