import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-123-план', 'Unit | Serializer | i-i-s-123-план', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-123-план',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-123-сост-оплаты',
    'transform:i-i-s-123-сост-отгрузки',

    'model:i-i-s-123-единицы-измер',
    'model:i-i-s-123-заказ-пост',
    'model:i-i-s-123-контрагенты',
    'model:i-i-s-123-номенклатура',
    'model:i-i-s-123-организации',
    'model:i-i-s-123-отчет-о-зак',
    'model:i-i-s-123-план-закупок',
    'model:i-i-s-123-план',
    'model:i-i-s-123-склады',
    'model:i-i-s-123-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
