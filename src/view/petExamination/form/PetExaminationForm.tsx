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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import petExaminationEnumerators from 'src/modules/petExamination/petExaminationEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import PetAutocompleteFormItem from 'src/view/pet/autocomplete/PetAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';
import ProvidersAutocompleteFormItem from 'src/view/providers/autocomplete/ProvidersAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  petID: yupFormSchemas.relationToOne(
    i18n('entities.petExamination.fields.petID'),
    {},
  ),
  examinationInternalCode: yupFormSchemas.string(
    i18n('entities.petExamination.fields.examinationInternalCode'),
    {
      "required": true
    },
  ),
  veterinariesResponsibleDiagnostic: yupFormSchemas.relationToMany(
    i18n('entities.petExamination.fields.veterinariesResponsibleDiagnostic'),
    {
      "required": true
    },
  ),
  businessID: yupFormSchemas.relationToOne(
    i18n('entities.petExamination.fields.businessID'),
    {},
  ),
  language: yupFormSchemas.relationToOne(
    i18n('entities.petExamination.fields.language'),
    {},
  ),
  providersID: yupFormSchemas.relationToMany(
    i18n('entities.petExamination.fields.providersID'),
    {},
  ),
  statusExamination: yupFormSchemas.enumerator(
    i18n('entities.petExamination.fields.statusExamination'),
    {
      "options": petExaminationEnumerators.statusExamination
    },
  ),
  examinationsFiles: yupFormSchemas.files(
    i18n('entities.petExamination.fields.examinationsFiles'),
    {},
  ),
  examinationImages: yupFormSchemas.images(
    i18n('entities.petExamination.fields.examinationImages'),
    {},
  ),
});

function PetExaminationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      petID: record.petID,
      examinationInternalCode: record.examinationInternalCode,
      veterinariesResponsibleDiagnostic: record.veterinariesResponsibleDiagnostic || [],
      businessID: record.businessID,
      language: record.language,
      providersID: record.providersID || [],
      statusExamination: record.statusExamination,
      examinationsFiles: record.examinationsFiles || [],
      examinationImages: record.examinationImages || [],
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
          <PetAutocompleteFormItem  
            name="petID"
            label={i18n('entities.petExamination.fields.petID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="examinationInternalCode"
            label={i18n('entities.petExamination.fields.examinationInternalCode')}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem  
            name="veterinariesResponsibleDiagnostic"
            label={i18n('entities.petExamination.fields.veterinariesResponsibleDiagnostic')}
            required={true}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem  
            name="businessID"
            label={i18n('entities.petExamination.fields.businessID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <LanguagesAutocompleteFormItem  
            name="language"
            label={i18n('entities.petExamination.fields.language')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ProvidersAutocompleteFormItem  
            name="providersID"
            label={i18n('entities.petExamination.fields.providersID')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="statusExamination"
            label={i18n('entities.petExamination.fields.statusExamination')}
            options={petExaminationEnumerators.statusExamination.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.petExamination.enumerators.statusExamination.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="examinationsFiles"
            label={i18n('entities.petExamination.fields.examinationsFiles')}
            required={false}
            storage={Storage.values.petExaminationExaminationsFiles}
            max={undefined}
            formats={undefined}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="examinationImages"
            label={i18n('entities.petExamination.fields.examinationImages')}
            required={false}
            storage={Storage.values.petExaminationExaminationImages}
            max={undefined}
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

export default PetExaminationForm;
