# TODO

1. ~~Figure out how to update list~~
2. ~~Push that list to the display. I can already push some text when the button is clicked~~
    - ~~Output is pushed, but there are no spaces between the array values~~ 
    - ~~Also, 'list' output is not in a formatted view~~
3. Style the app
4. Figure out how to push the app to either azure or heroku. 
   Azure likely will be a Reach goal, depending on when app functionality is working as intended on local machine
5. Write README so that a fresh junior dev could put the project together.
6. Implement input constraints
7. Put together docker file? likely another Reach goal
8. setup unit tests somehow? Definite Reach goal 


## Issues I've encountered:

### 2/12/2020 
1. Translating HTML forms to react forms were more challening than expected; likely because this is my first time learning react. 

2. I've got the barebones form up and running on local machine. Currently trying to figure out how to get the sent form data as a value.


### 2/14/2020
1. To get form data you need to reference 'this.state.variable_name' figured out my problem from friday after some googling and failing with possible variable names like locEnd, and event.target.value .
2. Struggling to get logic to traverse countries working in 'getRoutes'. Edge cases work but something is likely wrong with for loop. 

### 2/15/2020 
1. .length() is not a function. '.length' itself is (duh). After enabling 'preserve log upon navigation' I was able to get the stack trace that was leading to react autorefreshing the page upon error.

2. Base logic for computing countries traversed working. Now I've got to figure a way to get the output in some sort of polished way, other than logging it to console. 

### 2/16/2020
1. Output is pushed to the user's view when the given input is entered. 

