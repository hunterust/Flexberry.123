import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЕдиницыИзмерMixin
} from '../mixins/regenerated/models/i-i-s-123-единицы-измер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЕдиницыИзмерMixin, Validations, {
});

defineProjections(Model);

export default Model;
