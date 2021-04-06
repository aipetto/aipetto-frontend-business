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
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import PlaceAutocompleteFormItem from 'src/view/place/autocomplete/PlaceAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  date: yupFormSchemas.date(
    i18n('entities.serviceReservation.fields.date'),
    {},
  ),
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.businessId'),
    {},
  ),
  customerId: yupFormSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.customerId'),
    {},
  ),
  serviceType: yupFormSchemas.relationToMany(
    i18n('entities.serviceReservation.fields.serviceType'),
    {},
  ),
  time: yupFormSchemas.string(
    i18n('entities.serviceReservation.fields.time'),
    {},
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
});

function ServiceReservationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      date: record.date ? moment(record.date, 'YYYY-MM-DD').toDate() : null,
      businessId: record.businessId,
      customerId: record.customerId,
      serviceType: record.serviceType || [],
      time: record.time,
      needTransportation: record.needTransportation,
      place: record.place,
      status: record.status,
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
          <BusinessAutocompleteFormItem  
            name="businessId"
            label={i18n('entities.serviceReservation.fields.businessId')}
            required={false}
            showCreate={!props.modal}
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
          <BusinessServicesTypesAutocompleteFormItem  
            name="serviceType"
            label={i18n('entities.serviceReservation.fields.serviceType')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="time"
            label={i18n('entities.serviceReservation.fields.time')}
            required={false}
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
