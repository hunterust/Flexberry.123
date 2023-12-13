﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.123
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Отчет о зак.
    /// </summary>
    // *** Start programmer edit section *** (ОтчетОЗак CustomAttributes)

    // *** End programmer edit section *** (ОтчетОЗак CustomAttributes)
    [AutoAltered()]
    [Caption("Отчет о зак")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтчетОЗакE", new string[] {
            "ДатаОкончания as \'Дата окончания\'",
            "СостояниеОплаты as \'Состояние оплаты\'",
            "СостОтгрузки as \'Сост отгрузки\'",
            "СуммаВклНДС as \'Сумма вкл НДС\'",
            "Номер as \'Номер\'",
            "СуммаДокумента as \'Сумма документа\'",
            "ДатаНачала as \'Дата начала\'",
            "Склады as \'Склады\'",
            "Склады.Склад as \'Склад\'",
            "Контрагенты as \'Контрагенты\'",
            "Контрагенты.Контрагент as \'Контрагент\'",
            "Организации as \'Организации\'",
            "Организации.Организация as \'Организация\'"}, Hidden=new string[] {
            "Склады.Склад",
            "Контрагенты.Контрагент",
            "Организации.Организация"})]
    [AssociatedDetailViewAttribute("ОтчетОЗакE", "ТЧЗаказ", "ТЧЗаказE", true, "", "Т ч заказ", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ОтчетОЗакE", "Склады", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Склад")]
    [MasterViewDefineAttribute("ОтчетОЗакE", "Контрагенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Контрагент")]
    [MasterViewDefineAttribute("ОтчетОЗакE", "Организации", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Организация")]
    [View("ОтчетОЗакL", new string[] {
            "ДатаОкончания as \'Дата окончания\'",
            "СостояниеОплаты as \'Состояние оплаты\'",
            "СостОтгрузки as \'Сост отгрузки\'",
            "СуммаВклНДС as \'Сумма вкл НДС\'",
            "Номер as \'Номер\'",
            "СуммаДокумента as \'Сумма документа\'",
            "ДатаНачала as \'Дата начала\'",
            "Склады.Склад as \'Склад\'",
            "Контрагенты.Контрагент as \'Контрагент\'",
            "Организации.Организация as \'Организация\'"})]
    public class ОтчетОЗак : IIS.123.ЗаказПост
    {
        
        // *** Start programmer edit section *** (ОтчетОЗак CustomMembers)

        // *** End programmer edit section *** (ОтчетОЗак CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала CustomAttributes)
        public override System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала Get start)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала Get start)
                System.DateTime result = base.ДатаНачала;
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала Get end)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала Set start)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала Set start)
                base.ДатаНачала = value;
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаНачала Set end)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончания.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания CustomAttributes)
        public override System.DateTime ДатаОкончания
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания Get start)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания Get start)
                System.DateTime result = base.ДатаОкончания;
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания Get end)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания Set start)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания Set start)
                base.ДатаОкончания = value;
                // *** Start programmer edit section *** (ОтчетОЗак.ДатаОкончания Set end)

                // *** End programmer edit section *** (ОтчетОЗак.ДатаОкончания Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.Номер CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.Номер CustomAttributes)
        public override int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Номер Get start)

                // *** End programmer edit section *** (ОтчетОЗак.Номер Get start)
                int result = base.Номер;
                // *** Start programmer edit section *** (ОтчетОЗак.Номер Get end)

                // *** End programmer edit section *** (ОтчетОЗак.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.Номер Set start)

                // *** End programmer edit section *** (ОтчетОЗак.Номер Set start)
                base.Номер = value;
                // *** Start programmer edit section *** (ОтчетОЗак.Номер Set end)

                // *** End programmer edit section *** (ОтчетОЗак.Номер Set end)
            }
        }
        
        /// <summary>
        /// СостОтгрузки.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки CustomAttributes)
        public override IIS.123.СостОтгрузки СостОтгрузки
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки Get start)

                // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки Get start)
                IIS.123.СостОтгрузки result = base.СостОтгрузки;
                // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки Get end)

                // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки Set start)

                // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки Set start)
                base.СостОтгрузки = value;
                // *** Start programmer edit section *** (ОтчетОЗак.СостОтгрузки Set end)

                // *** End programmer edit section *** (ОтчетОЗак.СостОтгрузки Set end)
            }
        }
        
        /// <summary>
        /// СостояниеОплаты.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты CustomAttributes)
        public override IIS.123.СостОплаты СостояниеОплаты
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты Get start)

                // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты Get start)
                IIS.123.СостОплаты result = base.СостояниеОплаты;
                // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты Get end)

                // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты Set start)

                // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты Set start)
                base.СостояниеОплаты = value;
                // *** Start programmer edit section *** (ОтчетОЗак.СостояниеОплаты Set end)

                // *** End programmer edit section *** (ОтчетОЗак.СостояниеОплаты Set end)
            }
        }
        
        /// <summary>
        /// СуммаВклНДС.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС CustomAttributes)
        public override bool СуммаВклНДС
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС Get start)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС Get start)
                bool result = base.СуммаВклНДС;
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС Get end)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС Set start)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС Set start)
                base.СуммаВклНДС = value;
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаВклНДС Set end)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаВклНДС Set end)
            }
        }
        
        /// <summary>
        /// СуммаДокумента.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента CustomAttributes)

        // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента CustomAttributes)
        public override int СуммаДокумента
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента Get start)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента Get start)
                int result = base.СуммаДокумента;
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента Get end)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента Set start)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента Set start)
                base.СуммаДокумента = value;
                // *** Start programmer edit section *** (ОтчетОЗак.СуммаДокумента Set end)

                // *** End programmer edit section *** (ОтчетОЗак.СуммаДокумента Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтчетОЗакE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтчетОЗакE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтчетОЗакE", typeof(IIS.123.ОтчетОЗак));
                }
            }
            
            /// <summary>
            /// "ОтчетОЗакL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтчетОЗакL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтчетОЗакL", typeof(IIS.123.ОтчетОЗак));
                }
            }
        }
    }
}
