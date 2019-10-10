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
    leader_id: 1
)

Group2 = Group.create(
    groupname: "The Coffee Spot",
    description: "For chocolate lovers and more",
    location: "Philly",
    leader_id: 2
)

Group3 = Group.create(
    groupname: "Bronco fans of NYC",
    description: "Denver Broncos fans in NYC",
    location: "NY",
    leader_id: 3
)

Group4 = Group.create(
    groupname: "Rails professional of North NJ",
    description: "We are the best of the NNJ area",
    location: "NJ",
    leader_id: 4
)

Group5 = Group.create(
    groupname: "Data Driven NYC",
    description: "A venture capital firm",
    location: "Connecticut",
    leader_id: 1
)

Group6 = Group.create(
    groupname: "Flat Earthers NYC",
    description: "We will prove the earth is flat",
    location: "NYC",
    leader_id: 3
)

Group7 = Group.create(
    groupname: "Mens Wellness",
    description: "Mens wellness and health community",
    location: "NJ",
    leader_id: 1
)

Group8 = Group.create(
    groupname: "Long Distance Runners",
    description: "5k and more is our motto",
    location: "Anywhere",
    leader_id: 1
)

Group9 = Group.create(
    groupname: "Learning Chinese",
    description: "Enthusiast of learnin chinese in upstate NY",
    location: "Upstate NY",
    leader_id: 1
)

Group10 = Group.create(
    groupname: "Subway riders NYC",
    description: "We message about our wonderful subway experiences",
    location: "NYC",
    leader_id: 2
)

Group11 = Group.create(
    groupname: "Free NYC Photography Workshops",
    description: "We will teach you the best shots of NYC",
    location: "NYC",
    leader_id: 2
)

Group12 = Group.create(
    groupname: "Connecticut Soccor",
    description: "Soccor - we meet all over Connecticut to play",
    location: "Connecticut",
    leader_id: 3
)
