import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('Метод load должен возвращать валидные данные', async () => {
  const received = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
  };
  const response = await GameSavingLoader.load();
  const expected = new GameSaving(response);

  expect(expected).toEqual(received);
});
