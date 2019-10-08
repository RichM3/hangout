json.partial! "api/users/user", user: @user

# json.extract! user, :id, :username, :email
# json.joined_groups do 
#     json.array! user.joined_groups.pluck(:id)
# end
