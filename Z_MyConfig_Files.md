
-- NPM Install Line
npm install webpack webpack-cli react react-dom react-redux redux redux-logger @babel/core @babel/preset-react @babel/preset-env babel-loader
bundle install

-- AirBnB Calendar code:
- https://github.com/airbnb/react-dates
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


------------------------------------------------
-- Date manipilation installs
-- Ended up not using these but very useful article may use in future

import jstz from 'jstz';
import momentTimeZone from 'moment-timezone';

npm install --save @types/moment-timezone
npm install --save jstz

https://css-tricks.com/localizing-times-in-javascript/
https://www.npmjs.com/package/jstz
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
https://github.com/datejs/Datejs
https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
https://stackoverflow.com/questions/24998624/day-name-from-date-in-js/24998705
https://www.npmjs.com/package/moment-timezone
https://www.npmjs.com/package/@types/moment-timezone
https://stackoverflow.com/questions/25139132/how-to-make-javascript-date-prototype-tostring-always-display-local-time-zone


T------------------------------------------------


-- for the little calendar not the date-picker tool
npm install react-calendar
https://github.com/wojtekmaj/react-calendar/blob/master/README.md
https://www.npmjs.com/package/react-calendar


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


Added code to the master.key file and credentials.yml.enc by using command:
bundle exec rails credentials:edit
-- then save and close file at top "x" and the editor in the terminal should update
-- Also updated heroku env vars to match the RAILS_MASTER_KEY value so the dev env and prod env match - in the heroku dashboard



Added code for the AWS Migrations and setup the account information in the storage.yml, credentials.yml and added the environment files in config folder






