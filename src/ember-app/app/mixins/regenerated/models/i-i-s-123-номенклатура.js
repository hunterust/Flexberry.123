import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номенклатура: DS.attr('string'),
  единицыИзмер: DS.belongsTo('i-i-s-123-единицы-измер', { inverse: null, async: false }),
  контрагенты: DS.belongsTo('i-i-s-123-контрагенты', { inverse: null, async: false })
});

export let ValidationRules = {
  номенклатура: {
    descriptionKey: 'models.i-i-s-123-номенклатура.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  единицыИзмер: {
    descriptionKey: 'models.i-i-s-123-номенклатура.validations.единицыИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-123-номенклатура.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-123-номенклатура', {
    номенклатура: attr('Номенклатура', { index: 0 }),
    контрагенты: belongsTo('i-i-s-123-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'контрагент' }),
    единицыИзмер: belongsTo('i-i-s-123-единицы-измер', 'Единицы измер', {
      единицаИзмер: attr('Единица измер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'единицаИзмер' })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-123-номенклатура', {
    номенклатура: attr('Номенклатура', { index: 0 }),
    контрагенты: belongsTo('i-i-s-123-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 1 })
    }, { index: -1, hidden: true }),
    единицыИзмер: belongsTo('i-i-s-123-единицы-измер', 'Единица измер', {
      единицаИзмер: attr('Единица измер', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
