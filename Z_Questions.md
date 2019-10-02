
- Why is this?
<!-- <script type="text/javascript">
  window.currentUser = { id: 3, username: "sennecy_the_cat" };
</script> -->


<!-- <% if logged_in? %>
  <script id="bootstrap-current-user" type="text/javascript">
  	window.currentUser = <%= render("api/users/user.json.jbuilder",
  		user: current_user).html_safe %>
  </script>
<% end %> -->



CSS notes:
Grab font sizes & styles
grab colors
grab margins and paddings to divs

plan:
1) start with header
2) create shell body
3) complete footer
4) complete body


header ==>  Header > nax > div > multiple divs

background: #ffffff
padding 16px
570 x 78



      <h1 class="header-logo">
        <a href="#">App Academy Friends</a>
      </h1>

      <ul class="header-list">
        <li>
          <a href="#">Notifications <strong class="badge">3</strong></a>
          <ul class="header-notifications">
            <li><a href="#">Constance likes your photo.</a></li>
            <li><a href="#">Tommy left you a comment.</a></li>
            <li><a href="#">Jonathan is now following you.</a></li>
          </ul>
        </li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Settings</a></li>
      </ul>





