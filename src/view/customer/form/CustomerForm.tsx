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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import customerEnumerators from 'src/modules/customer/customerEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import * as yup from 'yup';
import LanguagesAutocompleteFormItem from "../../languages/autocomplete/LanguagesAutocompleteFormItem";

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.customer.fields.name'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.businessId'),
    {},
  ),
  uniqueCustomIdentifier: yupFormSchemas.string(
    i18n('entities.customer.fields.uniqueCustomIdentifier'),
    {},
  ),
  userId: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.userId'),
    {},
  ),
  source: yupFormSchemas.enumerator(
    i18n('entities.customer.fields.source'),
    {
      "options": customerEnumerators.source
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
  smsPhoneNumber: yupFormSchemas.string(
    i18n('entities.customer.fields.smsPhoneNumber'),
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
  email: yupFormSchemas.string(
    i18n('entities.customer.fields.email'),
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
  country: yupFormSchemas.relationToOne(
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
  latitude: yupFormSchemas.decimal(
    i18n('entities.customer.fields.latitude'),
    {},
  ),
  longitude: yupFormSchemas.decimal(
    i18n('entities.customer.fields.longitude'),
    {},
  ),
  prospectStatus: yupFormSchemas.enumerator(
    i18n('entities.customer.fields.prospectStatus'),
    {
      "options": customerEnumerators.prospectStatus
    },
  ),
  customerStatus: yupFormSchemas.enumerator(
    i18n('entities.customer.fields.customerStatus'),
    {
      "options": customerEnumerators.customerStatus
    },
  ),
  wantToReceiveNotifications: yupFormSchemas.boolean(
    i18n('entities.customer.fields.wantToReceiveNotifications'),
    {},
  ),
  currency: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.currency'),
    {},
  ),
  balance: yupFormSchemas.decimal(
    i18n('entities.customer.fields.balance'),
    {},
  ),
  shippingAddressStreetNumber: yupFormSchemas.string(
    i18n('entities.customer.fields.shippingAddressStreetNumber'),
    {},
  ),
  addressStreetNumber: yupFormSchemas.string(
    i18n('entities.customer.fields.addressStreetNumber'),
    {},
  ),
  billingAddressStreetNumber: yupFormSchemas.string(
    i18n('entities.customer.fields.billingAddressStreetNumber'),
    {},
  ),
  addressStreetComplement: yupFormSchemas.string(
    i18n('entities.customer.fields.addressStreetComplement'),
    {},
  ),
  billingAddressStreetComplement: yupFormSchemas.string(
    i18n('entities.customer.fields.billingAddressStreetComplement'),
    {},
  ),
  shippingAddressStreetComplement: yupFormSchemas.string(
    i18n('entities.customer.fields.shippingAddressStreetComplement'),
    {},
  ),
  customerProfileImage: yupFormSchemas.images(
    i18n('entities.customer.fields.customerProfileImage'),
    {},
  ),
  facebook: yupFormSchemas.string(
    i18n('entities.customer.fields.facebook'),
    {},
  ),
  linkedin: yupFormSchemas.string(
    i18n('entities.customer.fields.linkedin'),
    {},
  ),
  instagram: yupFormSchemas.string(
    i18n('entities.customer.fields.instagram'),
    {},
  ),
  website: yupFormSchemas.string(
    i18n('entities.customer.fields.website'),
    {},
  ),
  language: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.language'),
    {},
  ),
  notes: yupFormSchemas.string(
    i18n('entities.customer.fields.notes'),
    {},
  ),
});

function CustomerForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      businessId: record.businessId,
      uniqueCustomIdentifier: record.uniqueCustomIdentifier,
      userId: record.userId,
      source: record.source,
      surname: record.surname,
      birthdate: record.birthdate ? moment(record.birthdate, 'YYYY-MM-DD').toDate() : null,
      gender: record.gender,
      whatsApp: record.whatsApp,
      smsPhoneNumber: record.smsPhoneNumber,
      phoneNumber: record.phoneNumber,
      address: record.address,
      email: record.email,
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
      latitude: record.latitude,
      longitude: record.longitude,
      prospectStatus: record.prospectStatus,
      customerStatus: record.customerStatus,
      wantToReceiveNotifications: record.wantToReceiveNotifications,
      currency: record.currency,
      balance: record.balance,
      shippingAddressStreetNumber: record.shippingAddressStreetNumber,
      addressStreetNumber: record.addressStreetNumber,
      billingAddressStreetNumber: record.billingAddressStreetNumber,
      addressStreetComplement: record.addressStreetComplement,
      billingAddressStreetComplement: record.billingAddressStreetComplement,
      shippingAddressStreetComplement: record.shippingAddressStreetComplement,
      customerProfileImage: record.customerProfileImage || [],
      facebook: record.facebook,
      linkedin: record.linkedin,
      instagram: record.instagram,
      website: record.website,
      language: record.language,
      notes: record.notes,
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
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
              name="customerProfileImage"
              label={i18n('entities.customer.fields.customerProfileImage')}
              required={false}
              storage={Storage.values.customerCustomerProfileImage}
              max={undefined}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
              name="prospectStatus"
              label={i18n('entities.customer.fields.prospectStatus')}
              hint={i18n('entities.customer.hints.prospectStatus')}
              options={customerEnumerators.prospectStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                        `entities.customer.enumerators.prospectStatus.${value}`,
                    ),
                  }),
              )}
              required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
              name="customerStatus"
              label={i18n('entities.customer.fields.customerStatus')}
              hint={i18n('entities.customer.hints.customerStatus')}
              options={customerEnumerators.customerStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                        `entities.customer.enumerators.customerStatus.${value}`,
                    ),
                  }),
              )}
              required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <InputFormItem
            name="name"
            label={i18n('entities.customer.fields.name')}
            required={true}
          autoFocus
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
          <InputFormItem
              name="email"
              label={i18n('entities.customer.fields.email')}
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
              name="facebook"
              label={i18n('entities.customer.fields.facebook')}
              required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
              name="instagram"
              label={i18n('entities.customer.fields.instagram')}
              required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem
              name="country"
              label={i18n('entities.customer.fields.country')}
              required={false}
              showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem
            name="businessId"
            label={i18n('entities.customer.fields.businessId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="uniqueCustomIdentifier"
            label={i18n('entities.customer.fields.uniqueCustomIdentifier')}
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
            name="smsPhoneNumber"
            label={i18n('entities.customer.fields.smsPhoneNumber')}
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
              name="addressStreetComplement"
              label={i18n('entities.customer.fields.addressStreetComplement')}
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
              name="shippingAddressStreetNumber"
              label={i18n('entities.customer.fields.shippingAddressStreetNumber')}
              required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
              name="shippingAddressStreetComplement"
              label={i18n('entities.customer.fields.shippingAddressStreetComplement')}
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
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="latitude"
            label={i18n('entities.customer.fields.latitude')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="longitude"
            label={i18n('entities.customer.fields.longitude')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="wantToReceiveNotifications"
            label={i18n('entities.customer.fields.wantToReceiveNotifications')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CurrencyAutocompleteFormItem
            name="currency"
            label={i18n('entities.customer.fields.currency')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="balance"
            label={i18n('entities.customer.fields.balance')}
          placeholder={i18n('entities.customer.placeholders.balance')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="shippingAddressStreetNumber"
            label={i18n('entities.customer.fields.shippingAddressStreetNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressStreetNumber"
            label={i18n('entities.customer.fields.addressStreetNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="billingAddressStreetNumber"
            label={i18n('entities.customer.fields.billingAddressStreetNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="billingAddressStreetComplement"
            label={i18n('entities.customer.fields.billingAddressStreetComplement')}
            required={false}
          />
        </div>

        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="linkedin"
            label={i18n('entities.customer.fields.linkedin')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="website"
            label={i18n('entities.customer.fields.website')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <LanguagesAutocompleteFormItem
            name="language"
            label={i18n('entities.customer.fields.language')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="notes"
            label={i18n('entities.customer.fields.notes')}
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
