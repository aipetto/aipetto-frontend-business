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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  from: yupFormSchemas.relationToOne(
    i18n('entities.messages.fields.from'),
    {
      "required": true
    },
  ),
  to: yupFormSchemas.relationToOne(
    i18n('entities.messages.fields.to'),
    {
      "required": true
    },
  ),
  message: yupFormSchemas.string(
    i18n('entities.messages.fields.message'),
    {
      "required": true
    },
  ),
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.messages.fields.businessId'),
    {},
  ),
  language: yupFormSchemas.relationToOne(
    i18n('entities.messages.fields.language'),
    {},
  ),
});

function MessagesForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      from: record.from,
      to: record.to,
      message: record.message,
      businessId: record.businessId,
      language: record.language,
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
          <UserAutocompleteFormItem  
            name="from"
            label={i18n('entities.messages.fields.from')}
            required={true}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem  
            name="to"
            label={i18n('entities.messages.fields.to')}
            required={true}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="message"
            label={i18n('entities.messages.fields.message')}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem
            name="businessId"
            label={i18n('entities.messages.fields.businessId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <LanguagesAutocompleteFormItem
            name="language"
            label={i18n('entities.messages.fields.language')}
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

export default MessagesForm;
