json.extract! @group, :id, :groupname, :description, :location, :leader
json.leaderName @group.leader.username

