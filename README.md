# Interview Project for C.H Robinson

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was pushed to the Cloud using Azure, you can find more about it [here](https://devblogs.microsoft.com/premier-developer/deploying-react-apps-to-azure-with-azure-devops/).

## Setup

This project assumes the developer will be developing in a MacOS (or Linux) environment with Microsoft Visual Studio Code installed and Homebrew installed. Links for downloading/installing the aforementioned technologies are here:

[Visual Studio Code](https://visualstudio.microsoft.com/downloads/)

[Homebrew](https://brew.sh/)

If you are pushing your version of this project to the cloud with Azure, be sure you have an account with [Azure](https://azure.microsoft.com/en-in/free/). You can sign up for a Free account via the link. You will also need an [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/) account.

## Prerequisites:

Navigate to your working directory on the terminal. From there we will be making sure the necessary packages for React to run are installed. 

React recommends having Node >= 10.16 and npm >= 5.6 installed. To check that you meet these requirements type the following lines into the terminal and hit 'enter':

`npm --version` and `node --version`

If the versions are not up to the recommended specs you can enter: 
`brew update` then
`brew upgrade node`

These lines will update both Node and npm for you. 

Confirm that the packages were installed correctly using `npm --version` and `node --version` again. 

Now that we have Node and npm installed, we are ready to begin creating our React project. 

## Creating Initial React Project

Since we're still in our working directory type `npx create-react-app your-app-name` into the terminal. 

This will build the initial react developer environment on your local machine. Go into your-app-name 's directory and get started:

`cd your-app-name` `npm start`

Your browser should automatically open into localhost:3000 where you will see the initial react developer template being rendered. This will conclude setup for the developer environment.

## Linking GitHub Repository
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

## Additional Resources for Learning React

If you need assistance trying to figure out how to do things with React, I found a lot of use out of these links when developing this project:

[React Developer Documentation](https://reactjs.org/docs/getting-started.html)
Developer Comments: Barebones documentation for how to achieve things. Documentation assumes you have knowledge of the holy trinity of web development: HTML, CSS, JavaScript.

[YouTube React tutorial for Beginners](https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)
Developer Comments: In-Depth explanations of React properties, behaviors, and various how-to dos. 

Additionally, a lot of the PluralSight blogs have some well written tutorials like this one [here](https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components).

## Deploying Your App to Azure

### Part 1

1. Assuming you have setup your Azure Account on your **Azure Dashboard** select **App Services** and then click **Add**.
2. You will be asked to configure this app service. 
3. For **Subscription**, choose your free subscription. 
4. Create a new Resource Group for this app. This guide uses the **Resource Group** named react-routes-deploy. Give a unique name to your app; this guide uses **routesApp**. For **Publish** choose **Code**. Select **Node 10.14** as Runtime Stack and **Linux** as the Operating System. Finally, please select the closest region to you or leave it at default.
5. Leave **App Service Plan** as default and hit **Review+Create**. After the review is complete, you will need to select **Create**.
6. After a few minutes, your app will be live, and you can visit it at {your-app-service-name}.azurewebsites.net

### Part 2
1. Assuming you have not yet created an Azure DevOps organization: Sign into Azure DevOps and click **New Organization**
2. Select **Continue** on the prompt.
3. You will then be asked to give your org a unique name.
4. Once you give your org a unique name and click **continue**, your organization will be created and can be visited under `https://dev.azure.com/yourorganization`.
5. Create a New Project with a unique name.
6. Click **Repos** Then Click the dropdown arrow next to your repo name and click **Import Repository**. This will pull up a window for you to import your repo.
7. Select **Git** as *source type*. Copy and paste the clone URL from your GitHub repository into the **Clone URL** field. If your repo is private, click **Require Authentication** and then enter your username and password. If the repo is not private, it can be imported without authentication.
8. You have to give the imported repo a **name** however it can be the same as what you called the repo on GitHub. 
9. Your code is now on Azure DevOps. Next, we will work on getting it to the live website.

### Part 3
1. Under **Pipelines** click **New Pipeline**.
2. Select **GitHub**. You may be required to link your account/authorize GitHub/Azure to access each other. 
3. Select the Repo you would like Continuous Integration/Continuous Deployment to stem from.
4. Under the **Configure your pipeline** menu select **Node.js React Web App to Linux on Azure**.
5. A menu will pop up. Select your **subscription**. Then select your **Web App Name**. Finally click **Continue**.
6. Your YAML pipeline should be shown. Hitting **Save and Run** will make it so that every time you push a change to your GitHub repo, those changes will be built and deployed to your live website. Additionally, you will need to make a pull request from GitHub once you hit **Save and Run** as the YAML file will be put on your repository on GitHub.


## Finishing Comments & Further Resources

- Deploying the app to azure was mainly followed using this article from [pluralsight](https://www.pluralsight.com/guides/deploy-a-react-app-to-azure). If you wanted to push your app to production, I recommend following the tutorial there, as it is identical to what I would include above. I did make changes to what was written on the article vs what I've written in this READEME, as there were some differences for my development of this project (and implementation of azure), but I want to make sure I credit the author (Ashutosh Singh) for his contribution, as it made pushing an app to azure a lot easier. 


- To whoever made it to the end: **Thank you for your time.** I look forward to the constructive feedback I will be receiving.