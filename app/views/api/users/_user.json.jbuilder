json.extract! user, :id, :username, :email
json.groupIds user.memberships.pluck(:group_id)
json.rsvpIds user.rsvps.pluck(:id)
