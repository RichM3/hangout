1) CSS styling - a few hangups
-- adding the image to the window
-- styling the header using margins and padding and id when to use % vs fixed values
-- rounding buttons and images
-- creating a dropdown list on hover over


2) Added email to login form and forgot to add email to strong: user_params to display on group page - had to waterfall debug to find the issue.  

3) Clear session errors to remove them from passing from login to signup forms.
-- Had to create a action creator and an ajax action creator and a new case statment to my reducer and a componentWillUnmount method to the react component


4) The headers and footer on my pages are not the same so I had to set the height dynamically passing using ownProps to identify the source of the render

5) The signup page has missing props so I copied the logic of the greeting component to display the links 
similar to the greeting component in BenchBNB -- they exist only if the page is NOT signup.






