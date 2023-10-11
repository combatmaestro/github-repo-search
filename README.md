
# GitHub Repository Search

This project is a web application that allows users to search for GitHub repositories based on specific criteria. It was built using [Create React App](https://github.com/facebook/create-react-app) and includes various features and customizations.

## Features and Customizations

1. **GitHub Repository Search:** Users can search for GitHub repositories by entering a query in the search bar. The search is performed by sending a request to the GitHub API, and the results are displayed on the page.

2. **Sorting and Ordering:** The application allows users to sort the search results by various criteria, such as stars, watchers, score, name, created date, and updated date. Additionally, users can specify the order (ascending or descending) in which the results are displayed.

3. **Responsive Design:** The web application is responsive, ensuring that it works well on both desktop and mobile devices.

4. **Custom Repo Cards:** Each repository in the search results is displayed in a custom-designed card format. The card design includes rounded corners, box shadow for a 3D look, a thin border, and consistent styling for elements such as repository name, star count, description, and language.

5. **Description Truncation:** For repository descriptions, only the first 30 words are displayed, followed by an ellipsis. If a description is not available, "N.A" is shown instead.

6. **Card Height and Gaps:** All repo cards have a uniform height, ensuring a neat and organized layout. Additionally, there is a gap between cards to enhance readability and visual appeal.

7. **Star Icon and Yellow Star Count:** Instead of displaying star counts directly, a star icon is shown in yellow, followed by the star count.

8. **Read More:** For descriptions longer than 30 words, a "Read More" link can be added to expand and view the full description.

## Project Setup

To run this application, you can follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project directory and run `npm install` to install the necessary dependencies.

3. Start the development server by running `npm start`. The application will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.
