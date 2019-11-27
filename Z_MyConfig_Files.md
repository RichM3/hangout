
-- NPM Install Line
npm install webpack webpack-cli react react-dom react-redux redux redux-logger @babel/core @babel/preset-react @babel/preset-env babel-loader
bundle install

-- AirBnB Calendar code:
- Install dependencies
- Ensure packages are installed with correct version numbers by running:

(
  export PKG=react-dates;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)

Then, run:

npm install --save react-dates moment@>=#.## react@>=#.## react-dom@>=#.## react-addons-shallow-compare@>=#.##

-----------------------------------------------

Must add the css-loader and style-loader to webpack-config so you can ==> import 'react-dates/lib/css/_datepicker.css';

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }

-----------------------------------------------


bundle exec rails db:setup              ===> create the DB
bundle exec rails db:seed               ===> seed the db
npm run webpack                         ===> start webpack for this app

rails routes                    ==> Show route information
rails s                         ==> start rails

-- Heroku commands
git push heroku master
heroku run bundle exec rails db:seed


-- Heroku debugging cmds
heroku run bundle exec rails c
heroku logs --tail


-- Drop the db
rails db:drop


-- include DB schema in each model file
bundle exec annotate


// adds routing to application
npm install --save react-router-dom


-- Tech versions of the application w commands
JavaScript 
Ruby 2.5.1      -- ruby -v
React 16.10.2   -- npm list react
Redux 4.0.4     -- npm list redux
Ruby on Rails 5.2.3     -- rails -v
PostgreSQL
webpack 4.41.0          -- npm list webpack

