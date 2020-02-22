
json.extract! @group, :id, :groupname, :description, :location, :leader, :photo

if (@group.photo.attached?)
    json.photoUrl url_for(@group.photo)
else
    json.photoUrl "NA"
end

json.leaderName @group.leader.username
