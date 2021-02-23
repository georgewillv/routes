# TODO

1. ~~Figure out how to update list~~
2. ~~Push that list to the display. I can already push some text when the button is clicked~~
    - ~~Output is pushed, but there are no spaces between the array values~~ 
    - ~~Also, 'list' output is not in a formatted view~~
3. ~~Style the app~~
4. ~Figure out how to push the app to either azure or heroku.~~ 
   ~Azure likely will be a Reach goal, depending on when app functionality is working as intended on local machine~
5. Write README so that a fresh junior dev could put the project together.
6. ~~Implement input constraints~~
7. Put together docker file? likely another Reach goal
8. setup unit tests somehow? Definite Reach goal 


## Issues I've encountered:

### 2/12/2021
1. Translating HTML forms to react forms were more challening than expected; likely because this is my first time learning react. 

2. I've got the barebones form up and running on local machine. Currently trying to figure out how to get the sent form data as a value.


### 2/14/2021
1. To get form data you need to reference 'this.state.variable_name' figured out my problem from friday after some googling and failing with possible variable names like locEnd, and event.target.value .
2. Struggling to get logic to traverse countries working in 'getRoutes'. Edge cases work but something is likely wrong with for loop. 

### 2/15/2021 
1. .length() is not a function. '.length' itself. After enabling 'preserve log upon navigation' in chrome developer tools I was able to get the stack trace that was leading to react autorefreshing the page upon error.

2. Base logic for computing countries traversed working. Now I've got to figure a way to get the output in some sort of polished way, other than logging it to console. 

### 2/16/2021
1. Output is pushed to the user's view when the given input is entered. 

### 2/17/2021
1. App is styled, albeit slightly. Better than what it was prior to formatting outputs. 
2. Through some debugging, the 'carrier will need .... following countries' message was displaying onClick/ on enter being pressed. 
    - if no input goes through, a message prompts the user (again) to enter an input from the list above. 
3. I would like to say input constraints are finished, but I will try to break them some more in the following days before marking that off the to do list. 

### 2/18/2021 
1. Azure was easier to setup than expected. Turns out it didn't need to be a reach goal at all. I can go to the link and upon giving the link to a peer he could go to the link as well. 
    - App functioned as expected via link. In other words, its performance was seemingly identical to local environment.
    - Not sure how well app will scale; If ~100k + users hit the site, I think it would crash. 


### 2/21/2021
1. Input constraints were not implemented. Instead I opted for a select / dropdown menu considering it is "less work" for the user and thus enhances the User experience. Previously users would have to make a minimum of 3 keystrokes per letter assuming they didn't make a mistake in the country code. Assuming this application would be used multiple times throughout someones daily job, it would be very frustrating having "please enter a valid input" "constantly" appear. With the drop down menu users need to either click and scroll, or click and use one keystroke to find their country, plus the final enter click for a total of 2 clicks + 1 keystroke or 3 clicks. This also saves me as a developer time/work, as I don't have to implement the input constraints. 

2. I have noticed that the app will not load on occasion when visiting the domain name I've deployed it under. I have done some research and am still not sure what the issue could be. I'm assuming its because I've deployed it under the 'free' subscriptions/services from azure and as such the performance is going to be highly affected. When visiting the domain name via the azure portal I have to wait anywhere from 0-30 seconds to get the page to load. After that however, the page will load in 0-3 seconds. It appears there is a 'spin up' time for the app to load from the cloud after it not receiving requests for an alloted time frame. I do not know what that time frame is. 

### 2/22/2021
1. Fixed Azure loading issue. 
    - Changed HTTP version from 1.1 to 2.0. 
    - Changed subscription plan from free to 'B1'
    - Changed Node Minor Version to 10.14 from 10.10 (10.10 deprecated)
    - Loading issues were caused by "Always On" being disabled and not changeable under the "Free" plan. Other changes were made in for optimization.

2. User reponse message now shows the specific countries they were asking for instead of just the country code
    - Country code output list remains unchanged as per prompt