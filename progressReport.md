## Issues I've encountered:

### 2/12/2020 
1. Translating HTML forms to react forms were more challening than expected; likely because this is my first time learning react. 

2. I've got the barebones form up and running on local machine. Currently trying to figure out how to get the sent form data as a value.


### 2/14/2020
1. To get form data you need to reference 'this.state.variable_name' figured out my problem from friday after some googling and failing with possible variable names like locEnd, and event.target.value .
2. Struggling to get logic to traverse countries working in 'getRoutes'. Edge cases work but something is likely wrong with for loop. 

### 2/15/2020 
1. .length() is not a function. '.length' itself is. after enabling 'preserve log upon navigation' I was able to get the stack trace that was leading to react autorefreshing the page upon error.

2. Base logic for computing countries traversed working. Now I've got to figure a way to get the output in some sort of polished way, other than logging it to console. 