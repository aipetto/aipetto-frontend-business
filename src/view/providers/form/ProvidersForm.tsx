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
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import BusinessCategoryAutocompleteFormItem from 'src/view/businessCategory/autocomplete/BusinessCategoryAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import CityAutocompleteFormItem from 'src/view/city/autocomplete/CityAutocompleteFormItem';
import StateAutocompleteFormItem from 'src/view/state/autocomplete/StateAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.providers.fields.name'),
    {
      "required": true
    },
  ),
  businessID: yupFormSchemas.relationToOne(
    i18n('entities.providers.fields.businessID'),
    {},
  ),
  providerID: yupFormSchemas.string(
    i18n('entities.providers.fields.providerID'),
    {
      "required": true
    },
  ),
  category: yupFormSchemas.relationToMany(
    i18n('entities.providers.fields.category'),
    {},
  ),
  serviceTypes: yupFormSchemas.relationToMany(
    i18n('entities.providers.fields.serviceTypes'),
    {},
  ),
  contactName: yupFormSchemas.string(
    i18n('entities.providers.fields.contactName'),
    {},
  ),
  contactPhone: yupFormSchemas.string(
    i18n('entities.providers.fields.contactPhone'),
    {},
  ),
  contactWhatsApp: yupFormSchemas.string(
    i18n('entities.providers.fields.contactWhatsApp'),
    {},
  ),
  addressStreet: yupFormSchemas.string(
    i18n('entities.providers.fields.addressStreet'),
    {},
  ),
  addressStreetNumber: yupFormSchemas.string(
    i18n('entities.providers.fields.addressStreetNumber'),
    {},
  ),
  addressPostCode: yupFormSchemas.string(
    i18n('entities.providers.fields.addressPostCode'),
    {},
  ),
  city: yupFormSchemas.relationToOne(
    i18n('entities.providers.fields.city'),
    {},
  ),
  state: yupFormSchemas.relationToOne(
    i18n('entities.providers.fields.state'),
    {},
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.providers.fields.country'),
    {},
  ),
});

function ProvidersForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      businessID: record.businessID,
      providerID: record.providerID,
      category: record.category || [],
      serviceTypes: record.serviceTypes || [],
      contactName: record.contactName,
      contactPhone: record.contactPhone,
      contactWhatsApp: record.contactWhatsApp,
      addressStreet: record.addressStreet,
      addressStreetNumber: record.addressStreetNumber,
      addressPostCode: record.addressPostCode,
      city: record.city,
      state: record.state,
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
          <InputFormItem
            name="name"
            label={i18n('entities.providers.fields.name')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem  
            name="businessID"
            label={i18n('entities.providers.fields.businessID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="providerID"
            label={i18n('entities.providers.fields.providerID')}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessCategoryAutocompleteFormItem  
            name="category"
            label={i18n('entities.providers.fields.category')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessServicesTypesAutocompleteFormItem  
            name="serviceTypes"
            label={i18n('entities.providers.fields.serviceTypes')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactName"
            label={i18n('entities.providers.fields.contactName')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactPhone"
            label={i18n('entities.providers.fields.contactPhone')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactWhatsApp"
            label={i18n('entities.providers.fields.contactWhatsApp')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressStreet"
            label={i18n('entities.providers.fields.addressStreet')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressStreetNumber"
            label={i18n('entities.providers.fields.addressStreetNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressPostCode"
            label={i18n('entities.providers.fields.addressPostCode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CityAutocompleteFormItem  
            name="city"
            label={i18n('entities.providers.fields.city')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <StateAutocompleteFormItem  
            name="state"
            label={i18n('entities.providers.fields.state')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem  
            name="country"
            label={i18n('entities.providers.fields.country')}
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

export default ProvidersForm;
