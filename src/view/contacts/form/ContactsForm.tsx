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
import contactsEnumerators from 'src/modules/contacts/contactsEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('entities.contacts.fields.firstName'),
    {
      "required": true
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.contacts.fields.lastName'),
    {},
  ),
  email: yupFormSchemas.string(
    i18n('entities.contacts.fields.email'),
    {},
  ),
  cellphone: yupFormSchemas.string(
    i18n('entities.contacts.fields.cellphone'),
    {},
  ),
  whatsapp: yupFormSchemas.string(
    i18n('entities.contacts.fields.whatsapp'),
    {},
  ),
  source: yupFormSchemas.enumerator(
    i18n('entities.contacts.fields.source'),
    {
      "options": contactsEnumerators.source
    },
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.contacts.fields.country'),
    {},
  ),
  city: yupFormSchemas.string(
    i18n('entities.contacts.fields.city'),
    {},
  ),
  addressStreetName: yupFormSchemas.string(
    i18n('entities.contacts.fields.addressStreetName'),
    {},
  ),
  addressStreetNumber: yupFormSchemas.string(
    i18n('entities.contacts.fields.addressStreetNumber'),
    {},
  ),
  addressStreetComplement: yupFormSchemas.string(
    i18n('entities.contacts.fields.addressStreetComplement'),
    {},
  ),
  latitude: yupFormSchemas.decimal(
    i18n('entities.contacts.fields.latitude'),
    {},
  ),
  longitude: yupFormSchemas.decimal(
    i18n('entities.contacts.fields.longitude'),
    {},
  ),
  statusContact: yupFormSchemas.boolean(
    i18n('entities.contacts.fields.statusContact'),
    {},
  ),
  contactType: yupFormSchemas.enumerator(
    i18n('entities.contacts.fields.contactType'),
    {
      "options": contactsEnumerators.contactType
    },
  ),
  customerID: yupFormSchemas.relationToMany(
    i18n('entities.contacts.fields.customerID'),
    {},
  ),
  businessID: yupFormSchemas.relationToOne(
    i18n('entities.contacts.fields.businessID'),
    {},
  ),
  companyName: yupFormSchemas.string(
    i18n('entities.contacts.fields.companyName'),
    {},
  ),
  website: yupFormSchemas.string(
    i18n('entities.contacts.fields.website'),
    {},
  ),
  linkedinProfile: yupFormSchemas.string(
    i18n('entities.contacts.fields.linkedinProfile'),
    {},
  ),
  instagramProfile: yupFormSchemas.string(
    i18n('entities.contacts.fields.instagramProfile'),
    {},
  ),
  facebookProfile: yupFormSchemas.string(
    i18n('entities.contacts.fields.facebookProfile'),
    {},
  ),
  isDeveloper: yupFormSchemas.boolean(
    i18n('entities.contacts.fields.isDeveloper'),
    {},
  ),
  isActive: yupFormSchemas.boolean(
    i18n('entities.contacts.fields.isActive'),
    {},
  ),
  contactProfilePhoto: yupFormSchemas.images(
    i18n('entities.contacts.fields.contactProfilePhoto'),
    {},
  ),
  language: yupFormSchemas.relationToOne(
    i18n('entities.contacts.fields.language'),
    {},
  ),
});

function ContactsForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      email: record.email,
      cellphone: record.cellphone,
      whatsapp: record.whatsapp,
      source: record.source,
      country: record.country,
      city: record.city,
      addressStreetName: record.addressStreetName,
      addressStreetNumber: record.addressStreetNumber,
      addressStreetComplement: record.addressStreetComplement,
      latitude: record.latitude,
      longitude: record.longitude,
      statusContact: record.statusContact,
      contactType: record.contactType,
      customerID: record.customerID || [],
      businessID: record.businessID,
      companyName: record.companyName,
      website: record.website,
      linkedinProfile: record.linkedinProfile,
      instagramProfile: record.instagramProfile,
      facebookProfile: record.facebookProfile,
      isDeveloper: record.isDeveloper,
      isActive: record.isActive,
      contactProfilePhoto: record.contactProfilePhoto || [],
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
          <InputFormItem
            name="firstName"
            label={i18n('entities.contacts.fields.firstName')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="lastName"
            label={i18n('entities.contacts.fields.lastName')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="email"
            label={i18n('entities.contacts.fields.email')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="cellphone"
            label={i18n('entities.contacts.fields.cellphone')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="whatsapp"
            label={i18n('entities.contacts.fields.whatsapp')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="source"
            label={i18n('entities.contacts.fields.source')}
            options={contactsEnumerators.source.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.contacts.enumerators.source.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem  
            name="country"
            label={i18n('entities.contacts.fields.country')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="city"
            label={i18n('entities.contacts.fields.city')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressStreetName"
            label={i18n('entities.contacts.fields.addressStreetName')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressStreetNumber"
            label={i18n('entities.contacts.fields.addressStreetNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressStreetComplement"
            label={i18n('entities.contacts.fields.addressStreetComplement')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="latitude"
            label={i18n('entities.contacts.fields.latitude')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="longitude"
            label={i18n('entities.contacts.fields.longitude')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="statusContact"
            label={i18n('entities.contacts.fields.statusContact')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="contactType"
            label={i18n('entities.contacts.fields.contactType')}
            options={contactsEnumerators.contactType.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.contacts.enumerators.contactType.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CustomerAutocompleteFormItem  
            name="customerID"
            label={i18n('entities.contacts.fields.customerID')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem  
            name="businessID"
            label={i18n('entities.contacts.fields.businessID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="companyName"
            label={i18n('entities.contacts.fields.companyName')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="website"
            label={i18n('entities.contacts.fields.website')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="linkedinProfile"
            label={i18n('entities.contacts.fields.linkedinProfile')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="instagramProfile"
            label={i18n('entities.contacts.fields.instagramProfile')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="facebookProfile"
            label={i18n('entities.contacts.fields.facebookProfile')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isDeveloper"
            label={i18n('entities.contacts.fields.isDeveloper')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isActive"
            label={i18n('entities.contacts.fields.isActive')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="contactProfilePhoto"
            label={i18n('entities.contacts.fields.contactProfilePhoto')}
            required={false}
            storage={Storage.values.contactsContactProfilePhoto}
            max={undefined}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <LanguagesAutocompleteFormItem  
            name="language"
            label={i18n('entities.contacts.fields.language')}
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

export default ContactsForm;
