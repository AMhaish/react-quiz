import React from 'react';

function Articles({articles}) {
    return (
        <div className="card w-50 mx-auto">
            {/* Here the articles tables should be rendered, please don't forget about data-testid */}
        </div>
    );
}

/*
Example on how the rows should be rendered
<tr data-testid="article" key={idx}>
    <td data-testid="article-title">{article.title}</td>
    <td data-testid="article-upvotes">{article.upvotes.toString()}</td>
    <td data-testid="article-date">{article.date}</td>
</tr>
*/

export default Articles;
