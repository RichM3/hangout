# debugger
json.extract! @group, :id, :groupname, :description, :location, :leader
json.leaderName @group.leader.username

# Need this now so that when the show page refreshes the proper data is returned