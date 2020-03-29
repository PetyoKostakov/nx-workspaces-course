import { useEffect, useState } from 'react';
import { Game } from '@nx-workspaces-course/api-interface';

export function useGames() {
  const [games, setGame] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then(r => r.json())
      .then(setGame);
  }, []);

  return games;
}
