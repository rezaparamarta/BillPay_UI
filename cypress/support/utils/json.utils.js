/**
 * Safely get value from JSON response using dot-notation path
 * Example: getJsonValue(body, 'meta.version')
 */
export const getJsonValue = (body, path) => {
  if (!body || !path) return null;
  return Cypress._.get(body, path, null);
};

/**
 * Assert multiple JSON fields using path-value map
 */
export const assertJsonFields = (body, expectations = {}) => {
  Object.entries(expectations).forEach(([path, expected]) => {
    const actual = getJsonValue(body, path);
    expect(actual, `JSON path: ${path}`).to.eq(expected);
  });
};

/**
 * Basic JSON contract validation
 */
export const validateJsonContract = (body) => {
  expect(body).to.be.an('object');
  expect(body).to.have.property('success');
  expect(body).to.have.property('meta');
};
