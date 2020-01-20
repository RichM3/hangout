# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

Rsvp.destroy_all
Event.destroy_all
Usergroup.destroy_all
User.destroy_all
Group.destroy_all

DemoUser = User.create!(
    username: "DemoUser",
    password: "password123",
    email: "DemoUser@email.com"
)

JeffUser = User.create!(
    username: "JeffUser",
    password: "password123",
    email: "JeffUser@email.com"
)

EugeneUser = User.create!(
    username: "EugeneUser",
    password: "password123",
    email: "EugeneUser@email.com"
)

MarieUser = User.create!(
    username: "MarieUser",
    password: "password123",
    email: "MarieUser@email.com"
)

Group1 = Group.create!(
    groupname: "Coders For Css",
    description: "Coders who love CSS; -- Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.  CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content. Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device. The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable. The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.",
    location: "NYC",
    leader_id: DemoUser.id
)

Group2 = Group.create!(
    groupname: "The Coffee Spot",
    description: "For coffee lovers and more; -- Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.[2] Coffee plants are now cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, Indian subcontinent, and Africa. The two most commonly grown are C. arabica and C. robusta. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as 'beans') are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.",
    location: "Philly",
    leader_id: DemoUser.id
)

Group3 = Group.create!(
    groupname: "Data Driven",
    description: "Data Driven Developers; -- In computer programming, data-driven programming is a programming paradigm in which the program statements describe the data to be matched and the processing required rather than defining a sequence of steps to be taken.[1] Standard examples of data-driven languages are the text-processing languages sed and AWK,[1] where the data is a sequence of lines in an input stream – these are thus also known as line-oriented languages – and pattern matching is primarily done via regular expressions or line numbers.",
    location: "Connecticut",
    leader_id: DemoUser.id
)

Group4 = Group.create!(
    groupname: "Mens Wellness",
    description: "Mens wellness and health community; -- Men's health refers to a state of complete physical, mental, and social well-being, as experienced by men, and not merely the absence of disease or infirmity.[1][failed verification] Differences in men's health compared to women's can be attributed to biological factors (such as male genitalia or hormones), behavioural factors (men are more likely to make unhealthy or risky choices and less likely to seek medical care) and social factors (e.g.: occupations).[2][failed verification] These often relate to structures such as male genitalia or to conditions caused by hormones specific to, or most notable in, males. Some conditions that affect both men and women, such as cancer, and injury, also manifest differently in men.[3] Men's health issues also include medical situations in which men face problems not directly related to their biology, such as gender-differentiated access to medical treatment and other socioeconomic factors.",
    location: "NJ",
    leader_id: DemoUser.id
)

Group5 = Group.create!(
    groupname: "Long Distance Runners",
    description: "5k and more is our motto; -- Long-distance running, or endurance running, is a form of continuous running over distances of at least 3 kilometres (1.8 miles). Physiologically, it is largely aerobic in nature and requires stamina as well as mental strength. Among mammals, humans are well adapted for running significant distances, and particularly so among primates. The endurance running hypothesis suggests that running endurance in the genus Homo arose because travelling over large areas improved scavenging opportunities and allowed persistence hunting. The capacity for endurance running is also found in migratory ungulates and a limited number of terrestrial carnivores, such as bears, dogs, wolves and hyenas. In modern human society, long-distance running has multiple purposes: people may engage in it for physical exercise, for recreation, as a means of travel, for economic reasons, or for cultural reasons. Long-distance running can also be used as a means to improve cardiovascular health.[4] Running improves aerobic fitness by increasing the activity of enzymes and hormones that stimulate the muscles and the heart to work more efficiently.[5] Endurance running is often a component of physical military training and has been so historically. Professional running is most commonly found in the field of sports, although in pre-industrial times foot messengers would run to deliver information to distant locations. Long-distance running as a form of tradition or ceremony is known among the Hopi and Tarahumara people, among others.[6][7] Distance running can also serve as a bonding exercise for family, friends,[8] colleagues, and has even been associated with nation-building.[9] The social element of distance running has been linked with improved performance.",
    location: "Anywhere",
    leader_id: DemoUser.id
)

Group6 = Group.create!(
    groupname: "Rails Professionals",
    description: "We are the best of the NNJ area; -- Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, HTML, CSS and JavaScript for user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern. Ruby on Rails' emergence in the 2000s greatly influenced web app development, through innovative features such as seamless database table creations, migrations, and scaffolding of views to enable rapid application development. Ruby on Rails' influence on other web frameworks remains apparent today, with many frameworks in other languages borrowing its ideas, including Django in Python, Catalyst in Perl, Laravel and CakePHP in PHP, Phoenix in Elixir, Play in Scala, and Sails.js in Node.js.",
    location: "NJ",
    leader_id: JeffUser.id
)

Group7 = Group.create!(
    groupname: "Green Earthers",
    description: "We will save the earth; -- Green earth, also known as terre verte and Verona green, is an inorganic pigment derived from the minerals celadonite and glauconite.[1][2][3] Its chemical formula is K[(Al,FeIII),(FeII,Mg](AlSi3,Si4)O10(OH)2. First used by the ancient Romans, green earth has been identified on wall paintings at Pompeii and Dura-Europos.[5][6] The Renaissance painter and writer Cennino Cennini claimed that “the ancients never gilded except with this green” being used as a bole, or undercoating. In the Middle Ages one of its best-known uses was in the underpainting of flesh tones. High quality deposits can be found in England, France, Cyprus, Germany and at Monte Baldo near Verona in Italy.[6] The color ranges from neutral yellow green to pale greenish gray to dark matte olive green.",
    location: "NYC",
    leader_id: JeffUser.id
)

Group8 = Group.create!(
    groupname: "Bronco fans",
    description: "Denver Broncos fans in NYC; -- The Denver Broncos are a professional American football franchise based in Denver, Colorado. The Broncos compete as a member club of the National Football League (NFL)'s American Football Conference (AFC) West division. The team began play in 1960 as a charter member of the American Football League (AFL) and joined the NFL as part of the merger in 1970. The Broncos are owned by the Pat Bowlen trust and currently play home games at Empower Field at Mile High (formerly known as Invesco Field at Mile High from 2001–2010, Sports Authority Field at Mile High from 2011–2017, and Broncos Stadium at Mile High from 2018–2019). Prior to that, they played at Mile High Stadium from 1960 to 2000.",
    location: "NY",
    leader_id: JeffUser.id
)

Group9 = Group.create!(
    groupname: "Learning Chinese",
    description: "Enthusiast of learning chinese in upstate NY; -- Chinese (simplified Chinese: 汉语; traditional Chinese: 漢語; pinyin: Hànyǔ; literally: 'Han language'; or especially though not exclusively for written Chinese: 中文; Zhōngwén; 'Chinese writing') is a group of languages that forms the Sinitic branch of the Sino-Tibetan languages. Chinese languages are spoken by the ethnic Chinese majority and many minority ethnic groups in China. About 1.2 billion people (around 16% of the world's population) speak some form of Chinese as their first language.",
    location: "Upstate NY",
    leader_id: MarieUser.id
)

Group10 = Group.create!(
    groupname: "New England Soccor",
    description: "Soccor - we meet all over Connecticut to play; -- The New England Revolution is an American professional soccer club based in the Greater Boston area that competes in Major League Soccer (MLS), in the Eastern Conference of the league. It is one of the ten charter clubs of MLS, having competed in the league since its inaugural season. The club is owned by Robert Kraft, who also owns the New England Patriots along with his son, Jonathan Kraft. The name 'Revolution' refers to the New England region's significant involvement in the American Revolution that took place from 1775–1783.",
    location: "Connecticut",
    leader_id: MarieUser.id
)

Group11 = Group.create!(
    groupname: "Subway riders stories",
    description: "We message about our wonderful subway experiences; -- The New York City Subway is a rapid transit system owned by the City of New York and leased to the New York City Transit Authority,[13] a subsidiary agency of the state-run Metropolitan Transportation Authority (MTA).[14] Opened in 1904, the New York City Subway is one of the world's oldest public transit systems, one of the most-used, and the one with the most stations.[15] The New York City Subway is the largest rapid transit system in the world by number of stations, with 472 stations in operation[16] (424 if stations connected by transfers are counted as single stations).[1] Stations are located throughout the boroughs of Manhattan, Brooklyn, Queens, and the Bronx. The system offers service 24 hours per day, every day of the year, though some routes may operate only part-time.[16] By annual ridership, the New York City Subway is the busiest rapid transit system in both the Western Hemisphere and the Western world, as well as the ninth-busiest rapid transit rail system in the world.[17] In 2017, the subway delivered over 1.72 billion rides, averaging approximately 5.6 million daily rides on weekdays and a combined 5.7 million rides each weekend (3.2 million on Saturdays, 2.5 million on Sundays).[1] On September 23, 2014, more than 6.1 million people rode the subway system, establishing the highest single-day ridership since ridership was regularly monitored in 1985.",
    location: "NYC",
    leader_id: EugeneUser.id
)

Group12 = Group.create!(
    groupname: "Free NYC Photography Workshops",
    description: "We will teach you the best shots of NYC; -- The New York Institute of Photography was founded in 1910, according to early brochures, by Emile Brunel. At the time, he named the school the E. Brunel School of Photography.[2] Emile was a sculptor/artist/photographer best known for his celebrity portraits. NYIP was officially registered as a business with the Supreme Course of the State of New York in 1915. In its early days, NYIP was a residential school, with offices in Manhattan, Brooklyn, and Chicago. The instructors were always professional photographers. The Manhattan offices, where the main course was originally developed covered 15,000 square feet (1,400 m2) of space. A home study course was added in the 1940s but was not as popular as the face to face lectures.",
    location: "NYC",
    leader_id: EugeneUser.id
)


# Begin loading data Leader-Memberships to groups - (Groups must have leaders and those leaders are also group members)
# Groups led by User1 (DemoUser)

UG1 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group1.id
)

UG2 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group2.id
)

UG3 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group3.id
)

UG4 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group4.id
)

UG5 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group5.id
)

# Groups led by User2 (JeffUser)

UG6 = Usergroup.create!(
    user_id: JeffUser.id,
    group_id: Group6.id
)

UG7 = Usergroup.create!(
    user_id: JeffUser.id,
    group_id: Group7.id
)

UG8 = Usergroup.create!(
    user_id: JeffUser.id,
    group_id: Group8.id
)

# Groups led by User3 (EugeneUser)

UG9 = Usergroup.create!(
    user_id: MarieUser.id,
    group_id: Group9.id
)

UG10 = Usergroup.create!(
    user_id: MarieUser.id,
    group_id: Group10.id
)

# Groups led by User4 (MarieUser)

UG11 = Usergroup.create!(
    user_id: EugeneUser.id,
    group_id: Group11.id
)

UG12 = Usergroup.create!(
    user_id: EugeneUser.id,
    group_id: Group12.id
)

# Begin loading memberships to groups - (not leaders)

# Adding the DemoUser to JeffUser groups as a member
UG13 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group6.id
)

UG14 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group7.id
)

UG15 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group8.id
)

# Adding the DemoUser to EugeneUser groups as a member
UG16 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group9.id
)

UG17 = Usergroup.create!(
    user_id: DemoUser.id,
    group_id: Group10.id
)


# Adding the JeffUser to DemoUser groups as a member
UG18 = Usergroup.create!(
    user_id: JeffUser.id,
    group_id: Group1.id
)

UG19 = Usergroup.create!(
    user_id: JeffUser.id,
    group_id: Group2.id
)

UG20 = Usergroup.create!(
    user_id: JeffUser.id,
    group_id: Group3.id
)


Event1 = Event.create!(
    eventname: "Animations and keysframes",
    description: "Discussion of CSS animations and keyframes and other great tools; -- In software packages that support animation, especially 3D graphics, there are many parameters that can be changed for any one object. One example of such an object is a light (In 3D graphics, lights function similarly to real-world lights. They cause illumination, cast shadows, and create specular highlights). Lights have many parameters including light intensity, beam size, light color, and the texture cast by the light. Supposing that an animator wants the beam size to change smoothly from one value to another within a predefined period of time, that could be achieved by using keyframes. At the start of the animation, a beam size value is set. Another value is set for the end of the animation. Thus, the software program automatically interpolates the two values, creating a smooth transition.",
    # location: "AWS downtown NYC",
    lat: 37.773972,
    lng: -122.431297,
    starttime: '03/03/2020 09:30:00',
    endtime: '03/03/2020 10:30:00',
    group_id: Group1.id
)

Rsvp1 = Rsvp.create!(
    user_id: DemoUser.id,
    event_id: Event1.id,
    attending: true
)

Event2 = Event.create!(
    eventname: "Hover effects",
    description: "Hover effects and the many great uses; -- In computing, a mouseover, mouse hover or hover box is a graphical control element that is activated when the user moves or hovers the pointer over a trigger area, usually with a mouse, but also possible with a digital pen. Mouseover control elements are common in web browsers. For example, hovering over a hyperlink triggers the mouseover control element to display a URL on the status bar. Site designers can define their own mouseover events using JavaScript[1] or Cascading Style Sheets.",
    # location: "Holiday Inn Conference Center on 8th Ave",
    lat: 37.773972,
    lng: -122.431297,
    starttime: '04/04/2020 07:30:00',
    endtime: '04/04/2020 08:30:00',
    group_id: Group1.id
)

Rsvp2 = Rsvp.create!(
    user_id: DemoUser.id,
    event_id: Event2.id,
    attending: true
)

Event3 = Event.create!(
    eventname: "Coffee vs Espresso",
    description: "Espresso or Coffee, which one is better? -- Espresso is generally thicker than coffee brewed by other methods, has a higher concentration of suspended and dissolved solids, and has crema on top (a foam with a creamy consistency).[1] As a result of the pressurized brewing process, the flavors and chemicals in a typical cup of espresso are very concentrated. The three dispersed phases in espresso are what make this beverage so unique. The first dispersed phase is an emulsion of oil droplets. The second phase is suspended solids, while the third is the layer of gas bubbles or foam. The dispersion of very small oil droplets is perceived in the mouth as creamy. This characteristic of espresso contributes to what is known as the body of the beverage. These oil droplets preserve some of the aromatic compounds that are lost to the air in other coffee forms. This preserves the strong coffee flavor present in the espresso. [2] Espresso is also the base for other types of coffee, including caffè latte, cappuccino, caffè macchiato, caffè mocha, flat white, or caffè Americano.",
    # location: "Starbucks on 5th",
    lat: 37.773972,
    lng: -122.431297,
    starttime: '12/03/2020 05:30:00',
    endtime: '12/03/2020 11:30:00',
    group_id: Group2.id
)

Rsvp3 = Rsvp.create!(
    user_id: DemoUser.id,
    event_id: Event3.id,
    attending: true
)

# Non-leader groups for testing events index
Event4 = Event.create!(
    eventname: "Superbowl 2020",
    description: "For all those who want to watch even without the Broncos? -- Super Bowl LIV, the 54th Super Bowl and the 50th modern-era National Football League (NFL) championship game will decide the league champion for the league's 2019 and 100th season. The game is scheduled to be played on February 2, 2020 at Hard Rock Stadium in Miami Gardens, Florida, marking the seventh different decade for the Super Bowl. This will be the 11th Super Bowl hosted by the South Florida region and the sixth Super Bowl hosted in Miami Gardens, which hosted Super Bowl XLIV ten years earlier.",
    # location: "Mile High Stadium",
    lat: 37.773972,
    lng: -122.431297,
    starttime: '02/04/2020 18:30:00',
    endtime: '02/04/2020 21:30:00',
    group_id: Group8.id
)

Rsvp4 = Rsvp.create!(
    user_id: JeffUser.id,
    event_id: Event4.id,
    attending: true
)

Event5 = Event.create!(
    eventname: "After Superbowl 2020",
    description: "Nursing the hangover? A discussion of Superbowl 2020 events -- Super Bowl LIV, the 54th Super Bowl and the 50th modern-era National Football League (NFL) championship game will decide the league champion for the league's 2019 and 100th season. The game is scheduled to be played on February 2, 2020 at Hard Rock Stadium in Miami Gardens, Florida, marking the seventh different decade for the Super Bowl. This will be the 11th Super Bowl hosted by the South Florida region and the sixth Super Bowl hosted in Miami Gardens, which hosted Super Bowl XLIV ten years earlier.",
    # location: "Mile High Stadium",
    lat: 37.773972,
    lng: -122.431297,
    starttime: '02/05/2020 18:30:00',
    endtime: '02/05/2020 21:30:00',
    group_id: Group8.id
)

Rsvp5 = Rsvp.create!(
    user_id: JeffUser.id,
    event_id: Event5.id,
    attending: true
)
