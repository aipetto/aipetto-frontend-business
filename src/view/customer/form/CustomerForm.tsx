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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import customerEnumerators from 'src/modules/customer/customerEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.businessId'),
    {},
  ),
  source: yupFormSchemas.enumerator(
    i18n('entities.customer.fields.source'),
    {
      "options": customerEnumerators.source
    },
  ),
  userId: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.userId'),
    {},
  ),
  name: yupFormSchemas.string(
    i18n('entities.customer.fields.name'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  surname: yupFormSchemas.string(
    i18n('entities.customer.fields.surname'),
    {},
  ),
  birthdate: yupFormSchemas.date(
    i18n('entities.customer.fields.birthdate'),
    {},
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.customer.fields.gender'),
    {
      "options": customerEnumerators.gender
    },
  ),
  whatsApp: yupFormSchemas.string(
    i18n('entities.customer.fields.whatsApp'),
    {},
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('entities.customer.fields.phoneNumber'),
    {},
  ),
  address: yupFormSchemas.string(
    i18n('entities.customer.fields.address'),
    {},
  ),
  zipCode: yupFormSchemas.string(
    i18n('entities.customer.fields.zipCode'),
    {},
  ),
  city: yupFormSchemas.string(
    i18n('entities.customer.fields.city'),
    {},
  ),
  state: yupFormSchemas.string(
    i18n('entities.customer.fields.state'),
    {},
  ),
  country: yupFormSchemas.string(
    i18n('entities.customer.fields.country'),
    {},
  ),
  billingAddressStreet: yupFormSchemas.string(
    i18n('entities.customer.fields.billingAddressStreet'),
    {},
  ),
  billingAddressCity: yupFormSchemas.string(
    i18n('entities.customer.fields.billingAddressCity'),
    {},
  ),
  billingAddressState: yupFormSchemas.string(
    i18n('entities.customer.fields.billingAddressState'),
    {},
  ),
  billingAddressZipCode: yupFormSchemas.string(
    i18n('entities.customer.fields.billingAddressZipCode'),
    {},
  ),
  billingAddressCountry: yupFormSchemas.string(
    i18n('entities.customer.fields.billingAddressCountry'),
    {},
  ),
  shippingAddressStreet: yupFormSchemas.string(
    i18n('entities.customer.fields.shippingAddressStreet'),
    {},
  ),
  shippingAddressCity: yupFormSchemas.string(
    i18n('entities.customer.fields.shippingAddressCity'),
    {},
  ),
  shippingAddressState: yupFormSchemas.string(
    i18n('entities.customer.fields.shippingAddressState'),
    {},
  ),
  shippingAddressZipCode: yupFormSchemas.string(
    i18n('entities.customer.fields.shippingAddressZipCode'),
    {},
  ),
  shippingAddressCountry: yupFormSchemas.string(
    i18n('entities.customer.fields.shippingAddressCountry'),
    {},
  ),
});

function CustomerForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      businessId: record.businessId,
      source: record.source,
      userId: record.userId,
      name: record.name,
      surname: record.surname,
      birthdate: record.birthdate ? moment(record.birthdate, 'YYYY-MM-DD').toDate() : null,
      gender: record.gender,
      whatsApp: record.whatsApp,
      phoneNumber: record.phoneNumber,
      address: record.address,
      zipCode: record.zipCode,
      city: record.city,
      state: record.state,
      country: record.country,
      billingAddressStreet: record.billingAddressStreet,
      billingAddressCity: record.billingAddressCity,
      billingAddressState: record.billingAddressState,
      billingAddressZipCode: record.billingAddressZipCode,
      billingAddressCountry: record.billingAddressCountry,
      shippingAddressStreet: record.shippingAddressStreet,
      shippingAddressCity: record.shippingAddressCity,
      shippingAddressState: record.shippingAddressState,
      shippingAddressZipCode: record.shippingAddressZipCode,
      shippingAddressCountry: record.shippingAddressCountry,
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
            name="businessId"
            label={i18n('entities.customer.fields.businessId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="source"
            label={i18n('entities.customer.fields.source')}
            options={customerEnumerators.source.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.customer.enumerators.source.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem
            name="userId"
            label={i18n('entities.customer.fields.userId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="name"
            label={i18n('entities.customer.fields.name')}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="surname"
            label={i18n('entities.customer.fields.surname')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="birthdate"
            label={i18n('entities.customer.fields.birthdate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <RadioFormItem
            name="gender"
            label={i18n('entities.customer.fields.gender')}
            options={customerEnumerators.gender.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.customer.enumerators.gender.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="whatsApp"
            label={i18n('entities.customer.fields.whatsApp')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="phoneNumber"
            label={i18n('entities.customer.fields.phoneNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="address"
            label={i18n('entities.customer.fields.address')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="zipCode"
            label={i18n('entities.customer.fields.zipCode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="city"
            label={i18n('entities.customer.fields.city')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="state"
            label={i18n('entities.customer.fields.state')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="country"
            label={i18n('entities.customer.fields.country')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="billingAddressStreet"
            label={i18n('entities.customer.fields.billingAddressStreet')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="billingAddressCity"
            label={i18n('entities.customer.fields.billingAddressCity')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="billingAddressState"
            label={i18n('entities.customer.fields.billingAddressState')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="billingAddressZipCode"
            label={i18n('entities.customer.fields.billingAddressZipCode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="billingAddressCountry"
            label={i18n('entities.customer.fields.billingAddressCountry')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="shippingAddressStreet"
            label={i18n('entities.customer.fields.shippingAddressStreet')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="shippingAddressCity"
            label={i18n('entities.customer.fields.shippingAddressCity')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="shippingAddressState"
            label={i18n('entities.customer.fields.shippingAddressState')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="shippingAddressZipCode"
            label={i18n('entities.customer.fields.shippingAddressZipCode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="shippingAddressCountry"
            label={i18n('entities.customer.fields.shippingAddressCountry')}
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

export default CustomerForm;
