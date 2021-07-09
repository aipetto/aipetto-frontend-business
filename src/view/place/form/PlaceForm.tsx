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
import PlaceTypeAutocompleteFormItem from 'src/view/placeType/autocomplete/PlaceTypeAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import BusinessCategoryAutocompleteFormItem from 'src/view/businessCategory/autocomplete/BusinessCategoryAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.place.fields.name'),
    {
      "required": true
    },
  ),
  placeType: yupFormSchemas.relationToOne(
    i18n('entities.place.fields.placeType'),
    {},
  ),
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.place.fields.businessId'),
    {},
  ),
  services: yupFormSchemas.relationToMany(
    i18n('entities.place.fields.services'),
    {},
  ),
  categories: yupFormSchemas.relationToMany(
    i18n('entities.place.fields.categories'),
    {},
  ),
  latitude: yupFormSchemas.decimal(
    i18n('entities.place.fields.latitude'),
    {},
  ),
  longitude: yupFormSchemas.decimal(
    i18n('entities.place.fields.longitude'),
    {},
  ),
  address: yupFormSchemas.string(
    i18n('entities.place.fields.address'),
    {},
  ),
  addressNumber: yupFormSchemas.string(
    i18n('entities.place.fields.addressNumber'),
    {},
  ),
  addressZipCode: yupFormSchemas.string(
    i18n('entities.place.fields.addressZipCode'),
    {},
  ),
  addressCity: yupFormSchemas.string(
    i18n('entities.place.fields.addressCity'),
    {},
  ),
  addressState: yupFormSchemas.string(
    i18n('entities.place.fields.addressState'),
    {},
  ),
  addressCountry: yupFormSchemas.relationToOne(
    i18n('entities.place.fields.addressCountry'),
    {},
  ),
  openTime: yupFormSchemas.string(
    i18n('entities.place.fields.openTime'),
    {},
  ),
  closeTime: yupFormSchemas.string(
    i18n('entities.place.fields.closeTime'),
    {},
  ),
  is24hours: yupFormSchemas.boolean(
    i18n('entities.place.fields.is24hours'),
    {},
  ),
  stars: yupFormSchemas.decimal(
    i18n('entities.place.fields.stars'),
    {},
  ),
  isOpen: yupFormSchemas.boolean(
    i18n('entities.place.fields.isOpen'),
    {},
  ),
});

function PlaceForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      placeType: record.placeType,
      businessId: record.businessId,
      services: record.services || [],
      categories: record.categories || [],
      latitude: record.latitude,
      longitude: record.longitude,
      address: record.address,
      addressNumber: record.addressNumber,
      addressZipCode: record.addressZipCode,
      addressCity: record.addressCity,
      addressState: record.addressState,
      addressCountry: record.addressCountry,
      openTime: record.openTime,
      closeTime: record.closeTime,
      is24hours: record.is24hours,
      stars: record.stars,
      isOpen: record.isOpen,
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
            label={i18n('entities.place.fields.name')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PlaceTypeAutocompleteFormItem
            name="placeType"
            label={i18n('entities.place.fields.placeType')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem
            name="businessId"
            label={i18n('entities.place.fields.businessId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessServicesTypesAutocompleteFormItem
            name="services"
            label={i18n('entities.place.fields.services')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessCategoryAutocompleteFormItem
            name="categories"
            label={i18n('entities.place.fields.categories')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="latitude"
            label={i18n('entities.place.fields.latitude')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="longitude"
            label={i18n('entities.place.fields.longitude')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="address"
            label={i18n('entities.place.fields.address')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressNumber"
            label={i18n('entities.place.fields.addressNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressZipCode"
            label={i18n('entities.place.fields.addressZipCode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressCity"
            label={i18n('entities.place.fields.addressCity')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressState"
            label={i18n('entities.place.fields.addressState')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem
            name="addressCountry"
            label={i18n('entities.place.fields.addressCountry')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="openTime"
            label={i18n('entities.place.fields.openTime')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="closeTime"
            label={i18n('entities.place.fields.closeTime')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="is24hours"
            label={i18n('entities.place.fields.is24hours')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="stars"
            label={i18n('entities.place.fields.stars')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isOpen"
            label={i18n('entities.place.fields.isOpen')}
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

export default PlaceForm;
