import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import businessPaymentCycleEnumerators from 'src/modules/businessPaymentCycle/businessPaymentCycleEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import ServiceReservationAutocompleteFormItem from 'src/view/serviceReservation/autocomplete/ServiceReservationAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  businessID: yupFormSchemas.relationToOne(
    i18n('entities.businessPaymentCycle.fields.businessID'),
    {},
  ),
  cycleStart: yupFormSchemas.date(
    i18n('entities.businessPaymentCycle.fields.cycleStart'),
    {},
  ),
  cycleEnd: yupFormSchemas.date(
    i18n('entities.businessPaymentCycle.fields.cycleEnd'),
    {},
  ),
  statusPayment: yupFormSchemas.enumerator(
    i18n('entities.businessPaymentCycle.fields.statusPayment'),
    {
      "options": businessPaymentCycleEnumerators.statusPayment
    },
  ),
  totalBusinessServiceReservationPeriod: yupFormSchemas.decimal(
    i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriod'),
    {},
  ),
  totalCommisionCalculated: yupFormSchemas.decimal(
    i18n('entities.businessPaymentCycle.fields.totalCommisionCalculated'),
    {},
  ),
  commisionRateUsedOnCalculation: yupFormSchemas.decimal(
    i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculation'),
    {},
  ),
  businessServiceReservationsUsed: yupFormSchemas.relationToMany(
    i18n('entities.businessPaymentCycle.fields.businessServiceReservationsUsed'),
    {},
  ),
  statusCyclePayment: yupFormSchemas.enumerator(
    i18n('entities.businessPaymentCycle.fields.statusCyclePayment'),
    {
      "required": true,
      "options": businessPaymentCycleEnumerators.statusCyclePayment
    },
  ),
  customerID: yupFormSchemas.relationToOne(
    i18n('entities.businessPaymentCycle.fields.customerID'),
    {},
  ),
  paymentMethod: yupFormSchemas.enumerator(
    i18n('entities.businessPaymentCycle.fields.paymentMethod'),
    {
      "options": businessPaymentCycleEnumerators.paymentMethod
    },
  ),
  paymentGatewayReferenceCode: yupFormSchemas.string(
    i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode'),
    {},
  ),
  paymentGatewayType: yupFormSchemas.enumerator(
    i18n('entities.businessPaymentCycle.fields.paymentGatewayType'),
    {
      "options": businessPaymentCycleEnumerators.paymentGatewayType
    },
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.businessPaymentCycle.fields.country'),
    {},
  ),
  currency: yupFormSchemas.relationToOne(
    i18n('entities.businessPaymentCycle.fields.currency'),
    {},
  ),
});

function BusinessPaymentCycleForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      businessID: record.businessID,
      cycleStart: record.cycleStart ? moment(record.cycleStart, 'YYYY-MM-DD').toDate() : null,
      cycleEnd: record.cycleEnd ? moment(record.cycleEnd, 'YYYY-MM-DD').toDate() : null,
      statusPayment: record.statusPayment,
      totalBusinessServiceReservationPeriod: record.totalBusinessServiceReservationPeriod,
      totalCommisionCalculated: record.totalCommisionCalculated,
      commisionRateUsedOnCalculation: record.commisionRateUsedOnCalculation,
      businessServiceReservationsUsed: record.businessServiceReservationsUsed || [],
      statusCyclePayment: record.statusCyclePayment,
      customerID: record.customerID,
      paymentMethod: record.paymentMethod,
      paymentGatewayReferenceCode: record.paymentGatewayReferenceCode,
      paymentGatewayType: record.paymentGatewayType,
      country: record.country,
      currency: record.currency,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <BusinessAutocompleteFormItem  
            name="businessID"
            label={i18n('entities.businessPaymentCycle.fields.businessID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="cycleStart"
            label={i18n('entities.businessPaymentCycle.fields.cycleStart')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="cycleEnd"
            label={i18n('entities.businessPaymentCycle.fields.cycleEnd')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="statusPayment"
            label={i18n('entities.businessPaymentCycle.fields.statusPayment')}
          hint={i18n('entities.businessPaymentCycle.hints.statusPayment')}
            options={businessPaymentCycleEnumerators.statusPayment.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.businessPaymentCycle.enumerators.statusPayment.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="totalBusinessServiceReservationPeriod"
            label={i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriod')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="totalCommisionCalculated"
            label={i18n('entities.businessPaymentCycle.fields.totalCommisionCalculated')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="commisionRateUsedOnCalculation"
            label={i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculation')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ServiceReservationAutocompleteFormItem  
            name="businessServiceReservationsUsed"
            label={i18n('entities.businessPaymentCycle.fields.businessServiceReservationsUsed')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="statusCyclePayment"
            label={i18n('entities.businessPaymentCycle.fields.statusCyclePayment')}
            options={businessPaymentCycleEnumerators.statusCyclePayment.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.businessPaymentCycle.enumerators.statusCyclePayment.${value}`,
                ),
              }),
            )}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CustomerAutocompleteFormItem  
            name="customerID"
            label={i18n('entities.businessPaymentCycle.fields.customerID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="paymentMethod"
            label={i18n('entities.businessPaymentCycle.fields.paymentMethod')}
            options={businessPaymentCycleEnumerators.paymentMethod.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.businessPaymentCycle.enumerators.paymentMethod.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="paymentGatewayReferenceCode"
            label={i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="paymentGatewayType"
            label={i18n('entities.businessPaymentCycle.fields.paymentGatewayType')}
            options={businessPaymentCycleEnumerators.paymentGatewayType.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.businessPaymentCycle.enumerators.paymentGatewayType.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem  
            name="country"
            label={i18n('entities.businessPaymentCycle.fields.country')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CurrencyAutocompleteFormItem  
            name="currency"
            label={i18n('entities.businessPaymentCycle.fields.currency')}
            required={false}
            showCreate={!props.modal}
          />
        </div>

        <div className="pt-4">
          <button
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={saveLoading}
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faSave}
            />
            {i18n('common.save')}
          </button>

          <button
            disabled={saveLoading}
            onClick={onReset}
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUndo}
            />
            {i18n('common.reset')}
          </button>

          {props.onCancel ? (
            <button
              disabled={saveLoading}
              onClick={() => props.onCancel()}
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="button"
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faTimes}
              />
              {i18n('common.cancel')}
            </button>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
}

export default BusinessPaymentCycleForm;
