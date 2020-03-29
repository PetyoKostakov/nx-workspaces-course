import React, { useEffect, useState } from 'react';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';

import { Route, Link, BrowserRouter } from 'react-router-dom';
import { API_URL, ApiResponse, Game, Review } from '@nx-workspaces-course/api-interface';
import * as path from 'path';
import { exact } from 'prop-types';
import { stringify } from 'querystring';
import { ReviewFeatureDetails } from '@nx-workspaces-course/review/feature-details';
import { ReviewFeatureList } from '@nx-workspaces-course/review/feature-list';

export const App = () => {
  const  [apiResponse, setApiResponse] = useState<ApiResponse>({message: 'loading...'});
  useEffect(() => {
    fetch(API_URL).then(r => r.json()).then(setApiResponse);
  }, []);

  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch('/api/game').then(r => r.json()).then(setGames);
  }, []);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <>
      <BrowserRouter basename="/review">
        <h1 style={{ textAlign: 'center' }}>Board Game Hoard: Review</h1>
        <Route exact path="/" render={() => <ReviewFeatureList />} />
        <Route
          path="/:game"
          render={({ match }) => (
            <ReviewFeatureDetails gameId={match.params.game} />
          )}
        />
      </BrowserRouter>
    </>
    /*<div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Board Game Hoard: Review</h1>
      </header>
      <main>
        <p>{ JSON.stringify(apiResponse.message) }</p>

        <pre>{ JSON.stringify(games) }</pre>
      </main>

      {/!* START: routes *!/}
      {/!* These routes and navigation have been generated for you *!/}
      {/!* Feel free to move and update them to fit your needs *!/}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/!* END: routes *!/}
    </div>*/
  );
};

export default App;
