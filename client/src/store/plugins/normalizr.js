import { map, get } from 'lodash';

export default store => {
  store.subscribe(({ type, payload }, state) => {
    const method = type.split('/').pop();
    const { entities, result, schema } = payload;

    map(entities, (entity, module) => {
      store.commit(`${module}/${method}_ENTITIES`, entity);
    });

    if (schema && typeof result != 'object') {
      const data = get(entities, [schema.key, result]);
      map(schema.schema, (schema, key) => {
        if (schema.key && data[key]) {
          store.commit(`${schema.key}/SET_CURRENT`, data[key]);
        }
      });
    }
  })
}
