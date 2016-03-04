## TinderFilter
Gives users some more flexibility with this fun swiping dating app. 

Originally concieved while talking to my friend Neeraj at a bar. He's a pretty conservative/traditional guy and he remarked that tinder is unable to filter by ethnicities. A previous classmate had used Face++ in a previous project so I decided to give it a whirl. 

#### Instructions 
1. Git clone the repo 
2. `npm install` to get all the modules 
3. Facebook User tokens and IDs are needed for OAuth with Tinder. To get the token, [go here](https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token) and grab that Auth token before it changes! To grab the ID, go to https://graph.facebook.com/me?access_token={insert your access token here} with the token you just got. 
4. From the folder within the terminal, run with `node TinderTest.js`. The interval will run in your terminal until the 100 match limit is reached from Tinder. 

Happy 'swiping'! 


#### Troubleshoot
If you get *Failed to authenticate: Access Denied* change your Auth token with step 3 in the instructions. 

Shout-out to @waynechaw for helping me debug some async callback issues. 
