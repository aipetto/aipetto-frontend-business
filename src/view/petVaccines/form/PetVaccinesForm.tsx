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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import VaccineTypesAutocompleteFormItem from 'src/view/vaccineTypes/autocomplete/VaccineTypesAutocompleteFormItem';
import ProvidersAutocompleteFormItem from 'src/view/providers/autocomplete/ProvidersAutocompleteFormItem';
import PlaceAutocompleteFormItem from 'src/view/place/autocomplete/PlaceAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.relationToOne(
    i18n('entities.petVaccines.fields.name'),
    {},
  ),
  uniqueVetVaccineCode: yupFormSchemas.relationToOne(
    i18n('entities.petVaccines.fields.uniqueVetVaccineCode'),
    {},
  ),
  datetimeTaken: yupFormSchemas.datetime(
    i18n('entities.petVaccines.fields.datetimeTaken'),
    {},
  ),
  veterinarianID: yupFormSchemas.relationToOne(
    i18n('entities.petVaccines.fields.veterinarianID'),
    {},
  ),
  placeTaken: yupFormSchemas.relationToOne(
    i18n('entities.petVaccines.fields.placeTaken'),
    {},
  ),
  businessID: yupFormSchemas.relationToOne(
    i18n('entities.petVaccines.fields.businessID'),
    {},
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.petVaccines.fields.country'),
    {},
  ),
  vaccinationNotes: yupFormSchemas.string(
    i18n('entities.petVaccines.fields.vaccinationNotes'),
    {},
  ),
});

function PetVaccinesForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      uniqueVetVaccineCode: record.uniqueVetVaccineCode,
      datetimeTaken: record.datetimeTaken ? moment(record.datetimeTaken).toDate() : null,
      veterinarianID: record.veterinarianID,
      placeTaken: record.placeTaken,
      businessID: record.businessID,
      country: record.country,
      vaccinationNotes: record.vaccinationNotes,
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
          <VaccineTypesAutocompleteFormItem  
            name="name"
            label={i18n('entities.petVaccines.fields.name')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <VaccineTypesAutocompleteFormItem
            name="uniqueVetVaccineCode"
            label={i18n('entities.petVaccines.fields.uniqueVetVaccineCode')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="datetimeTaken"
            label={i18n('entities.petVaccines.fields.datetimeTaken')}
            required={false}
            showTimeInput
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ProvidersAutocompleteFormItem  
            name="veterinarianID"
            label={i18n('entities.petVaccines.fields.veterinarianID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PlaceAutocompleteFormItem  
            name="placeTaken"
            label={i18n('entities.petVaccines.fields.placeTaken')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem  
            name="businessID"
            label={i18n('entities.petVaccines.fields.businessID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem  
            name="country"
            label={i18n('entities.petVaccines.fields.country')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="vaccinationNotes"
            label={i18n('entities.petVaccines.fields.vaccinationNotes')}
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

export default PetVaccinesForm;
