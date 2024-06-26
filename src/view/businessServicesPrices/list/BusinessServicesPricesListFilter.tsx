import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessServicesPrices/list/businessServicesPricesListActions';
import selectors from 'src/modules/businessServicesPrices/list/businessServicesPricesListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import BusinessServicesTypesAutocompleteFormItem from 'src/view/businessServicesTypes/autocomplete/BusinessServicesTypesAutocompleteFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';

const schema = yup.object().shape({
  service: yupFilterSchemas.relationToOne(
    i18n('entities.businessServicesPrices.fields.service'),
  ),
  businessId: yupFilterSchemas.relationToOne(
    i18n('entities.businessServicesPrices.fields.businessId'),
  ),
  servicePriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.businessServicesPrices.fields.servicePriceRange'),
  ),
  currency: yupFilterSchemas.relationToOne(
    i18n('entities.businessServicesPrices.fields.currency'),
  ),
  isFree: yupFilterSchemas.boolean(
    i18n('entities.businessServicesPrices.fields.isFree'),
  ),
  notesToCustomersOnThisService: yupFilterSchemas.string(
    i18n('entities.businessServicesPrices.fields.notesToCustomersOnThisService'),
  ),
});

const emptyValues = {
  service: null,
  businessId: null,
  servicePriceRange: [],
  currency: null,
  isFree: null,
  notesToCustomersOnThisService: null,
}

const previewRenders = {
  service: {
      label: i18n('entities.businessServicesPrices.fields.service'),
      render: filterRenders.relationToOne(),
    },
  businessId: {
      label: i18n('entities.businessServicesPrices.fields.businessId'),
      render: filterRenders.relationToOne(),
    },
  servicePriceRange: {
    label: i18n('entities.businessServicesPrices.fields.servicePriceRange'),
    render: filterRenders.decimalRange(),
  },
  currency: {
      label: i18n('entities.businessServicesPrices.fields.currency'),
      render: filterRenders.relationToOne(),
    },
  isFree: {
    label: i18n('entities.businessServicesPrices.fields.isFree'),
    render: filterRenders.boolean(),
  },
  notesToCustomersOnThisService: {
    label: i18n('entities.businessServicesPrices.fields.notesToCustomersOnThisService'),
    render: filterRenders.generic(),
  },
}

function BusinessServicesPricesListFilter(props) {
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
              <BusinessServicesTypesAutocompleteFormItem  
                name="service"
                label={i18n('entities.businessServicesPrices.fields.service')}        
              />
              <BusinessAutocompleteFormItem  
                name="businessId"
                label={i18n('entities.businessServicesPrices.fields.businessId')}        
              />
              <InputRangeFormItem
                name="servicePriceRange"
                label={i18n('entities.businessServicesPrices.fields.servicePriceRange')}      
              />
              <CurrencyAutocompleteFormItem
                name="currency"
                label={i18n('entities.businessServicesPrices.fields.currency')}
              />
              <SelectFormItem
                name="isFree"
                label={i18n('entities.businessServicesPrices.fields.isFree')}
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
              <InputFormItem
                name="notesToCustomersOnThisService"
                label={i18n('entities.businessServicesPrices.fields.notesToCustomersOnThisService')}
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

export default BusinessServicesPricesListFilter;