# Task 3 aka Random Joke Generator
A simple, modern web application that fetches and displays random jokes from the Official Joke API. Built with HTML, CSS, and JavaScript, this project features a vibrant design, smooth animations, a light/dark mode toggle, and accessibility enhancements to create an engaging and inclusive user experience.
Features

Fetch Random Jokes: Click the "Get a Joke" button to retrieve a new joke with a setup and punchline.
Light/Dark Mode: Toggle between light and dark themes, with user preferences saved via localStorage.
Responsive Design: Optimized for desktops, tablets, and mobile devices with media queries.
Accessibility: Includes ARIA attributes, keyboard navigation, and high-contrast visuals for screen reader compatibility.
Loading Animation: Displays a spinner and "Loading joke..." text during API calls.
Error Handling: Shows a friendly error message with a "Try Again" button if the API fails.
Smooth Animations: Features a slide-in effect for the container, hover effects, and a loading spinner for a polished UX.

To run this project locally, you need:

A modern web browser (e.g., Chrome, Firefox, Edge).
A text editor (e.g., VS Code) for code modifications.
(Optional) A local development server (e.g., VS Code's Live Server extension) for a better testing experience.

No external dependencies or build tools are required, as the project uses vanilla HTML, CSS, and JavaScript.
Installation

Clone or Download the Repository:
git clone https://github.com/your-username/random-joke-generator.git

Alternatively, download the ZIP file and extract it.

Navigate to the Project Directory:
cd random-joke-generator


Open the Project:

Open index.html in a browser directly (e.g., via file:// path).
For a better experience, use a local server:
With VS Code: Install the Live Server extension and right-click index.html to select "Open with Live Server".
With Node.js: Use npx http-server or a similar tool.





Usage

Open the website in a browser.
Click the Get a Joke button to fetch and display a random joke.
Use the theme toggle (sun/moon icon in the top-right corner) to switch between light and dark modes.
Test accessibility features by navigating with the Tab key or using a screen reader (e.g., NVDA, VoiceOver).
If the API fails, a "Try Again" button will appear to retry fetching a joke.

Project Structure
random-joke-generator/
├── index.html      # Main HTML file with structure and content
├── style.css       # CSS for styling, animations, and responsive design
├── script.js       # JavaScript for API fetching, theme toggle, and interactivity
├── README.md       # This file

Technologies Used

HTML5: Semantic structure with accessibility attributes.
CSS3: Modern styling with gradients, animations, and responsive design.
JavaScript (Vanilla): Handles API calls, DOM manipulation, and theme persistence.
Official Joke API: Provides random jokes (https://official-joke-api.appspot.com).

Accessibility Features

ARIA attributes (aria-label, aria-live="polite", role="region") for screen reader support.
Keyboard-navigable button with visible focus styles.
High-contrast colors for readability.
Responsive text sizes for smaller screens.

Known Limitations

The site relies on the Official Joke API, which may have rate limits or downtime. Error handling is included to mitigate this.
No local caching of jokes; each click fetches a new joke from the API.
Advanced features like saving favorite jokes or sharing via social media are not implemented (but can be added).

Future Enhancements

Add a "Save Joke" feature to store favorite jokes in localStorage.
Implement a "Share Joke" button using the Web Share API or clipboard copying.
Support joke categories if the API provides them.
Add more animations (e.g., confetti for punchlines).
Integrate analytics to track user interactions.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and test locally.
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the existing style (e.g., consistent indentation, clear comments) and includes accessibility considerations.

Acknowledgments

Official Joke API for providing the joke data.
Inspired by modern web design trends and accessibility best practices.
