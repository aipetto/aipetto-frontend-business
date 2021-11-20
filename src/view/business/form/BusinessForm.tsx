import {faSave} from '@fortawesome/free-regular-svg-icons';
import {faTimes, faUndo,} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {getLanguageCode, i18n} from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import BusinessServicesTypesAutocompleteFormItem
  from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import BusinessCategoryAutocompleteFormItem
  from 'src/view/businessCategory/autocomplete/BusinessCategoryAutocompleteFormItem';
import CityAutocompleteFormItem from 'src/view/city/autocomplete/CityAutocompleteFormItem';
import StateAutocompleteFormItem from 'src/view/state/autocomplete/StateAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import * as yup from 'yup';
import {getGeocode, getLatLng} from "use-places-autocomplete";
import {Libraries} from "@react-google-maps/api/dist/utils/make-load-script-url";
import {useLoadScript} from "@react-google-maps/api";
import config from "../../../config";
import Spinner from "../../shared/Spinner";
import {useSelector} from "react-redux";
import businessSelectors from "../../../modules/business/businessSelectors";

const schema = yup.object().shape({
  businessID: yupFormSchemas.string(
    i18n('entities.business.fields.businessID'),
    {
      "required": true
    },
  ),
  name: yupFormSchemas.string(
    i18n('entities.business.fields.name'),
    {
      "required": true
    },
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
  streetComplement: yupFormSchemas.string(
    i18n('entities.business.fields.streetComplement'),
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
  businessLogo: yupFormSchemas.images(
    i18n('entities.business.fields.businessLogo'),
    {
      "required": true
    },
  ),
  latitude: yupFormSchemas.string(
    i18n('entities.business.fields.latitude'),
    {},
  ),
  longitude: yupFormSchemas.string(
    i18n('entities.business.fields.longitude'),
    {},
  ),
  website: yupFormSchemas.string(
    i18n('entities.business.fields.website'),
    {},
  ),
  facebook: yupFormSchemas.string(
    i18n('entities.business.fields.facebook'),
    {},
  ),
  linkedin: yupFormSchemas.string(
    i18n('entities.business.fields.linkedin'),
    {},
  ),
  notes: yupFormSchemas.string(
    i18n('entities.business.fields.notes'),
    {},
  ),
  language: yupFormSchemas.relationToOne(
    i18n('entities.business.fields.language'),
    {},
  ),
  currency: yupFormSchemas.relationToOne(
    i18n('entities.business.fields.currency'),
    {},
  ),
  instagram: yupFormSchemas.string(
    i18n('entities.business.fields.instagram'),
    {},
  ),
  campaingTrackerID: yupFormSchemas.string(
    i18n('entities.business.fields.campaingTrackerID'),
    {},
  ),
});

function BusinessForm(props) {

  const { saveLoading } = props;

  const libraries: Libraries = ["places"];
  const { isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.credentialsGoogleMapsPlaceAPI,
    libraries,
    language: getLanguageCode()
  });

  const hasPermissionToReadField = useSelector(
      businessSelectors.selectPermissionToShowField,
  );

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
      streetComplement: record.streetComplement,
      addressPostCode: record.addressPostCode,
      city: record.city,
      state: record.state,
      country: record.country,
      businessLogo: record.businessLogo || [],
      website: record.website,
      facebook: record.facebook,
      linkedin: record.linkedin,
      notes: record.notes,
      language: record.language,
      currency: record.currency,
      instagram: record.instagram,
      campaingTrackerID: record.campaingTrackerID,
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
    if(values.addressStreet != undefined && !values.addressStreet.isEmpty){
      getLatLngFromAddress(values.addressStreet + ' ' + values.addressStreetNumber + ' ' + values.city + ' ' + values.country).then(latLng => {
        props.onSubmit(props.record?.id, Object.assign(values,
            { location: { type: "Point", coordinates: [latLng.lng, latLng.lat]},}));
      });
    }else{
      props.onSubmit(props.record?.id, values);
    }
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
              name="streetComplement"
              label={i18n('entities.business.fields.streetComplement')}
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

          {displayOnlyAdminAipettoFields()}

          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <ImagesFormItem
              name="businessLogo"
              label={i18n('entities.business.fields.businessLogo')}
              required={false}
              storage={Storage.values.businessBusinessLogo}
              max={undefined}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <InputFormItem
              name="website"
              label={i18n('entities.business.fields.website')}
              required={false}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <InputFormItem
              name="facebook"
              label={i18n('entities.business.fields.facebook')}
              required={false}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <InputFormItem
              name="linkedin"
              label={i18n('entities.business.fields.linkedin')}
              required={false}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <TextAreaFormItem
              name="notes"
              label={i18n('entities.business.fields.notes')}
              required={false}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <LanguagesAutocompleteFormItem
              name="language"
              label={i18n('entities.business.fields.language')}
              required={false}
              showCreate={!props.modal}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <CurrencyAutocompleteFormItem
              name="currency"
              label={i18n('entities.business.fields.currency')}
              required={false}
              showCreate={!props.modal}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <InputFormItem
              name="instagram"
              label={i18n('entities.business.fields.instagram')}
              required={false}
            />
          </div>
          <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
            <InputFormItem
                name="campaingTrackerID"
                label={i18n('entities.business.fields.campaingTrackerID')}
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

  return isLoaded ? renderForm() : <Spinner/>
};

export default BusinessForm;
