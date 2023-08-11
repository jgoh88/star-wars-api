# Star Wars API
## Introduction/Overview
This is a simple tool to get and display Star Wars related information. The tool allows CRUD operation on the data, however the data is not saved to any database. Hence, any changes will be loss once you refresh the page. Navigation across the pages using the navigation menu is possible without losing the information as the data is stored in a global state.

The data for this tool is based on [The Star Wars API](https://swapi.dev/).

This tool is a React app built using create-react-app. This boilderplate/starter build was used because it covers all the basic features, it is one of the longest available boilerplate and the tool itself is a simple one. Additionally, it is the one that I'm most used to.

## Getting Started
### Installation
```bash
# Clone repository
$ git clone https://github.com/jgoh88/star-wars-api.git

# Install dependencies
$ cd star-wars-api
$ npm install   # or yarn install

# Run application
$ npm start  # this will start tool at localhost:3000
```
### Editing Resource for the Site
The base tool itself is configured to display information on resources for SW characters and planets. You can edit the file within src/configs/siteResourceConfig folder to add or change the resources for the site.