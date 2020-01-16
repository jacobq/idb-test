import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';
import { computed } from '@ember/object';

export default class IDBConfigService extends IndexedDbConfigurationService {
  currentVersion = 1;

  @computed
  get version1() {
    return {
      stores: {
        dataset: '&id,algorithm',
        sample: '&id,name',
        // Add your tables here, like this: 'item': '&id'
        // When using the ember data adapter, add one entry per model, where the key is your model name
        // For example, if you have a model named "my-item", add an entry: `'my-item': '&id'
      }
    };
  }
}
