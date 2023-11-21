# challenge-ratedpower-enverus

Link: https://challenge-ratedpower-enverus.netlify.app


![challengeWeApp](https://github.com/diecorra/challenge-ratedpower-enverus/assets/32736570/a45fc49e-8333-47ad-bc91-3227ab8ca0a0)

### Architecture and Components

I structured the project into various sections to make it as understandable as possible for myself or other developers for potential future modifications or feature additions:

- "api": where I implemented API call management for planet data and the addition of favorites.
- "assets": where I stored all images used in the application.
- "features": where I created folders for the main sections of the web app, including "favorites," "notFound", "planets," and "sidebar." Within these folders, I implemented components and any custom styled components.
- "model": where I implemented interfaces.
- "store": where I implemented data stores using Zustand.
- "styles": where I implemented all styles used throughout the application.

### Technical Decisions

##### Zustand, localStorage

As there was no way to save data persistently, I decided to use localStorage in combination with Zustand for state management. localStorage is used as a method of persistent storage during the user's session, and Zustand is used for temporary data management on the application.

##### React Query

Utilized react-query to optimize API call performance and provide convenient features like loading, fetching, and error handling for a better user experience.

##### React Router

Implemented for managing routes in the application. In the case of a user entering a nonexistent URL, they are redirected to a "404 not found" error page. If, for example, someone tries to modify the link to read the details of a nonexistent planet (example: “https://challenge-ratedpower-enverus.netlify.app/planets/Tatooineee”), a message indicating the nonexistence of the planet is displayed. React-router also allows parallel calls during the UI loading of the web app, enhancing performance, especially when dealing with a table that typically contains a substantial amount of data.

##### React Table

Used react-table to expedite the table implementation, with built-in sorting and pagination logic.

##### Styled-components

Implemented a theme due to its compatibility with styled-components, utilizing constants for colors used multiple times to abstract the application further.

##### Path library

Utilized the "path" library to consolidate exports from multiple modules into a single module.
Additional notes to mention:
Due to the unavailability of column sorting in the API as per Figma, I decided not to implement alternative sorting methods as it would be too heavy and not a valid solution.
Not having an ID for planet data, I decided to use the name as the ID, as there were no other viable alternatives.

### Work Sequence

1. Detailed review of technical requirements.
2. Identification of critical points, noting them down, and seeking additional information if necessary for better understanding.
3. Empathizing with the user to understand specific needs or features that might arise.
4. Consideration of potential application expansion.
5. Thinking and implementing the application structure, understanding the libraries to use.
6. Structuring and implementing the colors to use in the theme and styling using styled components starting from reusable components.
7. Structuring and implementing the API call for planet data.
8. Structuring and implementing stores and saving favorites.
9. Structuring and implementing components, ensuring communication between them.
   E2E testing with Cypress.

### Testing Strategy

Due to time constraints, only E2E testing with Cypress was conducted.
Planned to use React Testing Library for unit testing individual components and store tests with Zustand later on.
Considered dividing tests into major components, verifying the existence of components, and checking major aspects within them: sidebar, planets, favorites.

### Implementation Alternatives

Considered using Zustand and localStorage due to the limited data quantity.
Contemplated an alternative solution of saving planet IDs (name) to localStorage and, on the first access to the web app, fetching and saving "favorite" planet data (if any) to the Zustand store using a service worker working in the background, without impacting application performance.
Potential issue with the alternative solution: possible server overload on the first access if there are many planets marked as favorites. In this case, scheduled calls every "X" seconds/milliseconds could be implemented to prevent overloading the server.

### If More Time

Would have added mobile responsiveness to make the application more usable on phones and turned it into a PWA.
Would have improved the UI of the planet details section, adding more information and enhancing the visual appeal.
Would have added features for the visually impaired.
Would have improved tests by adding unit tests for individual components and unit tests for data stores created with Zustand.

### Scalability

Suggested creating user profiles to save favorites divided by users.
Proposed creating posts/favorite/idUser to save favorites to a database, considering localStorage as a temporary archive (limited memory, data deletion if the browser cache is cleared).
Recommended adding a "true" ID to the APIs (if possible) to resolve potential conflicts between planets with the same "name" and their corresponding images.

### Feedback

Expressing the joy of working on the project.
Acknowledging time constraints for creating a well-structured application.
Desiring more time to delve into details, as specified in point 2f.
