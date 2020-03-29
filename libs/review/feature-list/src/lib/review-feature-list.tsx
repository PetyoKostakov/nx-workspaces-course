import React from 'react';
import { Link } from 'react-router-dom';
import { useGames } from '@nx-workspaces-course/review/data-access-games';
import { currencyFormat, ratingFormat } from '@nx-workspaces-course/review/util-formatters';

/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  const games = useGames();
  return (
    <bghoard-grid>
      {games.map(game => {
        return (
          <Link
            to={'/' + game.id}
            key={game.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <bghoard-tile>
              {game.image && (
                <bghoard-image-wrapper>
                  <img src={game.image} alt={game.name} />
                </bghoard-image-wrapper>
              )}
              <bghoard-tile-title>{game.name}</bghoard-tile-title>
              <bghoard-tile-left-corner>
                {ratingFormat(game.rating, 5)}
              </bghoard-tile-left-corner>
              <bghoard-tile-right-corner>
                {currencyFormat(game.price)}
              </bghoard-tile-right-corner>
            </bghoard-tile>
          </Link>
        );
      })}
    </bghoard-grid>
  );
};

export default ReviewFeatureList;
