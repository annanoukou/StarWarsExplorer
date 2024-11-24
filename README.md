# StarWarsExplorer

## Project Overview

StarWarsExplorer is a React-based web application that allows users to explore data from the Star Wars universe. It features search functionality for characters, planets, and starships, and allows users to view detailed information about each entity. Users can also save their favorite entities for later reference.

The application uses Redux for state management and Tailwind CSS for styling.

## Approach

The project was developed with the following steps:

1. **Setting Up the Project**:  
   - I initialized the project using Create React App with TypeScript template for type safety.
   - Installed necessary dependencies, including Redux, React-Redux, and Redux Toolkit for state management.
   - Added Tailwind CSS for styling.

2. **State Management**:  
   - Used Redux to manage the state, including:
     - Search query and entity type (`people`, `planets`, `starships`).
     - Search results and loading state.
     - Caching the details of each entity for efficiency.
     - Storing user favorites in localStorage.
   
3. **Search and Data Fetching**:  
   - Integrated an external API (`https://swapi.dev/api/`) to fetch data based on the selected entity type and search query.
   - The results are displayed dynamically, and users can interact with each entity to see more details.

4. **Favorites Functionality**:  
   - The app allows users to add and remove entities from their favorites list. The favorites are stored in the localStorage and persisted between sessions.

5. **UI Components**:  
   - Created reusable components such as `SearchBar`, `SearchResults`, and `EntityDetails` for clean code structure.
   - Implemented responsive design with Tailwind CSS to ensure good user experience across devices.

6. **Error Handling**:  
   - Handled API errors gracefully and displayed relevant error messages if the fetch operation fails.

7. **Infinite Scroll**:  
   - Implemented infinite scroll to load more results as the user scrolls down, reducing the need for page reloads.

## Instructions for Running the Project

1. **Clone the Repository**:  
   First, clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/annanoukou/StarWarsExplorer.git

2. **Install Dependencies**:
   Navigate into the project directory and install the necessary dependencies:

   ```javascript
   cd StarWarsExplorer
   npm install
   ```

3. **Start the Development Server**:
   To run the project locally in development mode, use the following command:

   ```javascript
   npm start
   ```
   
   This will start the application and open it in your default browser at http://localhost:3000.

## Challenges Faced

### State Management with Redux:
One challenge I faced was properly managing the state with Redux, especially handling the entity details and caching them for performance. To solve this, I implemented Redux Toolkit to simplify the process and used `localStorage` to persist user favorites.

### Fetching Data from an External API:
The `swapi.dev` API does not support pagination in a straightforward way, which made it a bit tricky when implementing infinite scroll. I had to carefully manage the API requests and responses to ensure that new data was appended correctly as the user scrolled.

### Cross-Browser Compatibility:
Ensuring that the application worked consistently across different browsers and devices posed a challenge, especially with CSS styling. Tailwind CSS made this easier, but I still had to test extensively to ensure a responsive and functional UI.

### Error Handling:
Handling API errors, such as timeouts or server errors, was another challenge. I implemented error boundaries and fallback messages to improve the user experience when something went wrong with data fetching.

### Infinite Scroll:
Implementing infinite scroll required calculating when the user reached the bottom of the page and then loading more results without overwhelming the browser. I used `IntersectionObserver` for detecting when to fetch more data.

## Conclusion
StarWarsExplorer is a fun and interactive way to explore the Star Wars universe. By using modern web development tools like React, Redux, and Tailwind CSS, I was able to create a user-friendly interface with efficient data fetching and caching. This project also gave me the opportunity to explore state management with Redux and implement useful features like infinite scroll and favorites.

