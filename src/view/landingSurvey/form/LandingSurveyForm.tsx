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
import landingSurveyEnumerators from 'src/modules/landingSurvey/landingSurveyEnumerators';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.landingSurvey.fields.name'),
    {
      "required": true
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.landingSurvey.fields.email'),
    {
      "required": true
    },
  ),
  numberOfPets: yupFormSchemas.string(
    i18n('entities.landingSurvey.fields.numberOfPets'),
    {},
  ),
  interests: yupFormSchemas.stringArray(
    i18n('entities.landingSurvey.fields.interests'),
    {},
  ),
  extraInfo: yupFormSchemas.string(
    i18n('entities.landingSurvey.fields.extraInfo'),
    {},
  ),
  allowReceiveNotifications: yupFormSchemas.boolean(
    i18n('entities.landingSurvey.fields.allowReceiveNotifications'),
    {},
  ),
  latitude: yupFormSchemas.decimal(
    i18n('entities.landingSurvey.fields.latitude'),
    {},
  ),
  longitude: yupFormSchemas.decimal(
    i18n('entities.landingSurvey.fields.longitude'),
    {},
  ),
  petProfession: yupFormSchemas.stringArray(
    i18n('entities.landingSurvey.fields.petProfession'),
    {},
  ),
  address: yupFormSchemas.string(
    i18n('entities.landingSurvey.fields.address'),
    {},
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.landingSurvey.fields.country'),
    {},
  ),
});

function LandingSurveyForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      email: record.email,
      numberOfPets: record.numberOfPets,
      interests: record.interests || [],
      extraInfo: record.extraInfo,
      allowReceiveNotifications: record.allowReceiveNotifications,
      latitude: record.latitude,
      longitude: record.longitude,
      petProfession: record.petProfession || [],
      address: record.address,
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
            label={i18n('entities.landingSurvey.fields.name')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="email"
            label={i18n('entities.landingSurvey.fields.email')}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="numberOfPets"
            label={i18n('entities.landingSurvey.fields.numberOfPets')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="interests"
            label={i18n('entities.landingSurvey.fields.interests')}
            options={landingSurveyEnumerators.interests.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.landingSurvey.enumerators.interests.${value}`,
                ),
              }),
            )}
            required={false}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="extraInfo"
            label={i18n('entities.landingSurvey.fields.extraInfo')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="allowReceiveNotifications"
            label={i18n('entities.landingSurvey.fields.allowReceiveNotifications')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="latitude"
            label={i18n('entities.landingSurvey.fields.latitude')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="longitude"
            label={i18n('entities.landingSurvey.fields.longitude')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="petProfession"
            label={i18n('entities.landingSurvey.fields.petProfession')}
            options={landingSurveyEnumerators.petProfession.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.landingSurvey.enumerators.petProfession.${value}`,
                ),
              }),
            )}
            required={false}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="address"
            label={i18n('entities.landingSurvey.fields.address')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem
            name="country"
            label={i18n('entities.landingSurvey.fields.country')}
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

export default LandingSurveyForm;
