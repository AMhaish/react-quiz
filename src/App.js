import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [articlesList, setArticlesList] = React.useState(articles);
    

    
    const sortByUpvote = () => {
      // You need to implement this function
    }

    const sortByDate = () => {
      // You need to implement this function
    }

    return (
        <div className="App">
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => sortByUpvote()}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => sortByDate()}>Most Recent</button>
            </div>
            {/* We should show the articles here*/}
        </div>
    );

}

export default App;
