# Interview Project for C.H Robinson

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was pushed to the Cloud using Azure, you can find more about it [here](https://devblogs.microsoft.com/premier-developer/deploying-react-apps-to-azure-with-azure-devops/).


## Setup

This project assumes the developer will be developing in a MacOS (or Linux) environment with Microsoft Visual Studio Code installed and Homebrew installed. Linkes for downloading/installing the aforementioned technologies are here:

[Visual Studio Code](https://visualstudio.microsoft.com/downloads/)

[Homebrew](https://brew.sh/)

**Prerequisties:**

Navigate to your working directory on the terminal. From there we will be making sure the necessary packages for React to run are installed. 

React recommends to have Node >= 10.16 and npm >= 5.6 installed. To check that you meet these requirements type the following lines into the terminal and hit 'enter':

`npm --version` and `node --version`

If the versions are not up to the recommended specs you can enter: 
`brew update` then
`brew upgrade node`

These lines will update both Node and npm for you. 

Confirm that the packages were installed correctly using `npm --version` and `node --version` again. 

Now that we have Node and npm installed, we are ready to begin creating our React project. 

**Creating Initial React Project**

Since we're still in our working directory type `npx create-react-app your-app-name` into the terminal. 

This will build the initial react developer environment on your local machine. Go into your-app-name 's directory and get started:

`cd your-app-name` `npm start`

Your browser should automatically open into localhost:3000 where you will see the initial react developer template being rendered. This will conclude setup for the developer environment.


**Linking Github Repository**
1. In your-app-name 's directory type `git init main`
2. Add the following files and directories to be staged for commit using `git add filename` The files/directories are:
    - package-lock.json
    - package.json
    - src
    - public

3. Type `git commit -m "Initial Bulk Commit"`
4. Then type `git remote add origin link-to-your-repository`
5. You may be prompted to set your upstream. To do this use `git push --set-upstream origin master`
6. You should be prompted for your username and then password to push the code to your repo.

**Additional Resources for Learning React**

If you need assistance trying to figure out how to do things with React, I found a lot of use out of these links when developing this project:

[React Developer Documentation](https://reactjs.org/docs/getting-started.html)
Developer Comments: Barebones documentation for how to achieve things. Documentation assumes you have knowledge of the holy trinity of web development: HTML, CSS, Javascript.

[Youtube React tutorial for Beginners](https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)
Developer Comments: In-Depth explanations of React properties, behaviors, and various how to dos. 

Additionally, a lot of the PluralSight blogs have some well written tutorials like this one [here](https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components).
