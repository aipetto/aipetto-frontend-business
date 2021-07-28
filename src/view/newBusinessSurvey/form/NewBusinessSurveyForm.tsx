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
import newBusinessSurveyEnumerators from 'src/modules/newBusinessSurvey/newBusinessSurveyEnumerators';
import * as yup from 'yup';

const schema = yup.object().shape({
  nameBusiness: yupFormSchemas.string(
    i18n('entities.newBusinessSurvey.fields.nameBusiness'),
    {
      "required": true
    },
  ),
  numberOfPlaces: yupFormSchemas.string(
    i18n('entities.newBusinessSurvey.fields.numberOfPlaces'),
    {},
  ),
  contactName: yupFormSchemas.string(
    i18n('entities.newBusinessSurvey.fields.contactName'),
    {},
  ),
  contactEmail: yupFormSchemas.string(
    i18n('entities.newBusinessSurvey.fields.contactEmail'),
    {},
  ),
  contactPhone: yupFormSchemas.string(
    i18n('entities.newBusinessSurvey.fields.contactPhone'),
    {},
  ),
  cellphoneForSMS: yupFormSchemas.string(
    i18n('entities.newBusinessSurvey.fields.cellphoneForSMS'),
    {},
  ),
  digitalNetworks: yupFormSchemas.string(
    i18n('entities.newBusinessSurvey.fields.digitalNetworks'),
    {},
  ),
  allowReceiveNotifications: yupFormSchemas.boolean(
    i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications'),
    {},
  ),
  services: yupFormSchemas.stringArray(
    i18n('entities.newBusinessSurvey.fields.services'),
    {},
  ),
  address: yupFormSchemas.string(
    i18n('entities.newBusinessSurvey.fields.address'),
    {},
  ),
  latitude: yupFormSchemas.decimal(
    i18n('entities.newBusinessSurvey.fields.latitude'),
    {},
  ),
  longitude: yupFormSchemas.decimal(
    i18n('entities.newBusinessSurvey.fields.longitude'),
    {},
  ),
});

function NewBusinessSurveyForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nameBusiness: record.nameBusiness,
      numberOfPlaces: record.numberOfPlaces,
      contactName: record.contactName,
      contactEmail: record.contactEmail,
      contactPhone: record.contactPhone,
      cellphoneForSMS: record.cellphoneForSMS,
      digitalNetworks: record.digitalNetworks,
      allowReceiveNotifications: record.allowReceiveNotifications,
      services: record.services || [],
      address: record.address,
      latitude: record.latitude,
      longitude: record.longitude,
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
            name="nameBusiness"
            label={i18n('entities.newBusinessSurvey.fields.nameBusiness')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="numberOfPlaces"
            label={i18n('entities.newBusinessSurvey.fields.numberOfPlaces')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactName"
            label={i18n('entities.newBusinessSurvey.fields.contactName')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactEmail"
            label={i18n('entities.newBusinessSurvey.fields.contactEmail')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contactPhone"
            label={i18n('entities.newBusinessSurvey.fields.contactPhone')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="cellphoneForSMS"
            label={i18n('entities.newBusinessSurvey.fields.cellphoneForSMS')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="digitalNetworks"
            label={i18n('entities.newBusinessSurvey.fields.digitalNetworks')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="allowReceiveNotifications"
            label={i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="services"
            label={i18n('entities.newBusinessSurvey.fields.services')}
            options={newBusinessSurveyEnumerators.services.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.newBusinessSurvey.enumerators.services.${value}`,
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
            label={i18n('entities.newBusinessSurvey.fields.address')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="latitude"
            label={i18n('entities.newBusinessSurvey.fields.latitude')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="longitude"
            label={i18n('entities.newBusinessSurvey.fields.longitude')}
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

export default NewBusinessSurveyForm;
