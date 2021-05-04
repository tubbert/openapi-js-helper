const assert = require('assert');
const _ = require('lodash');
const SwaggerParser = require('swagger-parser');


class TypedefGenerator {

  async generateTypedef({ path, componentName }) {
    assert(path, 'expected path');
    assert(componentName, 'expected componentName');

    const openApi = await SwaggerParser.validate(path);
    const componentDefinition = _.get(openApi, ['components', 'schemas', componentName]);

    let typedef = '/**';

    const typeName = _.upperFirst(_.camelCase(componentName));
    typedef += `\n * @typedef ${typeName}`;

    _.forEach(componentDefinition.properties, (property, key) => {
      typedef += '\n * @property ';
      typedef += this.convertPropertyToTypeName(property);
      typedef += ` ${key}`;
    });

    typedef += '\n */';

    return typedef;
  }

  convertPropertyToTypeName(property) {
    const propertyType = property.type;
    if (propertyType === 'string') {
      return '{string}';
    } else {
      return '';
    }
  }

}

module.exports = {
  TypedefGenerator,
};
