import { validateNewUser } from './users';

describe('validate new user', () => {
  test('should allow valid email address', () => {
    let testUser = {
      emails: [
        {
          address: 'test@example.com'
        }
      ]
    };
    expect(validateNewUser(testUser)).toBe(true);
  });

  test('throws on invalid email', () => {
    let testUser = {
      emails: [
        {
          address: 'test@example'
        }
      ]
    };
    expect(() => {
      validateNewUser(testUser);
    }).toThrow();
  });
});
