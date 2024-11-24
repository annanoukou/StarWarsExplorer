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
