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
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import BusinessCategoryAutocompleteFormItem from 'src/view/businessCategory/autocomplete/BusinessCategoryAutocompleteFormItem';
import CityAutocompleteFormItem from 'src/view/city/autocomplete/CityAutocompleteFormItem';
import StateAutocompleteFormItem from 'src/view/state/autocomplete/StateAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  businessID: yupFormSchemas.string(
    i18n('entities.business.fields.businessID'),
    {
      "required": true
    },
  ),
  name: yupFormSchemas.string(
    i18n('entities.business.fields.name'),
    {},
  ),
  services: yupFormSchemas.relationToMany(
    i18n('entities.business.fields.services'),
    {},
  ),
  categories: yupFormSchemas.relationToMany(
    i18n('entities.business.fields.categories'),
    {},
  ),
  contactName: yupFormSchemas.string(
    i18n('entities.business.fields.contactName'),
    {},
  ),
  contactPhone: yupFormSchemas.string(
    i18n('entities.business.fields.contactPhone'),
    {},
  ),
  contactWhatsApp: yupFormSchemas.string(
    i18n('entities.business.fields.contactWhatsApp'),
    {},
  ),
  contactEmail: yupFormSchemas.string(
    i18n('entities.business.fields.contactEmail'),
    {},
  ),
  addressStreet: yupFormSchemas.string(
    i18n('entities.business.fields.addressStreet'),
    {},
  ),
  addressStreetNumber: yupFormSchemas.string(
    i18n('entities.business.fields.addressStreetNumber'),
    {},
  ),
  addressPostCode: yupFormSchemas.string(
    i18n('entities.business.fields.addressPostCode'),
    {},
  ),
  city: yupFormSchemas.relationToOne(
    i18n('entities.business.fields.city'),
    {},
  ),
  state: yupFormSchemas.relationToOne(
    i18n('entities.business.fields.state'),
    {},
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.business.fields.country'),
    {},
  ),
});

function BusinessForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      businessID: record.businessID,
      name: record.name,
      services: record.services || [],
      categories: record.categories || [],
      contactName: record.contactName,
      contactPhone: record.contactPhone,
      contactWhatsApp: record.contactWhatsApp,
      contactEmail: record.contactEmail,
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
            name="businessID"
            label={i18n('entities.business.fields.businessID')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="name"
            label={i18n('entities.business.fields.name')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessServicesTypesAutocompleteFormItem
            name="services"
            label={i18n('entities.business.fields.services')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessCategoryAutocompleteFormItem
            name="categories"
            label={i18n('entities.business.fields.categories')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactName"
            label={i18n('entities.business.fields.contactName')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactPhone"
            label={i18n('entities.business.fields.contactPhone')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactWhatsApp"
            label={i18n('entities.business.fields.contactWhatsApp')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactEmail"
            label={i18n('entities.business.fields.contactEmail')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressStreet"
            label={i18n('entities.business.fields.addressStreet')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressStreetNumber"
            label={i18n('entities.business.fields.addressStreetNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressPostCode"
            label={i18n('entities.business.fields.addressPostCode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CityAutocompleteFormItem
            name="city"
            label={i18n('entities.business.fields.city')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <StateAutocompleteFormItem
            name="state"
            label={i18n('entities.business.fields.state')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem
            name="country"
            label={i18n('entities.business.fields.country')}
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

export default BusinessForm;
