import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/deals/list/dealsListActions';
import selectors from 'src/modules/deals/list/dealsListSelectors';
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
import dealsEnumerators from 'src/modules/deals/dealsEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';

const schema = yup.object().shape({
  status: yupFilterSchemas.enumerator(
    i18n('entities.deals.fields.status'),
  ),
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.deals.fields.customer'),
  ),
  dateStartRange: yupFilterSchemas.dateRange(
    i18n('entities.deals.fields.dateStartRange'),
  ),
  dateEndedRange: yupFilterSchemas.dateRange(
    i18n('entities.deals.fields.dateEndedRange'),
  ),
  salesManagerResponsible: yupFilterSchemas.relationToOne(
    i18n('entities.deals.fields.salesManagerResponsible'),
  ),
  businessID: yupFilterSchemas.relationToOne(
    i18n('entities.deals.fields.businessID'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.deals.fields.country'),
  ),
});

const emptyValues = {
  status: null,
  customer: null,
  dateStartRange: [],
  dateEndedRange: [],
  salesManagerResponsible: null,
  businessID: null,
  country: null,
}

const previewRenders = {
  status: {
    label: i18n('entities.deals.fields.status'),
    render: filterRenders.enumerator('entities.deals.enumerators.status',),
  },
  customer: {
      label: i18n('entities.deals.fields.customer'),
      render: filterRenders.relationToOne(),
    },
  dateStartRange: {
    label: i18n('entities.deals.fields.dateStartRange'),
    render: filterRenders.dateRange(),
  },
  dateEndedRange: {
    label: i18n('entities.deals.fields.dateEndedRange'),
    render: filterRenders.dateRange(),
  },
  salesManagerResponsible: {
    label: i18n('entities.deals.fields.salesManagerResponsible'),
    render: filterRenders.relationToOne(),
  },
  businessID: {
      label: i18n('entities.deals.fields.businessID'),
      render: filterRenders.relationToOne(),
    },
  country: {
      label: i18n('entities.deals.fields.country'),
      render: filterRenders.relationToOne(),
    },
}

function DealsListFilter(props) {
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
              <SelectFormItem
                  name="status"
                  label={i18n('entities.deals.fields.status')}
                  options={dealsEnumerators.status.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.deals.enumerators.status.${value}`,
                      ),
                    }),
                  )}
                />
              <CustomerAutocompleteFormItem  
                name="customer"
                label={i18n('entities.deals.fields.customer')}        
              />
              <DatePickerRangeFormItem
                name="dateStartRange"
                label={i18n('entities.deals.fields.dateStartRange')}    
              />
              <DatePickerRangeFormItem
                name="dateEndedRange"
                label={i18n('entities.deals.fields.dateEndedRange')}    
              />
              <UserAutocompleteFormItem  
                name="salesManagerResponsible"
                label={i18n('entities.deals.fields.salesManagerResponsible')}        
              />
              <BusinessAutocompleteFormItem  
                name="businessID"
                label={i18n('entities.deals.fields.businessID')}        
              />
              <CountryAutocompleteFormItem  
                name="country"
                label={i18n('entities.deals.fields.country')}        
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

export default DealsListFilter;