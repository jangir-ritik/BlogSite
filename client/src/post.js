import React from 'react'

export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0l-xtSo10_GXrjw05fJrZsJU91iczenEpg&usqp=CAU"></img>
            </div>
            <div className="texts">
                <h2>Full house alert for news room here in trimerita</h2>
                <p className="info">
                    <a href="." className="author">Author name</a>
                    <time>2023-03-23</time>
                </p>
                <p className="summary">Applications of SBIM: Finally, there are numerous applications of SBIM in a variety of fields, such as architecture, engineering, art, and education. Learning materials for these applications often focus on the specific needs and challenges of each field, as well as the potential benefits of using SBIM in those domains.</p>
            </div>
        </div>
    )
}
