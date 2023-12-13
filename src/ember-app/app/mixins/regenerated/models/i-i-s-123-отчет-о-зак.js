import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  состОтгрузки: DS.attr('i-i-s-123-сост-отгрузки'),
  состояниеОплаты: DS.attr('i-i-s-123-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number')
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-123-отчет-о-зак.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-123-отчет-о-зак.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-123-отчет-о-зак.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-123-отчет-о-зак.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-123-отчет-о-зак.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-123-отчет-о-зак.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-123-отчет-о-зак.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-123-заказ-пост'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОЗакE', 'i-i-s-123-отчет-о-зак', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 1 }),
    состОтгрузки: attr('Сост отгрузки', { index: 2 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 3 }),
    номер: attr('Номер', { index: 4 }),
    суммаДокумента: attr('Сумма документа', { index: 5 }),
    датаНачала: attr('Дата начала', { index: 6 }),
    склады: belongsTo('i-i-s-123-склады', 'Склады', {
      склад: attr('Склад', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'склад' }),
    контрагенты: belongsTo('i-i-s-123-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'контрагент' }),
    организации: belongsTo('i-i-s-123-организации', 'Организации', {
      организация: attr('Организация', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'организация' }),
    тЧЗаказ: hasMany('i-i-s-123-т-ч-заказ', 'Т ч заказ', {
      цена: attr('Цена', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      суммаНДС: attr('Сумма НДС', { index: 2 }),
      сумма: attr('Сумма', { index: 3 }),
      этоУслуга: attr('Это услуга', { index: 4 }),
      номенклатура: belongsTo('i-i-s-123-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'номенклатура' })
    })
  });

  modelClass.defineProjection('ОтчетОЗакL', 'i-i-s-123-отчет-о-зак', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 1 }),
    состОтгрузки: attr('Сост отгрузки', { index: 2 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 3 }),
    номер: attr('Номер', { index: 4 }),
    суммаДокумента: attr('Сумма документа', { index: 5 }),
    датаНачала: attr('Дата начала', { index: 6 }),
    склады: belongsTo('i-i-s-123-склады', 'Склад', {
      склад: attr('Склад', { index: 7 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-123-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 8 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-123-организации', 'Организация', {
      организация: attr('Организация', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
