# ![Logo](assets/readmeImg/linglangtitle.png) #

# MS2-LingLang Testing Details #


[Main README.md file](https://github.com/AlexNexton/MS2-LingLang/blob/master/README.md)

[View the live project here.](https://alexnexton.github.io/MS2-LingLang/)

---

## Table of Contents ##

- [Automated Testing](#automated-testing)
  - [Validation Services](#validation-services)
- [Manual Testing](#manual-testing)
  - [User Acceptance Testing (UAT)](#user-acceptance-testing-(uat))
  - [Testing undertaken on desktop](#testing-undertaken-on-desktop)
  - [Testing undertaken on tablet and phone devices](#testing-undertaken-on-tablet-and-phone-devices)
- [Bugs discovered](#bugs-discovered)
  - [Unsolved Bugs](#unsolved-bugs)


---
## Automated Testing ##
---

### Validation Services ###

The following **validation services** and **linter** were used to check the validity of the website code.

- [W3C Markup Validation](https://validator.w3.org/) was used to validate HTML.
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.

---
## Manual Testing ##
---

### User Acceptance Testing (UAT) ###
[UAT document](testing/MS2-ABear-uat-test-plan.pdf) containing:
- UAT approach (scope, assumptions and constraints, team roles and responsibilities etc.), 
- Identified risks, 
- The test cases,
- The pass / fail record for each test case.

### Testing undertaken on desktop ###

- Hardware:
    - Macbook Pro Laptop
    - Dell 5590 Laptop
- Tested Operating Systems:
    - Windows 10
    - OSX 10.11          
- Tested Browsers:
    - Windows 10:
        - Chrome
        - Firefox
        - Edge 
    - OSX 10.11
        - Chrome
        - Firefox
        - Safari  

### Testing undertaken on tablet and phone devices ###

- Hardware:
    - iPad Pro 12.9"
    - iPad Pro 10.5"
    - iPhone XS Max
- Tested Operating Systems:
    - iOS 13.5.1
    - iPadOS 13.5.1
- Tested Browsers:
    - iOS / iPadOS
        - Chrome
        - Firefox
        - Edge

---
## User Stories Testing ##
---
-  As a **user**, I want to see a brief **background** story about the site and what it's about.
    
    1. Go to the Home page (or from any page).
    2. Looking at the Nav-bar, click the 'About Us' page.
    3. Scroll down until you see **'What We're About'** and **'How We Began'**.

-  As a **user**, I want to know **where** the company is **located on a map**.

    1. Go to the Home page (or from any page).
    2. Looking at the Nav-bar, click 'map'.
    3. The user will be brought to a google maps with LingLangs location.

- As a **user**, I want to be able to **Sign Up** and **choose a language** for my child/ children.

     1. Go to the Home page.
     2. Looking at the Nav-bar, click 'Sign Up'.
     3. A modal will appear instantly.
     4. Fill in your detatils and choose a language.
     5. a confirmation page will appear and a memeber of LingLang will be in touch.

- As a **user**, I want to be able to **contact** the website's team.

     1. Go to the Home page.
     2. Looking at the Nav-bar, click 'Contact Us'.
     3. A modal will appear instantly.
     4. Fill in your details.
     5. Click ' inquire about' and select 'LingLangs team'.
      6. Once the form is completed, click the arrow to submit.
    
- As a **user**, I want to be able to contact **administration** about payment methods, complaints, general enquires and the language one might choose.

     1. Go to the Home page.
     2. Looking at the Nav-bar, click 'Contact Us'.
     3. A modal will appear instantly.
     4. Fill in your details.
     5. Click ' inquire about' and select 'LingLangs team'.
     6. Once the form is completed, click the arrow to submit.
     7. A confirmation page will come up where the user can fill out a more detailed form if necessary.

- As a **user**, I want to be able to access the site's if any **Social Media** platforms.

    1. Go to the Home page.(or any page).
    2. Scroll down to the very bottom.
    3. Click either Facebook, Twitter or Instagram.


#### Unsolved Bugs ####

The bottom of the screen on the each game page goes beyond the footer.

![ScreenBug](assets/testingImgs/bugScreen.png)

