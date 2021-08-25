import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/providers/list/providersListActions';
import selectors from 'src/modules/providers/list/providersListSelectors';
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
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CityAutocompleteFormItem from 'src/view/city/autocomplete/CityAutocompleteFormItem';
import StateAutocompleteFormItem from 'src/view/state/autocomplete/StateAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.providers.fields.name'),
  ),
  businessID: yupFilterSchemas.relationToOne(
    i18n('entities.providers.fields.businessID'),
  ),
  providerID: yupFilterSchemas.string(
    i18n('entities.providers.fields.providerID'),
  ),
  contactName: yupFilterSchemas.string(
    i18n('entities.providers.fields.contactName'),
  ),
  contactPhone: yupFilterSchemas.string(
    i18n('entities.providers.fields.contactPhone'),
  ),
  contactWhatsApp: yupFilterSchemas.string(
    i18n('entities.providers.fields.contactWhatsApp'),
  ),
  addressStreet: yupFilterSchemas.string(
    i18n('entities.providers.fields.addressStreet'),
  ),
  addressStreetNumber: yupFilterSchemas.string(
    i18n('entities.providers.fields.addressStreetNumber'),
  ),
  addressPostCode: yupFilterSchemas.string(
    i18n('entities.providers.fields.addressPostCode'),
  ),
  city: yupFilterSchemas.relationToOne(
    i18n('entities.providers.fields.city'),
  ),
  state: yupFilterSchemas.relationToOne(
    i18n('entities.providers.fields.state'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.providers.fields.country'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.providers.fields.email'),
  ),
  latitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.providers.fields.latitudeRange'),
  ),
  longitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.providers.fields.longitudeRange'),
  ),
  basePricePerServiceRange: yupFilterSchemas.decimalRange(
    i18n('entities.providers.fields.basePricePerServiceRange'),
  ),
  currency: yupFilterSchemas.relationToOne(
    i18n('entities.providers.fields.currency'),
  ),
  language: yupFilterSchemas.relationToOne(
    i18n('entities.providers.fields.language'),
  ),
  isIndependent: yupFilterSchemas.boolean(
    i18n('entities.providers.fields.isIndependent'),
  ),
});

const emptyValues = {
  name: null,
  businessID: null,
  providerID: null,
  contactName: null,
  contactPhone: null,
  contactWhatsApp: null,
  addressStreet: null,
  addressStreetNumber: null,
  addressPostCode: null,
  city: null,
  state: null,
  country: null,
  email: null,
  latitudeRange: [],
  longitudeRange: [],
  basePricePerServiceRange: [],
  currency: null,
  language: null,
  isIndependent: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.providers.fields.name'),
    render: filterRenders.generic(),
  },
  businessID: {
      label: i18n('entities.providers.fields.businessID'),
      render: filterRenders.relationToOne(),
    },
  providerID: {
    label: i18n('entities.providers.fields.providerID'),
    render: filterRenders.generic(),
  },
  contactName: {
    label: i18n('entities.providers.fields.contactName'),
    render: filterRenders.generic(),
  },
  contactPhone: {
    label: i18n('entities.providers.fields.contactPhone'),
    render: filterRenders.generic(),
  },
  contactWhatsApp: {
    label: i18n('entities.providers.fields.contactWhatsApp'),
    render: filterRenders.generic(),
  },
  addressStreet: {
    label: i18n('entities.providers.fields.addressStreet'),
    render: filterRenders.generic(),
  },
  addressStreetNumber: {
    label: i18n('entities.providers.fields.addressStreetNumber'),
    render: filterRenders.generic(),
  },
  addressPostCode: {
    label: i18n('entities.providers.fields.addressPostCode'),
    render: filterRenders.generic(),
  },
  city: {
      label: i18n('entities.providers.fields.city'),
      render: filterRenders.relationToOne(),
    },
  state: {
      label: i18n('entities.providers.fields.state'),
      render: filterRenders.relationToOne(),
    },
  country: {
      label: i18n('entities.providers.fields.country'),
      render: filterRenders.relationToOne(),
    },
  email: {
    label: i18n('entities.providers.fields.email'),
    render: filterRenders.generic(),
  },
  basePricePerServiceRange: {
    label: i18n('entities.providers.fields.basePricePerServiceRange'),
    render: filterRenders.decimalRange(),
  },
  currency: {
      label: i18n('entities.providers.fields.currency'),
      render: filterRenders.relationToOne(),
    },
  language: {
      label: i18n('entities.providers.fields.language'),
      render: filterRenders.relationToOne(),
    },
  isIndependent: {
    label: i18n('entities.providers.fields.isIndependent'),
    render: filterRenders.boolean(),
  },
}

function ProvidersListFilter(props) {
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
                label={i18n('entities.providers.fields.name')}      
              />
              <BusinessAutocompleteFormItem  
                name="businessID"
                label={i18n('entities.providers.fields.businessID')}        
              />
              <InputFormItem
                name="providerID"
                label={i18n('entities.providers.fields.providerID')}      
              />
              <InputFormItem
                name="contactName"
                label={i18n('entities.providers.fields.contactName')}      
              />
              <InputFormItem
                name="contactPhone"
                label={i18n('entities.providers.fields.contactPhone')}      
              />
              <InputFormItem
                name="contactWhatsApp"
                label={i18n('entities.providers.fields.contactWhatsApp')}      
              />
              <InputFormItem
                name="addressStreet"
                label={i18n('entities.providers.fields.addressStreet')}      
              />
              <InputFormItem
                name="addressStreetNumber"
                label={i18n('entities.providers.fields.addressStreetNumber')}      
              />
              <InputFormItem
                name="addressPostCode"
                label={i18n('entities.providers.fields.addressPostCode')}      
              />
              <CityAutocompleteFormItem  
                name="city"
                label={i18n('entities.providers.fields.city')}        
              />
              <StateAutocompleteFormItem  
                name="state"
                label={i18n('entities.providers.fields.state')}        
              />
              <CountryAutocompleteFormItem  
                name="country"
                label={i18n('entities.providers.fields.country')}        
              />
              <InputFormItem
                name="email"
                label={i18n('entities.providers.fields.email')}
              />
              <InputRangeFormItem
                name="basePricePerServiceRange"
                label={i18n('entities.providers.fields.basePricePerServiceRange')}
              />
              <CurrencyAutocompleteFormItem
                name="currency"
                label={i18n('entities.providers.fields.currency')}
              />
              <LanguagesAutocompleteFormItem
                name="language"
                label={i18n('entities.providers.fields.language')}
              />
              <SelectFormItem
                name="isIndependent"
                label={i18n('entities.providers.fields.isIndependent')}
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

export default ProvidersListFilter;