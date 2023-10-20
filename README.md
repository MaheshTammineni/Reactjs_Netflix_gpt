# Netflix GPT

- create react app
- configured TailwindCSS
- Header
- Routing of App
- Login form
- sign up Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying our app to production
- Create signup user Account
- Implement Sign in user Api
- Created Redux Store with userSlice
- implemented signout
- update profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect/ browse to Login Page and vice-versa
- unsubscribe to the onAuthstatechanged callback
- Add hardcoded values to the constants file.
- register TMDB API & create an app& get access token
- Get Data from TMDB now playing movies list API.
- Custom hook for now playing Movies
- Create movieSlice
- Update store with movies Data
- Panning for maincontainer & secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make Main Container look awesome
- Build secondary Component
- Build Movie list
- Build Movie card
- TMDB Image CDN URL
- Made the browse page amazing with Tailwind CSS
- usePopularMovies custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App
- To integrate ChatGPT go to platform OpenAI go to personal click api keys generate and use the key
- Now install openAI from npm package(to make API calls directly)
- Gpt search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- reused movie list component to make movie suggestion container
- Memoization
- Added .env files
- Adding .env file to gitignore
- Made our site Responsive


we are using GPT API's(built by openAI company) on top of the integrate with user interface and we were plug those API's into our app.

# Features
- Login & Signup page
      - sign in/signup form
      - redirect to browse Page
- Browse (after authentication)
    - Header
    - main movie
         - Trailer in background
         - title & description
         - MOvieSuggestion
             - MovieLists + N
- NetflixGPT
    - search bar
    - movie suggestions