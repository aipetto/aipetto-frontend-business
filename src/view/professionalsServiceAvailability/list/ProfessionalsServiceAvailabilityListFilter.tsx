import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/professionalsServiceAvailability/list/professionalsServiceAvailabilityListActions';
import selectors from 'src/modules/professionalsServiceAvailability/list/professionalsServiceAvailabilityListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import professionalsServiceAvailabilityEnumerators from 'src/modules/professionalsServiceAvailability/professionalsServiceAvailabilityEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';

const schema = yup.object().shape({
  userId: yupFilterSchemas.relationToOne(
    i18n('entities.professionalsServiceAvailability.fields.userId'),
  ),
  businessId: yupFilterSchemas.relationToOne(
    i18n('entities.professionalsServiceAvailability.fields.businessId'),
  ),
  serviceType: yupFilterSchemas.relationToOne(
    i18n('entities.professionalsServiceAvailability.fields.serviceType'),
  ),
  timeSlot: yupFilterSchemas.stringArray(
    i18n('entities.professionalsServiceAvailability.fields.timeSlot'),
  ),
  dateAvailabilityStartRange: yupFilterSchemas.dateRange(
    i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStartRange'),
  ),
  dateAvailabilityEndRange: yupFilterSchemas.dateRange(
    i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEndRange'),
  ),
});

const emptyValues = {
  userId: null,
  businessId: null,
  serviceType: null,
  timeSlot: [],
  dateAvailabilityStartRange: [],
  dateAvailabilityEndRange: [],
}

const previewRenders = {
  userId: {
    label: i18n('entities.professionalsServiceAvailability.fields.userId'),
    render: filterRenders.relationToOne(),
  },
  businessId: {
      label: i18n('entities.professionalsServiceAvailability.fields.businessId'),
      render: filterRenders.relationToOne(),
    },
  serviceType: {
      label: i18n('entities.professionalsServiceAvailability.fields.serviceType'),
      render: filterRenders.relationToOne(),
    },
  timeSlot: {
    label: i18n('entities.professionalsServiceAvailability.fields.timeSlot'),
    render: filterRenders.enumeratorMultiple('entities.professionalsServiceAvailability.enumerators.timeSlot',),
  },
  dateAvailabilityStartRange: {
    label: i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStartRange'),
    render: filterRenders.dateRange(),
  },
  dateAvailabilityEndRange: {
    label: i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEndRange'),
    render: filterRenders.dateRange(),
  },
}

function ProfessionalsServiceAvailabilityListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <div className="border-gray-200 dark:border-gray-600 border rounded-md mb-2">
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className={`${expanded ? 'block' : 'hidden'}`}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <UserAutocompleteFormItem  
                name="userId"
                label={i18n('entities.professionalsServiceAvailability.fields.userId')}        
              />
              <BusinessAutocompleteFormItem  
                name="businessId"
                label={i18n('entities.professionalsServiceAvailability.fields.businessId')}        
              />
              <BusinessServicesTypesAutocompleteFormItem  
                name="serviceType"
                label={i18n('entities.professionalsServiceAvailability.fields.serviceType')}        
              />
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
                mode="multiple"
              />
              <DatePickerRangeFormItem
                name="dateAvailabilityStartRange"
                label={i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityStartRange')}    
              />
              <DatePickerRangeFormItem
                name="dateAvailabilityEndRange"
                label={i18n('entities.professionalsServiceAvailability.fields.dateAvailabilityEndRange')}    
              />
            </div>

            <div className="px-4 py-2 text-right">
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faSearch}
                />
                {i18n('common.search')}
              </button>
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                type="button"
                onClick={onReset}
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faUndo}
                />
                {i18n('common.reset')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default ProfessionalsServiceAvailabilityListFilter;