<!-- # Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](images/desktop-preview.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/job-listings-with-filtering-aW8ek4k4OP](https://www.frontendmentor.io/solutions/job-listings-with-filtering-aW8ek4k4OP)
- Live Site URL: [https://job-listing-repro.vercel.app/](https://job-listing-repro.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - For styles

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@repro123](https://www.frontendmentor.io/profile/repro123)
- Twitter - [@Dr_Repro](https://www.twitter.com/Dr_Repro) -->

# Job Listings

A dynamic frontend project showcasing job listings with interactive filtering. Built as a [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt) and coded by [Bello Ibrahim](https://github.com/repro123/).
View the live site here [https://job-listing-repro.vercel.app/](https://job-listing-repro.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Accessibility](#accessibility)
- [Testing](#testing)
- [Resources](#resources)

## Overview

This project displays job listings that are fetched from a JSON data file. Users can filter the jobs based on role, level, languages, and tools. The interface dynamically updates the listings as filters are applied or removed.

## Features

- **Dynamic Filtering:** Filter jobs by clicking on filter buttons directly on the job cards. Filtered jobs can also be removed/cleared from the search bar at the top
- **Responsive Design:** Optimized for both mobile, tablet and desktop views.
- **Interactive UI:** Filters update in real-time, and users can remove individual filters or clear all at once.
- **Modern Styling:** Utilizes Tailwind CSS and custom fonts from Google Fonts.

## Technologies

- HTML5
- CSS (Tailwind CSS)
- JavaScript (ES6)
- JSON
- ARIA accessibility features

## Installation

1. **Clone the repository:**

   ```bash
    git clone https://github.com/repro123/job-listings.git
   ```

2. **Navigate to the project directory:**

```bash
  cd job-listings
```

3.  **Open index.html in your browser or use a local server to view the project.**

## Usage

- On page load, job listings are fetched from data.json and rendered on the page.

- Click on any filter button on a job card to filter the listings.

- The selected filters are displayed in a search bar at the top.

- Remove filters by clicking the "×" button on a filter tag.

- Use the "Clear" button to remove all filters and reset the job listings.

## Project Structure

```
job-listings/
├── index.html # Main HTML file
├── README.md # Project documentation
├── data.json # JSON file containing job listings data
├── src/
│ └── output.css # Compiled CSS file (Tailwind CSS)
├── images/ # Contains images (e.g., company logos, background images)
└── script.js # JavaScript file for functionality
```

## Accessibility

Accessibility was a key consideration in this project. Key accessibility features include:

- **Semantic HTML:** Proper use of HTML5 elements such as <header>, <main>, <footer>, and <h1> for improved screen reader navigation.

- **Screen Reader Support:** The main heading is visually hidden using the sr-only class but is available to screen readers.

- **Alt Text for Images:** Images include descriptive alt attributes to provide context for users with visual impairments.

- **Keyboard Navigation:** Interactive elements like buttons have focus states and are accessible via keyboard controls.

- **Color Contrast:** The color scheme ensures sufficient contrast between text and background for readability.

## Testing

- The project was tested at diferent screen sizes, to ensure responsiveness

- The project was tested on [PageSpeed Insights](https://pagespeed.web.dev) and this is the [result](https://pagespeed.web.dev/analysis/https-job-listing-repro-vercel-app/qkzwmvcnt5?form_factor=mobile)

- Tested site usability with keyboard-only navigation.

- Used the Mobile Simulator extension on google chrome to test the site on different devices and screen sizes

## Resources

- [Working with JSON files - MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
- [Working with JSON files by geeksbygeeks](https://www.geeksforgeeks.org/read-json-file-using-javascript/)
- W3Schools
