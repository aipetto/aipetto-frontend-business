import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessPlaceServiceAvailability/list/businessPlaceServiceAvailabilityListActions';
import selectors from 'src/modules/businessPlaceServiceAvailability/list/businessPlaceServiceAvailabilityListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import businessPlaceServiceAvailabilityEnumerators from 'src/modules/businessPlaceServiceAvailability/businessPlaceServiceAvailabilityEnumerators';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.businessPlaceServiceAvailability.fields.name'),
  ),
  businessId: yupFilterSchemas.relationToOne(
    i18n('entities.businessPlaceServiceAvailability.fields.businessId'),
  ),
  timeSlot: yupFilterSchemas.stringArray(
    i18n('entities.businessPlaceServiceAvailability.fields.timeSlot'),
  ),
  days: yupFilterSchemas.stringArray(
    i18n('entities.businessPlaceServiceAvailability.fields.days'),
  ),
  workOnHolidays: yupFilterSchemas.boolean(
    i18n('entities.businessPlaceServiceAvailability.fields.workOnHolidays'),
  ),
  serviceType: yupFilterSchemas.relationToOne(
    i18n('entities.businessPlaceServiceAvailability.fields.serviceType'),
  ),
});

const emptyValues = {
  name: null,
  businessId: null,
  timeSlot: [],
  days: [],
  workOnHolidays: null,
  serviceType: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.businessPlaceServiceAvailability.fields.name'),
    render: filterRenders.generic(),
  },
  businessId: {
      label: i18n('entities.businessPlaceServiceAvailability.fields.businessId'),
      render: filterRenders.relationToOne(),
    },
  timeSlot: {
    label: i18n('entities.businessPlaceServiceAvailability.fields.timeSlot'),
    render: filterRenders.enumeratorMultiple('entities.businessPlaceServiceAvailability.enumerators.timeSlot',),
  },
  days: {
    label: i18n('entities.businessPlaceServiceAvailability.fields.days'),
    render: filterRenders.enumeratorMultiple('entities.businessPlaceServiceAvailability.enumerators.days',),
  },
  workOnHolidays: {
    label: i18n('entities.businessPlaceServiceAvailability.fields.workOnHolidays'),
    render: filterRenders.boolean(),
  },
  serviceType: {
      label: i18n('entities.businessPlaceServiceAvailability.fields.serviceType'),
      render: filterRenders.relationToOne(),
    },
}

function BusinessPlaceServiceAvailabilityListFilter(props) {
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
              <InputFormItem
                name="name"
                label={i18n('entities.businessPlaceServiceAvailability.fields.name')}      
              />
              <BusinessAutocompleteFormItem  
                name="businessId"
                label={i18n('entities.businessPlaceServiceAvailability.fields.businessId')}        
              />
              <SelectFormItem
                name="timeSlot"
                label={i18n('entities.businessPlaceServiceAvailability.fields.timeSlot')}
                options={businessPlaceServiceAvailabilityEnumerators.timeSlot.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.businessPlaceServiceAvailability.enumerators.timeSlot.${value}`,
                    ),
                  }),
                )}
                mode="multiple"
              />
              <SelectFormItem
                name="days"
                label={i18n('entities.businessPlaceServiceAvailability.fields.days')}
                options={businessPlaceServiceAvailabilityEnumerators.days.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.businessPlaceServiceAvailability.enumerators.days.${value}`,
                    ),
                  }),
                )}
                mode="multiple"
              />
              <SelectFormItem
                name="workOnHolidays"
                label={i18n('entities.businessPlaceServiceAvailability.fields.workOnHolidays')}
                options={[
                  {
                    value: true,
                    label: i18n('common.yes'),
                  },
                  {
                    value: false,
                    label: i18n('common.no'),
                  },
                ]}
              />
              <BusinessServicesTypesAutocompleteFormItem  
                name="serviceType"
                label={i18n('entities.businessPlaceServiceAvailability.fields.serviceType')}        
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

export default BusinessPlaceServiceAvailabilityListFilter;