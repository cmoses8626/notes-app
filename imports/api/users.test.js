const validateNewUser = require('./users');

const square = (a) => a * a;

describe('square', function() {
  it('should square a number', function() {
    const res = square(11);
    expect(res).toBe(121);
  });
});

describe('validate new user', function() {
  it('should allow valid email address', function() {
    const testUser = {
      emails: [
        {
          address: 'test@example.com'
        }
      ]
    };
    const res = validateNewUser(testUser);
    expect(res).toBe(true);
  });
});
