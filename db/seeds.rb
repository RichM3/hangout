# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)


# Destroy all data to reload DB
Rsvp.destroy_all
Event.destroy_all
Usergroup.destroy_all
User.destroy_all
Group.destroy_all


# Create Users
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


# Create Groups
Group1 = Group.create!(
    groupname: "Coders For Css",
    description: "Coders who love CSS; -- Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.  CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content. Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device. The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable. The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.",
    location: "NYC",
    leader_id: DemoUser.id
)

Group2 = Group.create!(
    groupname: "The Coffee Spot",
    description: "For coffee lovers and more; -- Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean. Coffee plants are now cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, Indian subcontinent, and Africa. The two most commonly grown are C. arabica and C. robusta. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as 'beans') are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.",
    location: "Philly",
    leader_id: DemoUser.id
)

Group3 = Group.create!(
    groupname: "Data Driven",
    description: "Data Driven Developers; -- In computer programming, data-driven programming is a programming paradigm in which the program statements describe the data to be matched and the processing required rather than defining a sequence of steps to be taken. Standard examples of data-driven languages are the text-processing languages sed and AWK, where the data is a sequence of lines in an input stream – these are thus also known as line-oriented languages – and pattern matching is primarily done via regular expressions or line numbers.",
    location: "Connecticut",
    leader_id: DemoUser.id
)

Group4 = Group.create!(
    groupname: "Mens Wellness",
    description: "Mens wellness and health community; -- Men's health refers to a state of complete physical, mental, and social well-being, as experienced by men, and not merely the absence of disease or infirmity. Differences in men's health compared to women's can be attributed to biological factors (such as male genitalia or hormones), behavioural factors (men are more likely to make unhealthy or risky choices and less likely to seek medical care) and social factors (e.g.: occupations). These often relate to structures such as male genitalia or to conditions caused by hormones specific to, or most notable in, males. Some conditions that affect both men and women, such as cancer, and injury, also manifest differently in men. Men's health issues also include medical situations in which men face problems not directly related to their biology, such as gender-differentiated access to medical treatment and other socioeconomic factors.",
    location: "NJ",
    leader_id: DemoUser.id
)

Group5 = Group.create!(
    groupname: "Long Distance Runners",
    description: "5k and more is our motto; -- Long-distance running, or endurance running, is a form of continuous running over distances of at least 3 kilometres (1.8 miles). Physiologically, it is largely aerobic in nature and requires stamina as well as mental strength. Among mammals, humans are well adapted for running significant distances, and particularly so among primates. The endurance running hypothesis suggests that running endurance in the genus Homo arose because travelling over large areas improved scavenging opportunities and allowed persistence hunting. The capacity for endurance running is also found in migratory ungulates and a limited number of terrestrial carnivores, such as bears, dogs, wolves and hyenas. In modern human society, long-distance running has multiple purposes: people may engage in it for physical exercise, for recreation, as a means of travel, for economic reasons, or for cultural reasons. Long-distance running can also be used as a means to improve cardiovascular health. Running improves aerobic fitness by increasing the activity of enzymes and hormones that stimulate the muscles and the heart to work more efficiently. Endurance running is often a component of physical military training and has been so historically. Professional running is most commonly found in the field of sports, although in pre-industrial times foot messengers would run to deliver information to distant locations. Long-distance running as a form of tradition or ceremony is known among the Hopi and Tarahumara people, among others. Distance running can also serve as a bonding exercise for family, friends, colleagues, and has even been associated with nation-building. The social element of distance running has been linked with improved performance.",
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
    description: "We will save the earth; -- Green earth, also known as terre verte and Verona green, is an inorganic pigment derived from the minerals celadonite and glauconite. Its chemical formula is K[(Al,FeIII),(FeII,Mg](AlSi3,Si4)O10(OH)2. First used by the ancient Romans, green earth has been identified on wall paintings at Pompeii and Dura-Europos. The Renaissance painter and writer Cennino Cennini claimed that “the ancients never gilded except with this green” being used as a bole, or undercoating. In the Middle Ages one of its best-known uses was in the underpainting of flesh tones. High quality deposits can be found in England, France, Cyprus, Germany and at Monte Baldo near Verona in Italy. The color ranges from neutral yellow green to pale greenish gray to dark matte olive green.",
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
    description: "We message about our wonderful subway experiences; -- The New York City Subway is a rapid transit system owned by the City of New York and leased to the New York City Transit Authority, a subsidiary agency of the state-run Metropolitan Transportation Authority (MTA). Opened in 1904, the New York City Subway is one of the world's oldest public transit systems, one of the most-used, and the one with the most stations. The New York City Subway is the largest rapid transit system in the world by number of stations, with 472 stations in operation (424 if stations connected by transfers are counted as single stations). Stations are located throughout the boroughs of Manhattan, Brooklyn, Queens, and the Bronx. The system offers service 24 hours per day, every day of the year, though some routes may operate only part-time. By annual ridership, the New York City Subway is the busiest rapid transit system in both the Western Hemisphere and the Western world, as well as the ninth-busiest rapid transit rail system in the world. In 2017, the subway delivered over 1.72 billion rides, averaging approximately 5.6 million daily rides on weekdays and a combined 5.7 million rides each weekend (3.2 million on Saturdays, 2.5 million on Sundays). On September 23, 2014, more than 6.1 million people rode the subway system, establishing the highest single-day ridership since ridership was regularly monitored in 1985.",
    location: "NYC",
    leader_id: EugeneUser.id
)

Group12 = Group.create!(
    groupname: "Free NYC Photography Workshops",
    description: "We will teach you the best shots of NYC; -- The New York Institute of Photography was founded in 1910, according to early brochures, by Emile Brunel. At the time, he named the school the E. Brunel School of Photography. Emile was a sculptor/artist/photographer best known for his celebrity portraits. NYIP was officially registered as a business with the Supreme Course of the State of New York in 1915. In its early days, NYIP was a residential school, with offices in Manhattan, Brooklyn, and Chicago. The instructors were always professional photographers. The Manhattan offices, where the main course was originally developed covered 15,000 square feet (1,400 m2) of space. A home study course was added in the 1940s but was not as popular as the face to face lectures.",
    location: "NYC",
    leader_id: EugeneUser.id
)

Group13 = Group.create!(
    groupname: "NYC Travelers",
    description: "We share stories of our travels; -- The origin of the word 'travel' is most likely lost to history. The term 'travel' may originate from the Old French word travail, which means 'work'. According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century. It also states that the word comes from Middle English travailen, travelen (which means to torment, labor, strive, journey) and earlier from Old French travailler (which means to work strenuously, toil). In English we still occasionally use the words 'travail', which means struggle. According to Simon Winchester in his book The Best Travelers' Tales (2004), the words 'travel' and 'travail' both share an even more ancient root: a Roman instrument of torture called the tripalium (in Latin it means 'three stakes', as in to impale). This link may reflect the extreme difficulty of travel in ancient times. Travel in modern times may or may not be much easier depending upon the destination. Travel to Mount Everest, the Amazon rainforest, extreme tourism, and adventure travel are more difficult forms of travel. Travel can also be more difficult depending on the method of travel, such as by bus, cruise ship, or even by bullock cart.",
    location: "NYC",
    leader_id: EugeneUser.id
)

Group14 = Group.create!(
    groupname: "America's Best Ice Cream spots",
    description: "Ice cream (derived from earlier iced cream or cream ice) is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavored with a sweetener, either sugar or an alternative, and any spice, such as cocoa or vanilla. Colourings are usually added, in addition to stabilizers. The mixture is stirred to incorporate air spaces and cooled below the freezing point of water to prevent detectable ice crystals from forming. The result is a smooth, semi-solid foam that is solid at very low temperatures (below 2 °C or 35 °F). It becomes more malleable as its temperature increases.",
    location: "Everywhere!",
    leader_id: EugeneUser.id
)

Group15 = Group.create!(
    groupname: "Learning Python",
    description: "We are actively learning Python; -- Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
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


# Groups led by User4 (MarieUser)
UG9 = Usergroup.create!(
    user_id: MarieUser.id,
    group_id: Group9.id
)

UG10 = Usergroup.create!(
    user_id: MarieUser.id,
    group_id: Group10.id
)


# Groups led by User3 (EugeneUser)
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


# Added more seed data groups to fill out the application.
UG21 = Usergroup.create!(
    user_id: EugeneUser.id,
    group_id: Group13.id
)

UG22 = Usergroup.create!(
    user_id: EugeneUser.id,
    group_id: Group14.id
)

UG23 = Usergroup.create!(
    user_id: EugeneUser.id,
    group_id: Group15.id
)



# Begin loading Events
# Events where DemoUser is the leader of group so they will always be listed in the events_index page
# Note event dates are in a dd/mm/yyyy format when entered into the DB in the seed file.
Event1 = Event.create!(
    eventname: "Animations and keysframes",
    description: "Discussion of CSS animations and keyframes and other great tools; -- In software packages that support animation, especially 3D graphics, there are many parameters that can be changed for any one object. One example of such an object is a light (In 3D graphics, lights function similarly to real-world lights. They cause illumination, cast shadows, and create specular highlights). Lights have many parameters including light intensity, beam size, light color, and the texture cast by the light. Supposing that an animator wants the beam size to change smoothly from one value to another within a predefined period of time, that could be achieved by using keyframes. At the start of the animation, a beam size value is set. Another value is set for the end of the animation. Thus, the software program automatically interpolates the two values, creating a smooth transition.",
    location: "350 W Broadway, New York, NY 10013, USA",
    lat: 40.7227824,
    lng: -74.0036639,
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
    description: "Hover effects and the many great uses; -- In computing, a mouseover, mouse hover or hover box is a graphical control element that is activated when the user moves or hovers the pointer over a trigger area, usually with a mouse, but also possible with a digital pen. Mouseover control elements are common in web browsers. For example, hovering over a hyperlink triggers the mouseover control element to display a URL on the status bar. Site designers can define their own mouseover events using JavaScript or Cascading Style Sheets.",
    location: "22 W 38th St, New York, NY 10018, USA",
    lat: 40.7251534,
    lng: -73.9967885,
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
    description: "Espresso or Coffee, which one is better? -- Espresso is generally thicker than coffee brewed by other methods, has a higher concentration of suspended and dissolved solids, and has crema on top (a foam with a creamy consistency). As a result of the pressurized brewing process, the flavors and chemicals in a typical cup of espresso are very concentrated. The three dispersed phases in espresso are what make this beverage so unique. The first dispersed phase is an emulsion of oil droplets. The second phase is suspended solids, while the third is the layer of gas bubbles or foam. The dispersion of very small oil droplets is perceived in the mouth as creamy. This characteristic of espresso contributes to what is known as the body of the beverage. These oil droplets preserve some of the aromatic compounds that are lost to the air in other coffee forms. This preserves the strong coffee flavor present in the espresso.  Espresso is also the base for other types of coffee, including caffè latte, cappuccino, caffè macchiato, caffè mocha, flat white, or caffè Americano.",
    location: "New York, NY 10018, USA",
    lat: 40.75375085,
    lng: -73.9835368,
    starttime: '12/03/2020 05:30:00',
    endtime: '12/03/2020 11:30:00',
    group_id: Group2.id
)

Rsvp3 = Rsvp.create!(
    user_id: DemoUser.id,
    event_id: Event3.id,
    attending: true
)


# Events where DemoUser is not the leader of group so he may leave the group and ensure these events are not in the events_index after leaving
Event4 = Event.create!(
    eventname: "Superbowl 2020",
    description: "For all those who want to watch even without the Broncos? -- Super Bowl LIV, the 54th Super Bowl and the 50th modern-era National Football League (NFL) championship game will decide the league champion for the league's 2019 and 100th season. The game is scheduled to be played on February 2, 2020 at Hard Rock Stadium in Miami Gardens, Florida, marking the seventh different decade for the Super Bowl. This will be the 11th Super Bowl hosted by the South Florida region and the sixth Super Bowl hosted in Miami Gardens, which hosted Super Bowl XLIV ten years earlier.",
    location: "1701 Bryant St, Denver, CO 80204",
    lat: 39.743952,
    lng: -105.01922281,
    starttime: '02/02/2020 18:30:00',
    endtime: '02/02/2020 21:30:00',
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
    location: "1434 Blake St, Denver, CO 80202",
    lat: 39.7490717,
    lng: -105.0008228,
    starttime: '03/02/2020 18:30:00',
    endtime: '03/02/2020 21:30:00',
    group_id: Group8.id
)

Rsvp5 = Rsvp.create!(
    user_id: JeffUser.id,
    event_id: Event5.id,
    attending: true
)

Event6 = Event.create!(
    eventname: "CSS transform-style Property",
    description: "Discussion of CSS transform property; -- The transform-style property specifies how nested elements are rendered in 3D space. Note: This property must be used together with the transform property. To better understand the transform-style property see the W3schools.",
    location: "350 W Broadway, New York, NY 10013, USA",
    lat: 40.7227824,
    lng: -74.0036639,
    starttime: '15/07/2020 09:30:00',
    endtime: '15/07/2020 10:00:00',
    group_id: Group1.id
)

Rsvp6 = Rsvp.create!(
    user_id: DemoUser.id,
    event_id: Event6.id,
    attending: true
)

Event7 = Event.create!(
    eventname: "COFFEE FEST NEW YORK 2020",
    description: "COFFEE FEST NEW YORK 2020; --Co-located with the International Restaurant & Foodservice Show of New York and Healthy Food Expo New York. Where passionate specialty beverage professionals learn B2B skills, receive education and experience new products, alongside great networking at the largest professional food and beverage experience in the Northeast.",
    location: "429 11th Ave, New York, NY 10001, USA",
    lat: 40.757797,
    lng: -74.0023264,
    starttime: '08/03/2020 09:30:00',
    endtime: '08/03/2020 10:00:00',
    group_id: Group2.id
)

Rsvp7 = Rsvp.create!(
    user_id: DemoUser.id,
    event_id: Event7.id,
    attending: true
)

Event8 = Event.create!(
    eventname: "INTRO TO TABLEAU: DATA DRIVEN INSIGHTS",
    description: "We will be going over how to: -- Connect to and bring real-world data into Tableau, Easily clean, prepare and filter data for exploration and interactive visual analysis, Explore different data types and methods to drill up and down into data detail, Build a variety of analysis chart types, including beautiful maps, time-series, and forecasts, Use built-in table calculations, plus create calculated fields to enhance your analysis, Work with dates, including discrete and continuous-time aggregations, Apply one-click advanced analytics, like forecasting, to extend the power of data visualizations, Combine visualizations into dashboards, along with data filters and interactivity, Present insights by combining multiple “Vizzes” into interactive dashboards, Be inspired to present and even animate your Tableau story from a legendary master data storyteller, See how to create an online portfolio of your dashboards with a free Tableau Public account, Receive a library of best practice guidelines and understand how to pursue Tableau industry certification.",
    location: "476 5th Ave, New York, NY 10018, USA",
    lat: 40.75318230000001,
    lng: -73.9822534,
    starttime: '07/04/2020 10:30:00',
    endtime: '07/04/2020 11:45:00',
    group_id: Group3.id
)

Rsvp8 = Rsvp.create!(
    user_id: DemoUser.id,
    event_id: Event8.id,
    attending: true
)

Event9 = Event.create!(
    eventname: "Health and Wellness Day",
    description: "All Day Physical Test; --Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness. It is performed for various reasons, to aid growth and improve strength, preventing aging, developing muscles and the cardiovascular system, honing athletic skills, weight loss or maintenance, improving health and also for enjoyment. Many individuals choose to exercise outdoors where they can congregate in groups, socialize, and enhance well-being. In terms of health benefits, the amount of recommended exercise depends upon the goal, the type of exercise, and the age of the person. Even doing a small amount of exercise is healthier than doing none.",
    location: "5 Bryant Park, New York, NY 10018, USA",
    lat: 40.7539299,
    lng: -73.98549779999999,
    starttime: '10/05/2020 09:30:00',
    endtime: '10/05/2020 10:00:00',
    group_id: Group4.id
)

Rsvp9 = Rsvp.create!(
    user_id: DemoUser.id,
    event_id: Event9.id,
    attending: true
)

Event10 = Event.create!(
    eventname: "Rails Hackathon",
    description: "Rails, Ruby and the works!!!; --Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, HTML, CSS and JavaScript for user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern.",
    location: "Church Street Station, New York, NY 10008, USA",
    lat: 40.7108603,
    lng: -74.010714,
    starttime: '28/06/2020 14:00:00',
    endtime: '28/06/2020 18:00:00',
    group_id: Group6.id
)

Rsvp10 = Rsvp.create!(
    user_id: JeffUser.id,
    event_id: Event10.id,
    attending: true
)

