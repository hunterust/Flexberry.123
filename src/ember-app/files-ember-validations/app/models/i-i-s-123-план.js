import {
  defineNamespace,
  defineProjections,
  Model as ПланMixin
} from '../mixins/regenerated/models/i-i-s-123-план';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПланMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
