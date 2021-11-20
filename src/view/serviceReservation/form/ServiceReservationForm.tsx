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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import serviceReservationEnumerators from 'src/modules/serviceReservation/serviceReservationEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import PetAutocompleteFormItem from 'src/view/pet/autocomplete/PetAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import ProvidersAutocompleteFormItem from 'src/view/providers/autocomplete/ProvidersAutocompleteFormItem';
import PlaceAutocompleteFormItem from 'src/view/place/autocomplete/PlaceAutocompleteFormItem';
import DiscountsAutocompleteFormItem from 'src/view/discounts/autocomplete/DiscountsAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  date: yupFormSchemas.date(
    i18n('entities.serviceReservation.fields.date'),
    {},
  ),
  customerId: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.customerId'),
    {},
  ),
  pet: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.pet'),
    {
      "required": true
    },
  ),
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.businessId'),
    {},
  ),
  serviceType: yupFormSchemas.relationToMany(
    i18n('entities.serviceReservation.fields.serviceType'),
    {},
  ),
  serviceProviderIDs: yupFormSchemas.relationToMany(
    i18n('entities.serviceReservation.fields.serviceProviderIDs'),
    {},
  ),
  time: yupFormSchemas.enumerator(
    i18n('entities.serviceReservation.fields.time'),
    {
      "required": true,
      "options": serviceReservationEnumerators.time
    },
  ),
  needTransportation: yupFormSchemas.boolean(
    i18n('entities.serviceReservation.fields.needTransportation'),
    {},
  ),
  place: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.place'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.serviceReservation.fields.status'),
    {
      "options": serviceReservationEnumerators.status
    },
  ),
  totalPrice: yupFormSchemas.decimal(
    i18n('entities.serviceReservation.fields.totalPrice'),
    {},
  ),
  totalPriceWithDiscount: yupFormSchemas.decimal(
    i18n('entities.serviceReservation.fields.totalPriceWithDiscount'),
    {},
  ),
  discountCode: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.discountCode'),
    {},
  ),
  currency: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.currency'),
    {},
  ),
  digitalReservationDoc: yupFormSchemas.files(
    i18n('entities.serviceReservation.fields.digitalReservationDoc'),
    {},
  ),
  totalPriceTransportartion: yupFormSchemas.decimal(
    i18n('entities.serviceReservation.fields.totalPriceTransportartion'),
    {},
  ),
  ratingFromCustomer: yupFormSchemas.decimal(
    i18n('entities.serviceReservation.fields.ratingFromCustomer'),
    {},
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.country'),
    {},
  ),
  source: yupFormSchemas.enumerator(
    i18n('entities.serviceReservation.fields.source'),
    {
      "options": serviceReservationEnumerators.source
    },
  ),
  notes: yupFormSchemas.string(
    i18n('entities.serviceReservation.fields.notes'),
    {},
  ),
  customerQuestions: yupFormSchemas.string(
    i18n('entities.serviceReservation.fields.customerQuestions'),
    {},
  ),
});

function ServiceReservationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      date: record.date ? moment(record.date, 'YYYY-MM-DD').toDate() : null,
      businessId: record.businessId,
      customerId: record.customerId,
      pet: record.pet,
      serviceType: record.serviceType || [],
      serviceProviderIDs: record.serviceProviderIDs || [],
      time: record.time,
      needTransportation: record.needTransportation,
      place: record.place,
      status: record.status,
      totalPrice: record.totalPrice,
      totalPriceWithDiscount: record.totalPriceWithDiscount,
      discountCode: record.discountCode,
      currency: record.currency,
      digitalReservationDoc: record.digitalReservationDoc || [],
      totalPriceTransportartion: record.totalPriceTransportartion,
      ratingFromCustomer: record.ratingFromCustomer,
      country: record.country,
      source: record.source,
      notes: record.notes,
      customerQuestions: record.customerQuestions,
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
          <DatePickerFormItem
            name="date"
            label={i18n('entities.serviceReservation.fields.date')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CustomerAutocompleteFormItem
            name="customerId"
            label={i18n('entities.serviceReservation.fields.customerId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetAutocompleteFormItem
            name="pet"
            label={i18n('entities.serviceReservation.fields.pet')}
            required={true}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem
            name="businessId"
            label={i18n('entities.serviceReservation.fields.businessId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessServicesTypesAutocompleteFormItem  
            name="serviceType"
            label={i18n('entities.serviceReservation.fields.serviceType')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ProvidersAutocompleteFormItem
            name="serviceProviderIDs"
            label={i18n('entities.serviceReservation.fields.serviceProviderIDs')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="time"
            label={i18n('entities.serviceReservation.fields.time')}
            options={serviceReservationEnumerators.time.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.serviceReservation.enumerators.time.${value}`,
                ),
              }),
            )}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="needTransportation"
            label={i18n('entities.serviceReservation.fields.needTransportation')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PlaceAutocompleteFormItem  
            name="place"
            label={i18n('entities.serviceReservation.fields.place')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="status"
            label={i18n('entities.serviceReservation.fields.status')}
            options={serviceReservationEnumerators.status.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.serviceReservation.enumerators.status.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="totalPrice"
            label={i18n('entities.serviceReservation.fields.totalPrice')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="totalPriceWithDiscount"
            label={i18n('entities.serviceReservation.fields.totalPriceWithDiscount')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DiscountsAutocompleteFormItem
            name="discountCode"
            label={i18n('entities.serviceReservation.fields.discountCode')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CurrencyAutocompleteFormItem
            name="currency"
            label={i18n('entities.serviceReservation.fields.currency')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="digitalReservationDoc"
            label={i18n('entities.serviceReservation.fields.digitalReservationDoc')}
            required={false}
            storage={Storage.values.serviceReservationDigitalReservationDoc}
            max={undefined}
            formats={undefined}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="totalPriceTransportartion"
            label={i18n('entities.serviceReservation.fields.totalPriceTransportartion')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="ratingFromCustomer"
            label={i18n('entities.serviceReservation.fields.ratingFromCustomer')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem
            name="country"
            label={i18n('entities.serviceReservation.fields.country')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="source"
            label={i18n('entities.serviceReservation.fields.source')}
            options={serviceReservationEnumerators.source.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.serviceReservation.enumerators.source.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="notes"
            label={i18n('entities.serviceReservation.fields.notes')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="customerQuestions"
            label={i18n('entities.serviceReservation.fields.customerQuestions')}
            required={false}
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

export default ServiceReservationForm;
