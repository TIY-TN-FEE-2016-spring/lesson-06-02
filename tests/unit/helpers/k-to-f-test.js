import { kToF } from 'lesson-02/helpers/k-to-f';
import { module, test } from 'qunit';

module(`Unit | Helper | k to f`);

// Replace this with your real tests.
test(`it works`, (assert) => {
  const result = kToF([300]);

  assert.equal(result, 80);

  const secretNumber = kToF([42]);

  assert.equal(secretNumber, -384);
});
