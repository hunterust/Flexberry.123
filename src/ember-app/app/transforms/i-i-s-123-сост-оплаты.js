import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОплатыEnum from '../enums/i-i-s-123-сост-оплаты';

export default FlexberryEnum.extend({
  enum: СостОплатыEnum,
  sourceType: 'IIS.123.СостОплаты'
});
