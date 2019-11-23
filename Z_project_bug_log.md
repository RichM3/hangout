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

6) Creating a Demo button -- forgot the     e.preventDefault();
-- also mapped it through the handleSubmit - bad move - caused it to fail first time pressed but worked second time pressed????

7) still not sure why but placing mute on the video tag at the front allowed the video to play - not sure why?

8) implementing a giant switch statement to define what buttons / links should appear in the nav bar - same implementation of the footer
-- The switch then implements classes depending on source the user navigates from- passing a property into each component (like header and footer)
-- then uses a switch to identify what characteristics will be used in the component.  -- CSS styling classes like header size and what buttons appear on the page.

9) forgot the import statement on the page - couldn't find that night but return next morning and fixed in 10 minutes.

10) Using ownProps to extract the ID from URL and get the data required for the fetchGroups code

11) Sticky position to keep the search bar in place on the Groups index page

12) They have a proprietary font so it is hard to match but I did the best I could - I believe

13) Mapped code from the backend switching data using include to map data to and from different arrays

14) used clearfix CSS solution and FLOAT left to ensure the GroupIndex page held data vertically and did not travel outside of the containg div.

15) Div development for all pages - using divs to map all code

16) Using dependent destroy to delete assosciated usergroup memberships when the group is destroyed!!!!!
-- by declaratively telling Rails that there is a connection between the two models
-- https://guides.rubyonrails.org/association_basics.html

17) setState is an Asynchronous process so must pass a callback in if you need a function to work on that updated value immediately after the update
-- https://stackoverflow.com/questions/38558200/react-setstate-not-updating-immediately

18) Needed to promise (.then) the fetchUserInfo so that the component props updated to re-render the component, otherwise without the rerender the inGroups on the Groups_Show page would return with an incorrect group list and therefore be show the incorrect join/leave button.
        this.props.createMembership(this.state.groupId)
            .then(() => this.props.fetchUserInfo());





--- Code to review for Readme
<h3>Ensure errors do not persist</h3>

componentWillUnmount() {
    this.props.clearErrors();
}

<h3>Ensure Page Starts at top</h3>
componentDidMount() {
    window.scrollTo(0, 0)
}


