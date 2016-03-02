## TinderFilter
Gives users some more flexibility with this fun swiping dating app. 

Originally concieved while talking to my friend Neeraj at a bar. He's a pretty conservative/traditional guy and he remarked that tinder is unable to filter by ethnicities. A previous classmate had used Face++ in a previous project so I decided to give it a whirl. 

#### Instructions 
1. Git clone the repo 
2. `npm install` to get all the modules 
3. Facebook User tokens and IDs are needed for OAuth with Tinder. To get the token, [go here](https://www.facebook.com/connect/login_success.html#access_token=CAAGm0PX4ZCpsBAHBfNuDgZCLQHbSZBRmjZAM9SYCwXnrmt5h3aEHcbIK9LIIfz9yPcUs5yfB3zlLPmRbtZBIB1EeZAmis37apncXNL1khV2vdlUfDlszdSRQgKvF5r5rSXFWTQpWW42KZBgW8ZCddKFLRzOBHBRWrRkXiU93wJXcw7xXPnFP7ZBqoGVngWddRBqVwHGjHtQK0ZAFjkZClKXOQ5E&expires_in=4457) and grab that Auth token before it changes! To grab the ID, go to https://graph.facebook.com/me?access_token={insert your access token here} with the token you just got. 
4. From the folder within the terminal, run with `node TinderTest.js`. The interval will run in your terminal until the 100 match limit is reached from Tinder. 

Happy 'swiping'! 


#### Troubleshoot
If you get *Failed to authenticate: Access Denied* change your Auth token with step 3 in the instructions. 

Shout-out to @waynechaw for helping me debug some async callback issues. 
