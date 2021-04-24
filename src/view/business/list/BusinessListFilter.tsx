import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/business/list/businessListActions';
import selectors from 'src/modules/business/list/businessListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import CityAutocompleteFormItem from 'src/view/city/autocomplete/CityAutocompleteFormItem';
import StateAutocompleteFormItem from 'src/view/state/autocomplete/StateAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.business.fields.name'),
  ),
  contactName: yupFilterSchemas.string(
    i18n('entities.business.fields.contactName'),
  ),
  contactPhone: yupFilterSchemas.string(
    i18n('entities.business.fields.contactPhone'),
  ),
  contactWhatsApp: yupFilterSchemas.string(
    i18n('entities.business.fields.contactWhatsApp'),
  ),
  contactEmail: yupFilterSchemas.string(
    i18n('entities.business.fields.contactEmail'),
  ),
  addressStreet: yupFilterSchemas.string(
    i18n('entities.business.fields.addressStreet'),
  ),
  addressStreetNumber: yupFilterSchemas.string(
    i18n('entities.business.fields.addressStreetNumber'),
  ),
  addressPostCode: yupFilterSchemas.string(
    i18n('entities.business.fields.addressPostCode'),
  ),
  city: yupFilterSchemas.relationToOne(
    i18n('entities.business.fields.city'),
  ),
  state: yupFilterSchemas.relationToOne(
    i18n('entities.business.fields.state'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.business.fields.country'),
  ),
});

const emptyValues = {
  name: null,
  contactName: null,
  contactPhone: null,
  contactWhatsApp: null,
  contactEmail: null,
  addressStreet: null,
  addressStreetNumber: null,
  addressPostCode: null,
  city: null,
  state: null,
  country: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.business.fields.name'),
    render: filterRenders.generic(),
  },
  contactName: {
    label: i18n('entities.business.fields.contactName'),
    render: filterRenders.generic(),
  },
  contactPhone: {
    label: i18n('entities.business.fields.contactPhone'),
    render: filterRenders.generic(),
  },
  contactWhatsApp: {
    label: i18n('entities.business.fields.contactWhatsApp'),
    render: filterRenders.generic(),
  },
  contactEmail: {
    label: i18n('entities.business.fields.contactEmail'),
    render: filterRenders.generic(),
  },
  addressStreet: {
    label: i18n('entities.business.fields.addressStreet'),
    render: filterRenders.generic(),
  },
  addressStreetNumber: {
    label: i18n('entities.business.fields.addressStreetNumber'),
    render: filterRenders.generic(),
  },
  addressPostCode: {
    label: i18n('entities.business.fields.addressPostCode'),
    render: filterRenders.generic(),
  },
  city: {
      label: i18n('entities.business.fields.city'),
      render: filterRenders.relationToOne(),
    },
  state: {
      label: i18n('entities.business.fields.state'),
      render: filterRenders.relationToOne(),
    },
  country: {
      label: i18n('entities.business.fields.country'),
      render: filterRenders.relationToOne(),
    },
}

function BusinessListFilter(props) {
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
                label={i18n('entities.business.fields.name')}      
              />
              <InputFormItem
                name="contactName"
                label={i18n('entities.business.fields.contactName')}
              />
              <InputFormItem
                name="contactPhone"
                label={i18n('entities.business.fields.contactPhone')}
              />
              <InputFormItem
                name="contactWhatsApp"
                label={i18n('entities.business.fields.contactWhatsApp')}
              />
              <InputFormItem
                name="contactEmail"
                label={i18n('entities.business.fields.contactEmail')}
              />
              <InputFormItem
                name="addressStreet"
                label={i18n('entities.business.fields.addressStreet')}
              />
              <InputFormItem
                name="addressStreetNumber"
                label={i18n('entities.business.fields.addressStreetNumber')}
              />
              <InputFormItem
                name="addressPostCode"
                label={i18n('entities.business.fields.addressPostCode')}
              />
              <CityAutocompleteFormItem
                name="city"
                label={i18n('entities.business.fields.city')}
              />
              <StateAutocompleteFormItem
                name="state"
                label={i18n('entities.business.fields.state')}
              />
              <CountryAutocompleteFormItem
                name="country"
                label={i18n('entities.business.fields.country')}
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

export default BusinessListFilter;