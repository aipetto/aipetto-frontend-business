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
import petDiseasesEnumerators from 'src/modules/petDiseases/petDiseasesEnumerators';
import * as yup from 'yup';

const schema = yup.object().shape({
  diseaseCommonName: yupFormSchemas.string(
    i18n('entities.petDiseases.fields.diseaseCommonName'),
    {},
  ),
  diseaseScientificNames: yupFormSchemas.string(
    i18n('entities.petDiseases.fields.diseaseScientificNames'),
    {},
  ),
  isHumanContagious: yupFormSchemas.boolean(
    i18n('entities.petDiseases.fields.isHumanContagious'),
    {},
  ),
  isPetContagious: yupFormSchemas.boolean(
    i18n('entities.petDiseases.fields.isPetContagious'),
    {},
  ),
  language: yupFormSchemas.enumerator(
    i18n('entities.petDiseases.fields.language'),
    {
      "options": petDiseasesEnumerators.language
    },
  ),
});

function PetDiseasesForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      diseaseCommonName: record.diseaseCommonName,
      diseaseScientificNames: record.diseaseScientificNames,
      isHumanContagious: record.isHumanContagious,
      isPetContagious: record.isPetContagious,
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
            name="diseaseCommonName"
            label={i18n('entities.petDiseases.fields.diseaseCommonName')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="diseaseScientificNames"
            label={i18n('entities.petDiseases.fields.diseaseScientificNames')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isHumanContagious"
            label={i18n('entities.petDiseases.fields.isHumanContagious')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isPetContagious"
            label={i18n('entities.petDiseases.fields.isPetContagious')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="language"
            label={i18n('entities.petDiseases.fields.language')}
            options={petDiseasesEnumerators.language.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.petDiseases.enumerators.language.${value}`,
                ),
              }),
            )}
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

export default PetDiseasesForm;
