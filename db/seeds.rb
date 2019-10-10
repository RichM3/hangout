# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Group.destroy_all

DemoUser = User.create(
    username: "DemoUser",
    password: "password123",
    email: "DemoUser@email.com"
)

JeffUser = User.create(
    username: "JeffUser",
    password: "password123",
    email: "JeffUser@email.com"
)

EugeneUser = User.create(
    username: "EugeneUser",
    password: "password123",
    email: "EugeneUser@email.com"
)

MarieUser = User.create(
    username: "MarieUser",
    password: "password123",
    email: "MarieUser@email.com"
)

Group1 = Group.create(
    groupname: "Coders For Css",
    description: "Coders who love CSS",
    location: "NYC",
    leader_id: DemoUser.id
)

Group2 = Group.create(
    groupname: "The Coffee Spot",
    description: "For chocolate lovers and more",
    location: "Philly",
    leader_id: DemoUser.id
)

Group3 = Group.create(
    groupname: "Learning Chinese",
    description: "Enthusiast of learning chinese in upstate NY",
    location: "Upstate NY",
    leader_id: MarieUser.id
)

Group4 = Group.create(
    groupname: "Rails Professionals",
    description: "We are the best of the NNJ area",
    location: "NJ",
    leader_id: JeffUser.id
)

Group5 = Group.create(
    groupname: "Data Driven NYC",
    description: "A venture capital firm",
    location: "Connecticut",
    leader_id: DemoUser.id
)

Group6 = Group.create(
    groupname: "Green Earthers",
    description: "We will save the earth",
    location: "NYC",
    leader_id: JeffUser.id
)

Group7 = Group.create(
    groupname: "Mens Wellness",
    description: "Mens wellness and health community",
    location: "NJ",
    leader_id: DemoUser.id
)

Group8 = Group.create(
    groupname: "Long Distance Runners",
    description: "5k and more is our motto",
    location: "Anywhere",
    leader_id: DemoUser.id
)

Group9 = Group.create(
    groupname: "Bronco fans",
    description: "Denver Broncos fans in NYC",
    location: "NY",
    leader_id: JeffUser.id
)

Group10 = Group.create(
    groupname: "Subway riders stories",
    description: "We message about our wonderful subway experiences",
    location: "NYC",
    leader_id: EugeneUser.id
)

Group11 = Group.create(
    groupname: "Free NYC Photography Workshops",
    description: "We will teach you the best shots of NYC",
    location: "NYC",
    leader_id: EugeneUser.id
)

Group12 = Group.create(
    groupname: "New England Soccor",
    description: "Soccor - we meet all over Connecticut to play",
    location: "Connecticut",
    leader_id: MarieUser.id
)
