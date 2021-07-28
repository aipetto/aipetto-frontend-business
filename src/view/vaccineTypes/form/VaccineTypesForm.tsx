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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import vaccineTypesEnumerators from 'src/modules/vaccineTypes/vaccineTypesEnumerators';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import PetTypesAutocompleteFormItem from 'src/view/petTypes/autocomplete/PetTypesAutocompleteFormItem';
import BreedAutocompleteFormItem from 'src/view/breed/autocomplete/BreedAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.vaccineTypes.fields.name'),
    {
      "required": true
    },
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.vaccineTypes.fields.country'),
    {},
  ),
  language: yupFormSchemas.enumerator(
    i18n('entities.vaccineTypes.fields.language'),
    {
      "options": vaccineTypesEnumerators.language
    },
  ),
  frequencyShotDosis: yupFormSchemas.enumerator(
    i18n('entities.vaccineTypes.fields.frequencyShotDosis'),
    {
      "options": vaccineTypesEnumerators.frequencyShotDosis
    },
  ),
  petSpecificType: yupFormSchemas.relationToMany(
    i18n('entities.vaccineTypes.fields.petSpecificType'),
    {},
  ),
  vaccineCustomUniqueID: yupFormSchemas.string(
    i18n('entities.vaccineTypes.fields.vaccineCustomUniqueID'),
    {},
  ),
  isMandatory: yupFormSchemas.boolean(
    i18n('entities.vaccineTypes.fields.isMandatory'),
    {},
  ),
  specificBreeds: yupFormSchemas.relationToMany(
    i18n('entities.vaccineTypes.fields.specificBreeds'),
    {},
  ),
  vaccinePetTargetAgeInMonths: yupFormSchemas.integer(
    i18n('entities.vaccineTypes.fields.vaccinePetTargetAgeInMonths'),
    {},
  ),
});

function VaccineTypesForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      country: record.country,
      language: record.language,
      frequencyShotDosis: record.frequencyShotDosis,
      petSpecificType: record.petSpecificType || [],
      vaccineCustomUniqueID: record.vaccineCustomUniqueID,
      isMandatory: record.isMandatory,
      specificBreeds: record.specificBreeds || [],
      vaccinePetTargetAgeInMonths: record.vaccinePetTargetAgeInMonths,
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
            label={i18n('entities.vaccineTypes.fields.name')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem  
            name="country"
            label={i18n('entities.vaccineTypes.fields.country')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="language"
            label={i18n('entities.vaccineTypes.fields.language')}
            options={vaccineTypesEnumerators.language.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.vaccineTypes.enumerators.language.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="frequencyShotDosis"
            label={i18n('entities.vaccineTypes.fields.frequencyShotDosis')}
            options={vaccineTypesEnumerators.frequencyShotDosis.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.vaccineTypes.enumerators.frequencyShotDosis.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetTypesAutocompleteFormItem
            name="petSpecificType"
            label={i18n('entities.vaccineTypes.fields.petSpecificType')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="vaccineCustomUniqueID"
            label={i18n('entities.vaccineTypes.fields.vaccineCustomUniqueID')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isMandatory"
            label={i18n('entities.vaccineTypes.fields.isMandatory')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BreedAutocompleteFormItem
            name="specificBreeds"
            label={i18n('entities.vaccineTypes.fields.specificBreeds')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="vaccinePetTargetAgeInMonths"
            label={i18n('entities.vaccineTypes.fields.vaccinePetTargetAgeInMonths')}
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

export default VaccineTypesForm;
