export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => {
  return(
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
)};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);


// Added this method to update the user information on the groups index page so that on
// componentDidMount the information is properly updated for current_user.groupsIn filter in MSP or groupIndex
export const fetchUserInfo = () => (
  $.ajax({
    method: "GET",
    url: `api/users/${1}`
  })
);
