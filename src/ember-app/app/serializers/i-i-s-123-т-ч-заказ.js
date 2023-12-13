import { Serializer as ТЧЗаказSerializer } from
  '../mixins/regenerated/serializers/i-i-s-123-т-ч-заказ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧЗаказSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
