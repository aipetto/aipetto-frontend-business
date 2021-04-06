import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/place/list/placeListActions';
import selectors from 'src/modules/place/list/placeListSelectors';
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

const schema = yup.object().shape({
  businessId: yupFilterSchemas.relationToOne(
    i18n('entities.place.fields.businessId'),
  ),
  latitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.place.fields.latitudeRange'),
  ),
  longitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.place.fields.longitudeRange'),
  ),
  address: yupFilterSchemas.string(
    i18n('entities.place.fields.address'),
  ),
  addressNumber: yupFilterSchemas.string(
    i18n('entities.place.fields.addressNumber'),
  ),
  addressZipCode: yupFilterSchemas.string(
    i18n('entities.place.fields.addressZipCode'),
  ),
  openTime: yupFilterSchemas.string(
    i18n('entities.place.fields.openTime'),
  ),
  closeTime: yupFilterSchemas.string(
    i18n('entities.place.fields.closeTime'),
  ),
  is24hours: yupFilterSchemas.boolean(
    i18n('entities.place.fields.is24hours'),
  ),
});

const emptyValues = {
  businessId: null,
  latitudeRange: [],
  longitudeRange: [],
  address: null,
  addressNumber: null,
  addressZipCode: null,
  openTime: null,
  closeTime: null,
  is24hours: null,
}

const previewRenders = {
  businessId: {
      label: i18n('entities.place.fields.businessId'),
      render: filterRenders.relationToOne(),
    },
  latitudeRange: {
    label: i18n('entities.place.fields.latitudeRange'),
    render: filterRenders.decimalRange(),
  },
  longitudeRange: {
    label: i18n('entities.place.fields.longitudeRange'),
    render: filterRenders.decimalRange(),
  },
  address: {
    label: i18n('entities.place.fields.address'),
    render: filterRenders.generic(),
  },
  addressNumber: {
    label: i18n('entities.place.fields.addressNumber'),
    render: filterRenders.generic(),
  },
  addressZipCode: {
    label: i18n('entities.place.fields.addressZipCode'),
    render: filterRenders.generic(),
  },
  openTime: {
    label: i18n('entities.place.fields.openTime'),
    render: filterRenders.generic(),
  },
  closeTime: {
    label: i18n('entities.place.fields.closeTime'),
    render: filterRenders.generic(),
  },
  is24hours: {
    label: i18n('entities.place.fields.is24hours'),
    render: filterRenders.boolean(),
  },
}

function PlaceListFilter(props) {
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
                label={i18n('entities.place.fields.businessId')}        
              />
              <InputRangeFormItem
                name="latitudeRange"
                label={i18n('entities.place.fields.latitudeRange')}      
              />
              <InputRangeFormItem
                name="longitudeRange"
                label={i18n('entities.place.fields.longitudeRange')}      
              />
              <InputFormItem
                name="address"
                label={i18n('entities.place.fields.address')}      
              />
              <InputFormItem
                name="addressNumber"
                label={i18n('entities.place.fields.addressNumber')}      
              />
              <InputFormItem
                name="addressZipCode"
                label={i18n('entities.place.fields.addressZipCode')}      
              />
              <InputFormItem
                name="openTime"
                label={i18n('entities.place.fields.openTime')}      
              />
              <InputFormItem
                name="closeTime"
                label={i18n('entities.place.fields.closeTime')}      
              />
              <SelectFormItem
                name="is24hours"
                label={i18n('entities.place.fields.is24hours')}
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

export default PlaceListFilter;