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
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import breedEnumerators from 'src/modules/breed/breedEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import PetTypesAutocompleteFormItem from 'src/view/petTypes/autocomplete/PetTypesAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.breed.fields.name'),
    {},
  ),
  type: yupFormSchemas.relationToOne(
    i18n('entities.breed.fields.type'),
    {},
  ),
  size: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.size'),
    {
      "options": breedEnumerators.size
    },
  ),
  exercise: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.exercise'),
    {
      "options": breedEnumerators.exercise
    },
  ),
  sizeOfHome: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.sizeOfHome'),
    {
      "options": breedEnumerators.sizeOfHome
    },
  ),
  grooming: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.grooming'),
    {
      "options": breedEnumerators.grooming
    },
  ),
  coatLength: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.coatLength'),
    {
      "options": breedEnumerators.coatLength
    },
  ),
  sheds: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.sheds'),
    {
      "options": breedEnumerators.sheds
    },
  ),
  lifespan: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.lifespan'),
    {
      "options": breedEnumerators.lifespan
    },
  ),
  vulnerableNativeBreed: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.vulnerableNativeBreed'),
    {
      "options": breedEnumerators.vulnerableNativeBreed
    },
  ),
  townOrCountry: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.townOrCountry'),
    {
      "options": breedEnumerators.townOrCountry
    },
  ),
  sizeOfGarden: yupFormSchemas.enumerator(
    i18n('entities.breed.fields.sizeOfGarden'),
    {
      "options": breedEnumerators.sizeOfGarden
    },
  ),
  image: yupFormSchemas.images(
    i18n('entities.breed.fields.image'),
    {},
  ),
});

function BreedForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      type: record.type,
      size: record.size,
      exercise: record.exercise,
      sizeOfHome: record.sizeOfHome,
      grooming: record.grooming,
      coatLength: record.coatLength,
      sheds: record.sheds,
      lifespan: record.lifespan,
      vulnerableNativeBreed: record.vulnerableNativeBreed,
      townOrCountry: record.townOrCountry,
      sizeOfGarden: record.sizeOfGarden,
      image: record.image || [],
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
            label={i18n('entities.breed.fields.name')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetTypesAutocompleteFormItem  
            name="type"
            label={i18n('entities.breed.fields.type')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="size"
            label={i18n('entities.breed.fields.size')}
            options={breedEnumerators.size.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.size.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="exercise"
            label={i18n('entities.breed.fields.exercise')}
            options={breedEnumerators.exercise.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.exercise.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="sizeOfHome"
            label={i18n('entities.breed.fields.sizeOfHome')}
            options={breedEnumerators.sizeOfHome.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.sizeOfHome.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="grooming"
            label={i18n('entities.breed.fields.grooming')}
          hint={i18n('entities.breed.hints.grooming')}
            options={breedEnumerators.grooming.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.grooming.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="coatLength"
            label={i18n('entities.breed.fields.coatLength')}
            options={breedEnumerators.coatLength.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.coatLength.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <RadioFormItem
            name="sheds"
            label={i18n('entities.breed.fields.sheds')}
            options={breedEnumerators.sheds.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.sheds.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="lifespan"
            label={i18n('entities.breed.fields.lifespan')}
            options={breedEnumerators.lifespan.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.lifespan.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <RadioFormItem
            name="vulnerableNativeBreed"
            label={i18n('entities.breed.fields.vulnerableNativeBreed')}
            options={breedEnumerators.vulnerableNativeBreed.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.vulnerableNativeBreed.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="townOrCountry"
            label={i18n('entities.breed.fields.townOrCountry')}
            options={breedEnumerators.townOrCountry.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.townOrCountry.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="sizeOfGarden"
            label={i18n('entities.breed.fields.sizeOfGarden')}
            options={breedEnumerators.sizeOfGarden.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.breed.enumerators.sizeOfGarden.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="image"
            label={i18n('entities.breed.fields.image')}
            required={false}
            storage={Storage.values.breedImage}
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

export default BreedForm;
