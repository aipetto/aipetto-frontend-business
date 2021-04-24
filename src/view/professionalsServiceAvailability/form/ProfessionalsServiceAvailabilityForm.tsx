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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import professionalsServiceAvailabilityEnumerators from 'src/modules/professionalsServiceAvailability/professionalsServiceAvailabilityEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  userId: yupFormSchemas.relationToOne(
    i18n('entities.professionalsServiceAvailability.fields.userId'),
    {},
  ),
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.professionalsServiceAvailability.fields.businessId'),
    {},
  ),
  serviceType: yupFormSchemas.relationToOne(
    i18n('entities.professionalsServiceAvailability.fields.serviceType'),
    {},
  ),
  timeSlot: yupFormSchemas.stringArray(
    i18n('entities.professionalsServiceAvailability.fields.timeSlot'),
    {},
  ),
  dateAvailabilityStart: yupFormSchemas.date(
    i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStart'),
    {},
  ),
  dateAvailabilityEnd: yupFormSchemas.date(
    i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEnd'),
    {},
  ),
});

function ProfessionalsServiceAvailabilityForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      userId: record.userId,
      businessId: record.businessId,
      serviceType: record.serviceType,
      timeSlot: record.timeSlot || [],
      dateAvailabilityStart: record.dateAvailabilityStart ? moment(record.dateAvailabilityStart, 'YYYY-MM-DD').toDate() : null,
      dateAvailabilityEnd: record.dateAvailabilityEnd ? moment(record.dateAvailabilityEnd, 'YYYY-MM-DD').toDate() : null,
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
          <UserAutocompleteFormItem  
            name="userId"
            label={i18n('entities.professionalsServiceAvailability.fields.userId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem  
            name="businessId"
            label={i18n('entities.professionalsServiceAvailability.fields.businessId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessServicesTypesAutocompleteFormItem  
            name="serviceType"
            label={i18n('entities.professionalsServiceAvailability.fields.serviceType')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="timeSlot"
            label={i18n('entities.professionalsServiceAvailability.fields.timeSlot')}
            options={professionalsServiceAvailabilityEnumerators.timeSlot.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.professionalsServiceAvailability.enumerators.timeSlot.${value}`,
                ),
              }),
            )}
            required={false}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="dateAvailabilityStart"
            label={i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStart')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="dateAvailabilityEnd"
            label={i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEnd')}
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

export default ProfessionalsServiceAvailabilityForm;
