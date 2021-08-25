import {faSave} from '@fortawesome/free-regular-svg-icons';
import {faTimes, faUndo,} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {getLanguageCode, i18n} from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import BusinessCategoryAutocompleteFormItem
  from 'src/view/businessCategory/autocomplete/BusinessCategoryAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem
  from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import CityAutocompleteFormItem from 'src/view/city/autocomplete/CityAutocompleteFormItem';
import StateAutocompleteFormItem from 'src/view/state/autocomplete/StateAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';
import * as yup from 'yup';
import {getGeocode, getLatLng} from "use-places-autocomplete";
import {Libraries} from "@react-google-maps/api/dist/utils/make-load-script-url";
import {useLoadScript} from "@react-google-maps/api";
import config from "../../../config";
import Spinner from "../../shared/Spinner";
import {useSelector} from "react-redux";
import providersSelectors from "../../../modules/providers/providersSelectors";

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
  email: yupFormSchemas.string(
    i18n('entities.providers.fields.email'),
    {},
  ),
  basePricePerService: yupFormSchemas.decimal(
    i18n('entities.providers.fields.basePricePerService'),
    {},
  ),
  currency: yupFormSchemas.relationToOne(
    i18n('entities.providers.fields.currency'),
    {},
  ),
  profileImage: yupFormSchemas.images(
    i18n('entities.providers.fields.profileImage'),
    {},
  ),
  attachedDoc: yupFormSchemas.files(
    i18n('entities.providers.fields.attachedDoc'),
    {},
  ),
  language: yupFormSchemas.relationToOne(
    i18n('entities.providers.fields.language'),
    {},
  ),
  isIndependent: yupFormSchemas.boolean(
    i18n('entities.providers.fields.isIndependent'),
    {},
  ),
});

function ProvidersForm(props) {
  const { saveLoading } = props;

  const libraries: Libraries = ["places"];
  const { isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.credentialsGoogleMapsPlaceAPI,
    libraries,
    language: getLanguageCode()
  });

  const hasPermissionToReadField = useSelector(
      providersSelectors.selectPermissionToShowField,
  );

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
      email: record.email,
      basePricePerService: record.basePricePerService,
      currency: record.currency,
      profileImage: record.profileImage || [],
      attachedDoc: record.attachedDoc || [],
      language: record.language,
      isIndependent: record.isIndependent,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  async function getLatLngFromAddress(addressAndNumber){
    const result = await getGeocode({address: addressAndNumber});
    return await getLatLng(result[0]);
  }

  const onSubmit = (values) => {
    getLatLngFromAddress(values.addressStreet + ' ' + values.addressStreetNumber + ' ' + values.addressCity + ' ' + values.addressCountry).then(latLng => {
      props.onSubmit(props.record?.id, Object.assign(values, {latitude: latLng.lat, longitude: latLng.lng}));
    });
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };


  const displayOnlyAdminAipettoFields = () => {

    if (hasPermissionToReadField) {
      return (
          <>
          </>
      );
    }
  }

  const renderForm = () => {

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <InputFormItem
                name="providerID"
                label={i18n('entities.providers.fields.providerID')}
                required={true}
            />
          </div>
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
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <InputFormItem
              name="email"
              label={i18n('entities.providers.fields.email')}
              required={false}
            />
          </div>



          {displayOnlyAdminAipettoFields()}


          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <InputFormItem
              name="basePricePerService"
              label={i18n('entities.providers.fields.basePricePerService')}
              required={false}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <CurrencyAutocompleteFormItem
              name="currency"
              label={i18n('entities.providers.fields.currency')}
              required={false}
              showCreate={!props.modal}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <ImagesFormItem
              name="profileImage"
              label={i18n('entities.providers.fields.profileImage')}
              required={false}
              storage={Storage.values.providersProfileImage}
              max={undefined}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <FilesFormItem
              name="attachedDoc"
              label={i18n('entities.providers.fields.attachedDoc')}
              required={false}
              storage={Storage.values.providersAttachedDoc}
              max={undefined}
              formats={undefined}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <LanguagesAutocompleteFormItem
              name="language"
              label={i18n('entities.providers.fields.language')}
              required={false}
              showCreate={!props.modal}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <SwitchFormItem
              name="isIndependent"
              label={i18n('entities.providers.fields.isIndependent')}
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

  return isLoaded ? renderForm() : <Spinner />
}

export default ProvidersForm;
