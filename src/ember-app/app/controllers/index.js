import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.123.caption'),
          title: i18n.t('forms.application.sitemap.123.title'),
          children: [{
            link: 'i-i-s-123-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-номенклатура-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-123-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-заказ-пост-l.title'),
            children: null
          }, {
            link: 'i-i-s-123-организации-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-организации-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-123-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-план-закупок-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-123-отчет-о-зак-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-отчет-о-зак-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-отчет-о-зак-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-123-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-контрагенты-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-123-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-единицы-измер-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-123-склады-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-склады-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})