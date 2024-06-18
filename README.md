# Offline Document Storage
 An offline application to store and manage personal documents such as Aadhaar Card, Driving License, and PAN Card.
 
## Table of Contents
- [Installation](#installation)
- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)

## Installation
To set up the project, clone the repository
```bash
git clone "https://github.com/ghanishth-rajput/Astro.git"
cd "ASTRO"
 then
npm install
npm run dev
```

## Introduction

 The Offline Document Storage is a simple yet efficient tool designed to help users store and manage their important personal documents offline. It provides a user-friendly interface to add, view, edit, and delete document details.

## Features

- Add various document types including Aadhaar Card, Driving License, and PAN Card.
- View stored document details.
- Edit and update document information.
- Delete unnecessary or outdated document entries.
- Offline functionality ensures data security and privacy.

## Usage
1. Open the index.html file in your browser.
2. Select the document type from the dropdown.
3. Fill in the document details.
4. Click on Save Details to save the document information.
5. View, edit, or delete saved document details.

## Project Structure
```sh
D: 
ASTRO
├── .astro
├── .vscode
├── node_modules
├── public
│   ├── assets
│   │   └── images
│   └── styles
│       └── style.css
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   │   └── index.astro
│   ├── scripts
│   │   └── app.js

          
```
## Screenshots

Here are some screenshots of the application:

### Document Entry Page
![MainPage](</public/assets/images/MainPage.png>)
-> Entry Page consist of front ui of the application with the options of forms selection and buttons like save and reset details.

### Forms Section
![DrivingLicense](/public/assets/images/DrivingLicenseForm.png)

![PanForm](/public/assets/images/PanForm.png)

![AadharCard](/public/assets/images/AadharForm.png)

-> This section consists of forms image that are used in our website 

### Canva Image
![PanCard](/public/assets/images/PanCanva.png)

![AadharCard](/public/assets/images/AadharCanva.png)

![DlCard](public/assets/images/Dlcanva.png)

-> This section consists of the canva image that are generated from user data after clicking view button 

### SavedDetails
![SavedDetails](public/assets/images/SavedDetail.png)
-> This section consists of the samples of some data collected from the user

## Conclusion

The Offline Document Storage application is a convenient solution for managing personal documents offline. Its simplicity and offline functionality make it a valuable tool for maintaining privacy and security while ensuring that important information is easily accessible.
