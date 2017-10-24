import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const action = login('1234abcd');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '1234abcd',
  });
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
