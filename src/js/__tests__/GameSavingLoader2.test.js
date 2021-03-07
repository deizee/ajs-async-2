import GameSavingLoader from '../GameSavingLoader';
import '../reader';

jest.mock('../reader', () =>
  // eslint-disable-next-line prefer-promise-reject-errors
  jest.fn().mockImplementationOnce(() => Promise.reject('Error parsing data'))
);

test('Метод load должен ловить ошибку', async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toBe('Error parsing data');
  }
});
