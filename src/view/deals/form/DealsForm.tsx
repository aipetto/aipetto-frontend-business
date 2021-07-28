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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import dealsEnumerators from 'src/modules/deals/dealsEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  status: yupFormSchemas.enumerator(
    i18n('entities.deals.fields.status'),
    {
      "options": dealsEnumerators.status
    },
  ),
  customer: yupFormSchemas.relationToOne(
    i18n('entities.deals.fields.customer'),
    {},
  ),
  digitalContracts: yupFormSchemas.files(
    i18n('entities.deals.fields.digitalContracts'),
    {},
  ),
  dateStart: yupFormSchemas.date(
    i18n('entities.deals.fields.dateStart'),
    {},
  ),
  dateEnded: yupFormSchemas.date(
    i18n('entities.deals.fields.dateEnded'),
    {},
  ),
  salesManagerResponsible: yupFormSchemas.relationToOne(
    i18n('entities.deals.fields.salesManagerResponsible'),
    {},
  ),
  businessID: yupFormSchemas.relationToOne(
    i18n('entities.deals.fields.businessID'),
    {},
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.deals.fields.country'),
    {},
  ),
});

function DealsForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      status: record.status,
      customer: record.customer,
      digitalContracts: record.digitalContracts || [],
      dateStart: record.dateStart ? moment(record.dateStart, 'YYYY-MM-DD').toDate() : null,
      dateEnded: record.dateEnded ? moment(record.dateEnded, 'YYYY-MM-DD').toDate() : null,
      salesManagerResponsible: record.salesManagerResponsible,
      businessID: record.businessID,
      country: record.country,
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
          <SelectFormItem
            name="status"
            label={i18n('entities.deals.fields.status')}
            options={dealsEnumerators.status.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deals.enumerators.status.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CustomerAutocompleteFormItem  
            name="customer"
            label={i18n('entities.deals.fields.customer')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="digitalContracts"
            label={i18n('entities.deals.fields.digitalContracts')}
            required={false}
            storage={Storage.values.dealsDigitalContracts}
            max={undefined}
            formats={undefined}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="dateStart"
            label={i18n('entities.deals.fields.dateStart')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="dateEnded"
            label={i18n('entities.deals.fields.dateEnded')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem  
            name="salesManagerResponsible"
            label={i18n('entities.deals.fields.salesManagerResponsible')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem  
            name="businessID"
            label={i18n('entities.deals.fields.businessID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem  
            name="country"
            label={i18n('entities.deals.fields.country')}
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

export default DealsForm;
