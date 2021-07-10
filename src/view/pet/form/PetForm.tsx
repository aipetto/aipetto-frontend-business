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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import petEnumerators from 'src/modules/pet/petEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import BreedAutocompleteFormItem from 'src/view/breed/autocomplete/BreedAutocompleteFormItem';
import PetTypesAutocompleteFormItem from 'src/view/petTypes/autocomplete/PetTypesAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import PetPhotosAutocompleteFormItem from 'src/view/petPhotos/autocomplete/PetPhotosAutocompleteFormItem';
import PetVaccinesAutocompleteFormItem from 'src/view/petVaccines/autocomplete/PetVaccinesAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import PetDiseasesAutocompleteFormItem from 'src/view/petDiseases/autocomplete/PetDiseasesAutocompleteFormItem';
import PetAutocompleteFormItem from 'src/view/pet/autocomplete/PetAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.pet.fields.name'),
    {},
  ),
  nickname: yupFormSchemas.string(
    i18n('entities.pet.fields.nickname'),
    {},
  ),
  profileImage: yupFormSchemas.images(
    i18n('entities.pet.fields.profileImage'),
    {},
  ),
  birthdate: yupFormSchemas.date(
    i18n('entities.pet.fields.birthdate'),
    {},
  ),
  age: yupFormSchemas.integer(
    i18n('entities.pet.fields.age'),
    {},
  ),
  color: yupFormSchemas.enumerator(
    i18n('entities.pet.fields.color'),
    {
      "options": petEnumerators.color
    },
  ),
  secondColor: yupFormSchemas.enumerator(
    i18n('entities.pet.fields.secondColor'),
    {
      "options": petEnumerators.secondColor
    },
  ),
  thirdColor: yupFormSchemas.enumerator(
    i18n('entities.pet.fields.thirdColor'),
    {
      "options": petEnumerators.thirdColor
    },
  ),
  sex: yupFormSchemas.enumerator(
    i18n('entities.pet.fields.sex'),
    {
      "options": petEnumerators.sex
    },
  ),
  breed: yupFormSchemas.relationToOne(
    i18n('entities.pet.fields.breed'),
    {},
  ),
  secondBreedMixed: yupFormSchemas.relationToOne(
    i18n('entities.pet.fields.secondBreedMixed'),
    {},
  ),
  type: yupFormSchemas.relationToOne(
    i18n('entities.pet.fields.type'),
    {},
  ),
  customerId: yupFormSchemas.relationToOne(
    i18n('entities.pet.fields.customerId'),
    {},
  ),
  petOwners: yupFormSchemas.relationToMany(
    i18n('entities.pet.fields.petOwners'),
    {},
  ),
  photos: yupFormSchemas.relationToMany(
    i18n('entities.pet.fields.photos'),
    {},
  ),
  vaccines: yupFormSchemas.relationToMany(
    i18n('entities.pet.fields.vaccines'),
    {},
  ),
  maturitySize: yupFormSchemas.enumerator(
    i18n('entities.pet.fields.maturitySize'),
    {
      "options": petEnumerators.maturitySize
    },
  ),
  furLength: yupFormSchemas.enumerator(
    i18n('entities.pet.fields.furLength'),
    {
      "options": petEnumerators.furLength
    },
  ),
  hasBeenVaccinated: yupFormSchemas.boolean(
    i18n('entities.pet.fields.hasBeenVaccinated'),
    {},
  ),
  hasBeenDewormed: yupFormSchemas.boolean(
    i18n('entities.pet.fields.hasBeenDewormed'),
    {},
  ),
  hasBeenSterilizedSpayed: yupFormSchemas.boolean(
    i18n('entities.pet.fields.hasBeenSterilizedSpayed'),
    {},
  ),
  health: yupFormSchemas.enumerator(
    i18n('entities.pet.fields.health'),
    {
      "options": petEnumerators.health
    },
  ),
  isLost: yupFormSchemas.boolean(
    i18n('entities.pet.fields.isLost'),
    {},
  ),
  biography: yupFormSchemas.string(
    i18n('entities.pet.fields.biography'),
    {},
  ),
  usersAuthorized: yupFormSchemas.relationToMany(
    i18n('entities.pet.fields.usersAuthorized'),
    {},
  ),
  businessAuthorized: yupFormSchemas.relationToMany(
    i18n('entities.pet.fields.businessAuthorized'),
    {},
  ),
  isLookingForMatch: yupFormSchemas.boolean(
    i18n('entities.pet.fields.isLookingForMatch'),
    {},
  ),
  diseases: yupFormSchemas.relationToMany(
    i18n('entities.pet.fields.diseases'),
    {},
  ),
  isGuideDog: yupFormSchemas.boolean(
    i18n('entities.pet.fields.isGuideDog'),
    {},
  ),
  numberOfLikes: yupFormSchemas.integer(
    i18n('entities.pet.fields.numberOfLikes'),
    {},
  ),
  matches: yupFormSchemas.relationToMany(
    i18n('entities.pet.fields.matches'),
    {},
  ),
  petFriends: yupFormSchemas.relationToMany(
    i18n('entities.pet.fields.petFriends'),
    {},
  ),
});

function PetForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      nickname: record.nickname,
      profileImage: record.profileImage || [],
      birthdate: record.birthdate ? moment(record.birthdate, 'YYYY-MM-DD').toDate() : null,
      age: record.age,
      color: record.color,
      secondColor: record.secondColor,
      thirdColor: record.thirdColor,
      sex: record.sex,
      breed: record.breed,
      secondBreedMixed: record.secondBreedMixed,
      type: record.type,
      customerId: record.customerId,
      petOwners: record.petOwners || [],
      photos: record.photos || [],
      vaccines: record.vaccines || [],
      maturitySize: record.maturitySize,
      furLength: record.furLength,
      hasBeenVaccinated: record.hasBeenVaccinated,
      hasBeenDewormed: record.hasBeenDewormed,
      hasBeenSterilizedSpayed: record.hasBeenSterilizedSpayed,
      health: record.health,
      isLost: record.isLost,
      biography: record.biography,
      usersAuthorized: record.usersAuthorized || [],
      businessAuthorized: record.businessAuthorized || [],
      isLookingForMatch: record.isLookingForMatch,
      diseases: record.diseases || [],
      isGuideDog: record.isGuideDog,
      numberOfLikes: record.numberOfLikes,
      matches: record.matches || [],
      petFriends: record.petFriends || [],
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
            label={i18n('entities.pet.fields.name')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="nickname"
            label={i18n('entities.pet.fields.nickname')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="profileImage"
            label={i18n('entities.pet.fields.profileImage')}
            required={false}
            storage={Storage.values.petProfileImage}
            max={undefined}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="birthdate"
            label={i18n('entities.pet.fields.birthdate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="age"
            label={i18n('entities.pet.fields.age')}
          placeholder={i18n('entities.pet.placeholders.age')}
          hint={i18n('entities.pet.hints.age')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="color"
            label={i18n('entities.pet.fields.color')}
            options={petEnumerators.color.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.pet.enumerators.color.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="secondColor"
            label={i18n('entities.pet.fields.secondColor')}
            options={petEnumerators.secondColor.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.pet.enumerators.secondColor.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="thirdColor"
            label={i18n('entities.pet.fields.thirdColor')}
            options={petEnumerators.thirdColor.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.pet.enumerators.thirdColor.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <RadioFormItem
            name="sex"
            label={i18n('entities.pet.fields.sex')}
            options={petEnumerators.sex.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.pet.enumerators.sex.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BreedAutocompleteFormItem  
            name="breed"
            label={i18n('entities.pet.fields.breed')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BreedAutocompleteFormItem
            name="secondBreedMixed"
            label={i18n('entities.pet.fields.secondBreedMixed')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetTypesAutocompleteFormItem  
            name="type"
            label={i18n('entities.pet.fields.type')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CustomerAutocompleteFormItem
            name="customerId"
            label={i18n('entities.pet.fields.customerId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem
            name="petOwners"
            label={i18n('entities.pet.fields.petOwners')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetPhotosAutocompleteFormItem
            name="photos"
            label={i18n('entities.pet.fields.photos')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetVaccinesAutocompleteFormItem
            name="vaccines"
            label={i18n('entities.pet.fields.vaccines')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="maturitySize"
            label={i18n('entities.pet.fields.maturitySize')}
            options={petEnumerators.maturitySize.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.pet.enumerators.maturitySize.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="furLength"
            label={i18n('entities.pet.fields.furLength')}
            options={petEnumerators.furLength.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.pet.enumerators.furLength.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="hasBeenVaccinated"
            label={i18n('entities.pet.fields.hasBeenVaccinated')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="hasBeenDewormed"
            label={i18n('entities.pet.fields.hasBeenDewormed')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="hasBeenSterilizedSpayed"
            label={i18n('entities.pet.fields.hasBeenSterilizedSpayed')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="health"
            label={i18n('entities.pet.fields.health')}
            options={petEnumerators.health.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.pet.enumerators.health.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isLost"
            label={i18n('entities.pet.fields.isLost')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="biography"
            label={i18n('entities.pet.fields.biography')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem
            name="usersAuthorized"
            label={i18n('entities.pet.fields.usersAuthorized')}
          hint={i18n('entities.pet.hints.usersAuthorized')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem
            name="businessAuthorized"
            label={i18n('entities.pet.fields.businessAuthorized')}
          hint={i18n('entities.pet.hints.businessAuthorized')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isLookingForMatch"
            label={i18n('entities.pet.fields.isLookingForMatch')}
          hint={i18n('entities.pet.hints.isLookingForMatch')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetDiseasesAutocompleteFormItem
            name="diseases"
            label={i18n('entities.pet.fields.diseases')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isGuideDog"
            label={i18n('entities.pet.fields.isGuideDog')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="numberOfLikes"
            label={i18n('entities.pet.fields.numberOfLikes')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetAutocompleteFormItem
            name="matches"
            label={i18n('entities.pet.fields.matches')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PetAutocompleteFormItem
            name="petFriends"
            label={i18n('entities.pet.fields.petFriends')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
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

export default PetForm;
