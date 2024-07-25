import React from 'react';
import './APIDocumetationcss.css'

function APIDocumentation({reference}){
    return (
        <section id="ApiDoc" className="ApiDoc" ref={reference}>
          <div className="main">
            
            <h2 id="overview">Overview</h2>
            <p>This documentation covers the APIs available for this project, including endpoints for fetching games, developers and more. Each endpoint is designed to return JSON data that can be easily integrated into your website.</p>
            <p><strong>Base URL:</strong> <code>https://localhost3030/</code></p>
    
            <h2 id="endpoints">Endpoints</h2>
            
            <div>
              <h3>1. Get Games</h3>
              <p><strong>Endpoint:</strong> <code>/games</code></p>
              <p><strong>Method:</strong> GET</p>
              <p><strong>Description:</strong> Returns all the games with its attributes.</p>
              <pre>
                <code>
    {`[
    {
        "name": "Game Name",
        "genre": "Genre",
        "rating": 4.5,
        "price": 85,
        "background_image": "URL"
    },
    ...
    ]`}
                </code>
              </pre>
            </div>
    
            <div>
              <h3>2. Get Games by Name</h3>
              <p><strong>Endpoint:</strong> <code>/games/name/:name</code></p>
              <p><strong>Method:</strong> GET</p>
              <p><strong>Description:</strong> Fetches games by name.</p>
              <pre>
                <code>
    {`    [
      {
        "name": "Game Name",
        "genre": "Genre",
        "rating": 4.5,
        "price": 85,
        "background_image": "URL"
      },
      ...
    ]`}
                </code>
              </pre>
            </div>
    
            <div>
              <h3>3. Get Games by Genre</h3>
              <p><strong>Endpoint:</strong> <code>/games/genre/:genre</code></p>
              <p><strong>Method:</strong> GET</p>
              <p><strong>Description:</strong> Fetches games by genre.</p>
              <pre>
                <code>
    {`[
      {
        "name": "Game Name",
        "genre": "Genre",
        "rating": 4.5,
        "price": 85,
        "background_image": "URL"
      },
      ...
    ]`}
                </code>
              </pre>
            </div>
    
            <div>
              <h3>4. Get Games by Rating</h3>
              <p><strong>Endpoint:</strong> <code>/games/rating/:rating</code></p>
              <p><strong>Method:</strong> GET</p>
              <p><strong>Description:</strong> Fetches games by rating.</p>
              <pre>
                <code>
    {`[
      {
        "name": "Game Name",
        "genre": "Genre",
        "rating": 4.5,
        "price": 85,
        "background_image": "URL"
      },
      ...
    ]`}
                </code>
              </pre>
            </div>
    
            <div>
              <h3>5. Get Developers</h3>
              <p><strong>Endpoint:</strong> <code>/developers</code></p>
              <p><strong>Method:</strong> GET</p>
              <p><strong>Description:</strong> Fetches a list of developers.</p>
              <pre>
                <code>
    {`{
      "Developers": ["David", "Honsa", "Jeiberth"]
    }`}
                </code>
              </pre>
            </div>
          </div>
        </section>
      );
    };
    
export default APIDocumentation;
