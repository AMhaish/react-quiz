# React: Sorting Articles  

Create a basic article sorting application, as shown below. Some core functionalities have already been implemented, but the application is not complete. Application requirements are given below, and the finished application must pass all of the unit tests.

The app has one component named Articles. The list of articles to be displayed is already provided in the app.

The app must have the following functionalities:

- The list of articles is passed to the App component as a prop in the form of an array of objects.
- Each article has the following three properties:
  - title: The title of the article [STRING]
  - upvotes: The number of upvotes for an article [NUMBER]
  - date: The publish date for the article in the format YYYY-MM-DD [STRING]
- By default, the articles should be displayed in the table ordered by the number of upvotes in descending order.
- Clicking on the "Most Upvoted" button should reorder and display the articles by the number of upvotes in descending order.
- Clicking on the "Most Recent" button should reorder and display the articles by date in descending order.
- You can assume that each article has a unique publish date and number of upvotes.

Your task is to complete the implementation of `src/App.js` and `src/components/Articles.js`.

The following data-testid attributes are required in the component for the tests to pass:

- The button to reorder and display the most upvoted articles must have the data-testid attribute "most-upvoted-link".
- The button to reorder and display the most recent articles must have the data-testid attribute "most-recent-link".
- Each article must be rendered inside a `<tr>` element that has the data-testid attribute "article".
- The title of each article must be rendered in a `<td>` element that has the data-testid attribute "article-title".
- The number of upvotes of each article must be rendered in a `<td>` element that has the data-testid attribute "article-upvotes".
- The publish date of each article must be rendered in a `<td>` element that has the data-testid attribute "article-date".

## Environment 

- React Version: 16.13.1
- Default Port: 8000
- NodeJS Version: 16

## Project Specifications 

**Read-Only Files**
- `src/App.test.js`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
If the test is passed using the previous command, this indicates that you completed the application correctly

**Steps to start solving the quiz**
Please clone the repo to your local PC, create a new branch using the next command and by naming the branch with your name
```bash
git branch <your-name>
```
After solving the problem, commit your changes and push them to the remote branch by using the next commands:
```bash
git commit -m "Finish solving the quiz"
git push --set-upstream-to origin/<your-name>
```

