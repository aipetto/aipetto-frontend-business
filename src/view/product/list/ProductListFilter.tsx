import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/product/list/productListActions';
import selectors from 'src/modules/product/list/productListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';

const schema = yup.object().shape({
  sku: yupFilterSchemas.string(
    i18n('entities.product.fields.sku'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.product.fields.name'),
  ),
  unitPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.product.fields.unitPriceRange'),
  ),
  businessId: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.businessId'),
  ),
  acceptPointsToShop: yupFilterSchemas.boolean(
    i18n('entities.product.fields.acceptPointsToShop'),
  ),
  pointsPriceRange: yupFilterSchemas.integerRange(
    i18n('entities.product.fields.pointsPriceRange'),
  ),
  currency: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.currency'),
  ),
  language: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.language'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.country'),
  ),
  barcodeRange: yupFilterSchemas.integerRange(
    i18n('entities.product.fields.barcodeRange'),
  ),
  productNCMRange: yupFilterSchemas.integerRange(
    i18n('entities.product.fields.productNCMRange'),
  ),
  inStockRange: yupFilterSchemas.integerRange(
    i18n('entities.product.fields.inStockRange'),
  ),
});

const emptyValues = {
  sku: null,
  name: null,
  unitPriceRange: [],
  businessId: null,
  acceptPointsToShop: null,
  pointsPriceRange: [],
  currency: null,
  language: null,
  country: null,
  barcodeRange: [],
  productNCMRange: [],
  inStockRange: [],
}

const previewRenders = {
  sku: {
    label: i18n('entities.product.fields.sku'),
    render: filterRenders.generic(),
  },
  name: {
    label: i18n('entities.product.fields.name'),
    render: filterRenders.generic(),
  },
  unitPriceRange: {
    label: i18n('entities.product.fields.unitPriceRange'),
    render: filterRenders.decimalRange(2),
  },
  businessId: {
      label: i18n('entities.product.fields.businessId'),
      render: filterRenders.relationToOne(),
    },
  acceptPointsToShop: {
    label: i18n('entities.product.fields.acceptPointsToShop'),
    render: filterRenders.boolean(),
  },
  pointsPriceRange: {
    label: i18n('entities.product.fields.pointsPriceRange'),
    render: filterRenders.range(),
  },
  currency: {
      label: i18n('entities.product.fields.currency'),
      render: filterRenders.relationToOne(),
    },
  language: {
      label: i18n('entities.product.fields.language'),
      render: filterRenders.relationToOne(),
    },
  country: {
      label: i18n('entities.product.fields.country'),
      render: filterRenders.relationToOne(),
    },
  barcodeRange: {
    label: i18n('entities.product.fields.barcodeRange'),
    render: filterRenders.range(),
  },
  productNCMRange: {
    label: i18n('entities.product.fields.productNCMRange'),
    render: filterRenders.range(),
  },
  inStockRange: {
    label: i18n('entities.product.fields.inStockRange'),
    render: filterRenders.range(),
  },
}

function ProductListFilter(props) {
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
                name="sku"
                label={i18n('entities.product.fields.sku')}
              />
              <InputFormItem
                name="name"
                label={i18n('entities.product.fields.name')}      
              />
              <InputRangeFormItem
                name="unitPriceRange"
                label={i18n('entities.product.fields.unitPriceRange')}      
              />
              <BusinessAutocompleteFormItem
                name="businessId"
                label={i18n('entities.product.fields.businessId')}
              />
              <SelectFormItem
                name="acceptPointsToShop"
                label={i18n('entities.product.fields.acceptPointsToShop')}
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
              <InputNumberRangeFormItem
                name="pointsPriceRange"
                label={i18n('entities.product.fields.pointsPriceRange')}
              />
              <CurrencyAutocompleteFormItem
                name="currency"
                label={i18n('entities.product.fields.currency')}
              />
              <LanguagesAutocompleteFormItem
                name="language"
                label={i18n('entities.product.fields.language')}
              />
              <CountryAutocompleteFormItem
                name="country"
                label={i18n('entities.product.fields.country')}
              />
              <InputNumberRangeFormItem
                name="barcodeRange"
                label={i18n('entities.product.fields.barcodeRange')}
              />
              <InputNumberRangeFormItem
                name="productNCMRange"
                label={i18n('entities.product.fields.productNCMRange')}
              />
              <InputNumberRangeFormItem
                name="inStockRange"
                label={i18n('entities.product.fields.inStockRange')}
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

export default ProductListFilter;