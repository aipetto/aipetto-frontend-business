import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/reservationAgenda/list/reservationAgendaListActions';
import selectors from 'src/modules/reservationAgenda/list/reservationAgendaListSelectors';
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
import reservationAgendaEnumerators from 'src/modules/reservationAgenda/reservationAgendaEnumerators';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';

const schema = yup.object().shape({
  businessId: yupFilterSchemas.relationToOne(
    i18n('entities.reservationAgenda.fields.businessId'),
  ),
  timeSlot: yupFilterSchemas.stringArray(
    i18n('entities.reservationAgenda.fields.timeSlot'),
  ),
  serviceType: yupFilterSchemas.relationToOne(
    i18n('entities.reservationAgenda.fields.serviceType'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.reservationAgenda.fields.name'),
  ),
});

const emptyValues = {
  businessId: null,
  timeSlot: [],
  serviceType: null,
  name: null,
}

const previewRenders = {
  businessId: {
      label: i18n('entities.reservationAgenda.fields.businessId'),
      render: filterRenders.relationToOne(),
    },
  timeSlot: {
    label: i18n('entities.reservationAgenda.fields.timeSlot'),
    render: filterRenders.enumeratorMultiple('entities.reservationAgenda.enumerators.timeSlot',),
  },
  serviceType: {
      label: i18n('entities.reservationAgenda.fields.serviceType'),
      render: filterRenders.relationToOne(),
    },
  name: {
    label: i18n('entities.reservationAgenda.fields.name'),
    render: filterRenders.generic(),
  },
}

function ReservationAgendaListFilter(props) {
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
              <BusinessAutocompleteFormItem  
                name="businessId"
                label={i18n('entities.reservationAgenda.fields.businessId')}        
              />
              <SelectFormItem
                name="timeSlot"
                label={i18n('entities.reservationAgenda.fields.timeSlot')}
                options={reservationAgendaEnumerators.timeSlot.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.reservationAgenda.enumerators.timeSlot.${value}`,
                    ),
                  }),
                )}
                mode="multiple"
              />
              <BusinessServicesTypesAutocompleteFormItem  
                name="serviceType"
                label={i18n('entities.reservationAgenda.fields.serviceType')}        
              />
              <InputFormItem
                name="name"
                label={i18n('entities.reservationAgenda.fields.name')}      
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

export default ReservationAgendaListFilter;