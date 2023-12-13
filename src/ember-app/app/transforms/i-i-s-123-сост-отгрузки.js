import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОтгрузкиEnum from '../enums/i-i-s-123-сост-отгрузки';

export default FlexberryEnum.extend({
  enum: СостОтгрузкиEnum,
  sourceType: 'IIS.123.СостОтгрузки'
});
