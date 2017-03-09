Project co-developed with : [Sharon @ https://github.com/Cloudilicious](https://github.com/Cloudilicious)

Overview
========
* [Project brief](#project-brief)
* [Technology stack](#technology-stack)
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
* [UX: User flow diagram](#ux-user-flow-diagram)
* [UX: Referral lifecycle diagram](#ux-referral-lifecycle-diagram)
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
* [Outstanding issues](#outstanding-issues)


Project brief
=============
* Design, build, deploy and present an application built for a real world customer
* Meet with the business owner or organisation manager to find out what challenges they face
* Find a problem that can be solved with an application

The deployed webpage can be found here : [MedReFR (Click here)](https://medrefr.herokuapp.com)

[Return to overview](#overview)

Technology stack
========
Front-end:
* React.js  

Back-end:
* MongoDB
* Express.js
* Node.js

[Return to overview](#overview)

Business problem
=======
* healthcare provider
* receives referrals from GPs for rural patients
* provides psychiatric consultations remotely
* manual business process
* receives referrals via fax from GPs
* uses MS Excel to assign patient to specialists

[Return to overview](#overview)

Solution
========
* single Platform
* users : GPs, specialists, psychiatrist
* high level workflow:
  * GP : submits a referrals
  * Triage officer : assigns referrals to appropriate specialists
  * Specialist : signs up to be on the panel and can accept or decline referred patient


[Return to overview](#overview)

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

[Return to overview](#overview)

Concept, Design and build
=========================

To kick off the project, we had an in-person meeting with the key stakeholders to determine
the requirements and expectations for the project. After agreeing on the scope with the client,
and gathering information on their current business processes, we proceeded to create a low fidelity sketch of the e-referral platform.

Concept
-------
Our initial session involved drawing low fidelity sketches on a whiteboard and concentrating on mobile first design.
Using a whiteboard allowed us to quickly turn our discussion and ideas into a visual representation and show the key elements, such as
* A button to create a new referrals
* A list to display existing referrals, and what information to include (key patient details, status icon)
* Information divided into different sections for clarity (e.g. patient details, referring doctor details)

![Concept](https://github.com/iankhor/files/blob/master/MedReFR/01.%20Wireframe%20-%20Concept.jpg)

Design
------
Next we used Sketch to create high fidelity designs of our hand drawn concepts and further refine the user interface. This task was made simpler given that Material design elements are available to be used in Sketch, and helped cement our decision to use Material UI.

![Concept](https://github.com/iankhor/files/blob/master/MedReFR/03%20.%20Wireferame%20-%20Sketch.png)

Build (MVP)
-----
We then began to build an MVP in React. Using Material UI with React helped to further iterate the design, as we discovered the features and limitations of the tools.

![Build](https://github.com/iankhor/files/blob/master/MedReFR/04%20.%20Wireferame%20-%20React%20MVP.png)

Concept, Design Build comparison
================================
![Comparison](https://github.com/iankhor/files/blob/master/MedReFR/05%20.%20Wireferame%20-%20Concept%20Design%20Build%20comparison.jpg)

[Return to overview](#overview)

UX: User flow diagram
=====================================
Before we begin coding, we planned the user flow in the diagram below. It served as a guide to what pages and elements were needed for
the entire app. This has allowed us to code more efficiently by answering the detailed nuances of the user experience.

![User flow diagram](https://github.com/iankhor/files/blob/master/MedReFR/15.%20MedReFR%20UX%20-%20User%20Flow%20V1.0.jpg)

[Return to overview](#overview)

UX: Referral lifecycle diagram
=====================================
As the core piece of the app was the referral, we have drawn the referral lifecycle in the following diagra mto ensure that the business logic is
correct.

![Referral Status Matrix](https://github.com/iankhor/files/blob/master/MedReFR/14.%20Referral%20status%20matrix.png)
![Referral Lifecycle Diagram](https://github.com/iankhor/files/blob/master/MedReFR/13.%20Referral%20lifecycle%20diagram.jpg)

[Return to overview](#overview)

Front-end: React component hierarchy diagram
===============================================
As React is components based, we have mapped our a component hierarchy diagram to guide us through the coding process. This diagram has
helped us decide where crucial data should be placed and pass around. Each component followed the single responsibility principle technique.  

![Component Hierarchy Diagram](https://github.com/iankhor/files/blob/master/MedReFR/12.%20Component%20Hierarchy%20DiagramV1.3.jpg)

[Return to overview](#overview)

Back-end: MongoDB schema design
===================================
As for the backed, we have planned the MongoDB schema as follows to serve as a reference when building the backend Node/Express server.

*Profile*  

key | type, default value  
--- | ----  
|email | String |
|password | String |
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

[Return to overview](#overview)

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

[Return to overview](#overview)

Style Guide
===========
CSS framework
-------------
The decision was made to use Material UI due to the rich features it offers (such as modals, cards, toggling) and our belief that it would enhance the user experience. Material UI allowed us to integrate the design with our React components.
The look and feel of Material also fits in with our design aesthestic, being clean, minimal and flat.

Colour
-----
Colours selected for our app were based on the customer's existing website.
From this, we continued the theme with complementary shades of blue, to convey a
professional and unobtrusive experience.

Item | Colour | RGB | HEX  
---: | -----:| ---:| ---
Primary 1 | ![Primary](https://github.com/iankhor/files/blob/master/MedReFR/06.%20Styleguide%20-%20Primary%20color%201.png) | (49, 86, 63) | #315685   
Secondary 1 | ![Secondary 1](https://github.com/iankhor/files/blob/master/MedReFR/07.%20Styleguide%20-%20Secondary%20color%201.png) | (66, 179, 229) | #42B3E5
Secondary 2 | ![Secondary 2](https://github.com/iankhor/files/blob/master/MedReFR/08.%20Styleguide%20-%20Secondary%20color%202%20copy.png) | (32, 32, 32) | #202020
Font | ![Font 1](https://github.com/iankhor/files/blob/master/MedReFR/09.%20Styleguide%20-%20Text%20color%201%20copy.png) | (144,144,144) | #909090

Font type
----
Google Font Roboto was used for our app. This was in keeping with the existing
Material theme but also was the perfect choice for a medical app as it is easy
to read and looks neat and professional without being too bland or serious.
![Font type](https://github.com/iankhor/files/blob/master/MedReFR/11.%20Styleguide%20-%20Font.png)

Graphics
--------
Images were custom designed and created in house using a combination of Sketch and Photoshop.
A minimal, flat and casual style was employed so that the user is not made to feel
intimidated or overwhelmed.
![Hero Image](https://github.com/iankhor/medrefr/blob/shazza/front-end/src/components/MainPage/heroimage.png)

Code Style
----------
1. Custom methods (non-lifecycle methods) in each React class must begin with an underscore ie : ```_thisMethod(a , b)```

[Return to overview](#overview)

Installation / Setup / Deployment
=================================

Pre-requisites
--------------
The following packages are assumed to be installed globally in your local machine  
1. [Nodemon](https://github.com/remy/nodemon)  
2. [Mongo](https://github.com/mongodb/mongo)  

Setup procedure
---------------
Clone a copy of this repository in your local machine. `git clone https://github.com/iankhor/medrefr.git`

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
5. Install npm packages by running `npm install`  
6. Start the back-end server by running `nodemon`  
7. On your web browser, go to `localhost:4000` to see if the MedReFR welcome screen appears.  

Deployment (optional)
---------------------
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
<<<<<<< HEAD
<<<<<<< HEAD
6. On your local machine, go into your front-end folder. `cd front-end`    
7. Initialiase a git repositry. `git init`  
8. Add the heroku git repositry in step 2. `git remote add heroku https://git.heroku.com/medrefr.git`    
9. Add a new file called `static.json` to configure a single page application with heroku.
=======
=======
>>>>>>> e71b9b537c620d2aabf44017cad4f67c579e2cac
6. Sign up/Log in with [Auth0](https://www.auth0.com/).
7. In Auth0, create a client and record the  `client ID` and `domain`
8. In the local **.env** file, update the `REACT_APP_AUTH_CLIENT_ID` and `REACT_APP_AUTH_DOMAIN_ADDRESS` with `client ID` and `domain` from step 7.
9. On your local machine, go into your front-end folder. `cd front-end`    
10. Initialiase a git repositry. `git init`  
11. Add the heroku git repositry in step 2. `git remote add heroku https://git.heroku.com/medrefr.git`    
12. Add a new file called `static.json` to configure a single page application with heroku.
<<<<<<< HEAD
>>>>>>> e345b7922e2694a7181116efdf681914835bba74
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
13. Run the script `npm run deploy:heroku`. This should take about 1-2 minutes to build and setup on heroku.    
14. Once the build process has completed, visit `https://medrefr.herokuapp.com/`


[Return to overview](#overview)

### Project management in Trello
================================
We have used Trello as a project management tool and it can be viewed [at https://trello.com/b/K1URwilv/cfa-medrefr](https://trello.com/b/K1URwilv/cfa-medrefr)

[Return to overview](#overview)

### Outstanding issues
================================
See [issues](https://github.com/iankhor/medrefr/issues) for existing issues / bugs

[Return to overview](#overview)
