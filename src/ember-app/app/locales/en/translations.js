import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS123ЕдиницыИзмерLForm from './forms/i-i-s-123-единицы-измер-l';
import IIS123ЗаказПостLForm from './forms/i-i-s-123-заказ-пост-l';
import IIS123КонтрагентыLForm from './forms/i-i-s-123-контрагенты-l';
import IIS123НоменклатураLForm from './forms/i-i-s-123-номенклатура-l';
import IIS123ОрганизацииLForm from './forms/i-i-s-123-организации-l';
import IIS123ОтчетОЗакLForm from './forms/i-i-s-123-отчет-о-зак-l';
import IIS123ПланЗакупокLForm from './forms/i-i-s-123-план-закупок-l';
import IIS123СкладыLForm from './forms/i-i-s-123-склады-l';
import IIS123ЕдиницыИзмерEForm from './forms/i-i-s-123-единицы-измер-e';
import IIS123ЗаказПостEForm from './forms/i-i-s-123-заказ-пост-e';
import IIS123КонтрагентыEForm from './forms/i-i-s-123-контрагенты-e';
import IIS123НоменклатураEForm from './forms/i-i-s-123-номенклатура-e';
import IIS123ОрганизацииEForm from './forms/i-i-s-123-организации-e';
import IIS123ОтчетОЗакEForm from './forms/i-i-s-123-отчет-о-зак-e';
import IIS123ПланЗакупокEForm from './forms/i-i-s-123-план-закупок-e';
import IIS123СкладыEForm from './forms/i-i-s-123-склады-e';
import IIS123ЕдиницыИзмерModel from './models/i-i-s-123-единицы-измер';
import IIS123ЗаказПостModel from './models/i-i-s-123-заказ-пост';
import IIS123КонтрагентыModel from './models/i-i-s-123-контрагенты';
import IIS123НоменклатураModel from './models/i-i-s-123-номенклатура';
import IIS123ОрганизацииModel from './models/i-i-s-123-организации';
import IIS123ОтчетОЗакModel from './models/i-i-s-123-отчет-о-зак';
import IIS123ПланЗакупокModel from './models/i-i-s-123-план-закупок';
import IIS123ПланModel from './models/i-i-s-123-план';
import IIS123СкладыModel from './models/i-i-s-123-склады';
import IIS123ТЧЗаказModel from './models/i-i-s-123-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-123-единицы-измер': IIS123ЕдиницыИзмерModel,
    'i-i-s-123-заказ-пост': IIS123ЗаказПостModel,
    'i-i-s-123-контрагенты': IIS123КонтрагентыModel,
    'i-i-s-123-номенклатура': IIS123НоменклатураModel,
    'i-i-s-123-организации': IIS123ОрганизацииModel,
    'i-i-s-123-отчет-о-зак': IIS123ОтчетОЗакModel,
    'i-i-s-123-план-закупок': IIS123ПланЗакупокModel,
    'i-i-s-123-план': IIS123ПланModel,
    'i-i-s-123-склады': IIS123СкладыModel,
    'i-i-s-123-т-ч-заказ': IIS123ТЧЗаказModel
  },

  'application-name': '123',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '123',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '123',
          title: '123'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        123: {
          caption: '123',
          title: '123',
          'i-i-s-123-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-123-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-123-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-123-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          },
          'i-i-s-123-отчет-о-зак-l': {
            caption: 'Отчет о зак',
            title: ''
          },
          'i-i-s-123-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-123-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-123-склады-l': {
            caption: 'Склады',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-123-единицы-измер-l': IIS123ЕдиницыИзмерLForm,
    'i-i-s-123-заказ-пост-l': IIS123ЗаказПостLForm,
    'i-i-s-123-контрагенты-l': IIS123КонтрагентыLForm,
    'i-i-s-123-номенклатура-l': IIS123НоменклатураLForm,
    'i-i-s-123-организации-l': IIS123ОрганизацииLForm,
    'i-i-s-123-отчет-о-зак-l': IIS123ОтчетОЗакLForm,
    'i-i-s-123-план-закупок-l': IIS123ПланЗакупокLForm,
    'i-i-s-123-склады-l': IIS123СкладыLForm,
    'i-i-s-123-единицы-измер-e': IIS123ЕдиницыИзмерEForm,
    'i-i-s-123-заказ-пост-e': IIS123ЗаказПостEForm,
    'i-i-s-123-контрагенты-e': IIS123КонтрагентыEForm,
    'i-i-s-123-номенклатура-e': IIS123НоменклатураEForm,
    'i-i-s-123-организации-e': IIS123ОрганизацииEForm,
    'i-i-s-123-отчет-о-зак-e': IIS123ОтчетОЗакEForm,
    'i-i-s-123-план-закупок-e': IIS123ПланЗакупокEForm,
    'i-i-s-123-склады-e': IIS123СкладыEForm
  },

});

export default translations;
