Business
========
* healthcare provider
* receives referrals from GPs for rural patients
* provides psychiatric consultations remotely

Problem
=======
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

![Concept](https://github.com/iankhor/files/blob/master/MedReFR/01.%20Wireframe%20-%20Concept.jpg)






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
6.Add a ```static.json``` file in the root folder with the following configuration  
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

### Back End

#### Back End Deployment Setup

### Project management