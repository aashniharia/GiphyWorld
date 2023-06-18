# Project: Dog-Cat Gif app using React.js
This Project is a simple project that helps the users browse through a collection of cat and dog gifs

## Get Started

1. **Make sure you're in the directory you just created after unzipping.** 
2. **Install Node Packages.** - `npm install`
3. **Run the app.** - `npm start`

## Implementation details:
1. The Application implemented is a responsive web application using React.js
2. The Application has a pagination feature to help users browse through the collection of gifs
3. The users can view the details of the gif by clicking on them. A detailed view of some important information is shown
4. The users can also filter the gifs by rating type of the gifs(additional feature)

The following aspects have been implemented to make this application scalable

1. Context API is used for state management
2. React Router is used for routing
3. A Modular folder structure has been incorporated such that new modules can be easily accomodated
4. Jest is used to ensure the application functions correctly as it scales up
5. Localisation using i18Next has been implemented, enabling the application to be used in different geographies
6. Creating reusable components Such as Loaders, Filter and Pagination
7. Styling is implemented by using styled components

## Test cases have been written for the

1. the fetching data(api)
2. Pagination component
3. Filter component

## Dependencies used are:

- styled components : React Library for component level styles
- react router: React library for handling routing
- react axios : React library used to send async HTTP requests to rest end points
- react-i18Next : Internationalization framework for React
- prettier: Code Formatter
- FontAwesome: Icon Library

## Functionality:

- User is shown cat Gifs by default.
- User can browse gifs by using the pagination and filter by rating options
- user can change the category to dog Gifs by clicking on the Button

## Note: the GIPHY Public API has a restriction of offset with a maximum of 4999. To address this I have changed the user experience by redirected the user to the last offset that the API would generate data for.
