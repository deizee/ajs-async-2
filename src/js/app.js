import GameSaving from './GameSaving';
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return new GameSaving(saving);
  } catch (err) {
    return Promise.reject(err);
  }
})();
