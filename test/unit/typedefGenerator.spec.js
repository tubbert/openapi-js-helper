const chai = require('chai');

const { TypedefGenerator } = require('../../lib/typedefGenerator');

chai.use(require('chai-as-promised'));
chai.use(require('dirty-chai'));
chai.use(require('sinon-chai'));

const { expect } = chai;

describe('TypedefGenerator', () => {

  const openApiPath = '/Users/paulo/work/workspace/code/third_party/openapi-jsdoc/test/assets/openapi.yaml';

  /** @type {TypedefGenerator} */
  let typedefGenerator;

  beforeEach(async () => {
    typedefGenerator = new TypedefGenerator();
  });

  afterEach(async () => {
  });

  // ----------------------------------

  describe('generateTypedefForComponent', () => {

    it('Creates a valid Typedef', async () => {
      const targetComponent = 'couponLinkRequest';

      const typedef = await typedefGenerator.generateTypedef({ path: openApiPath, componentName: targetComponent });

      console.log(typedef);;;

      expect.fail('Not tested');
    });

  });

});
