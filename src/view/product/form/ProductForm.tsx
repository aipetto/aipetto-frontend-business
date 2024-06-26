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
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  sku: yupFormSchemas.string(
    i18n('entities.product.fields.sku'),
    {},
  ),
  name: yupFormSchemas.string(
    i18n('entities.product.fields.name'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.product.fields.description'),
    {
      "max": 21845
    },
  ),
  unitPrice: yupFormSchemas.decimal(
    i18n('entities.product.fields.unitPrice'),
    {
      "required": true,
      "scale": 2,
      "min": 0.01,
      "max": 99999
    },
  ),
  photos: yupFormSchemas.images(
    i18n('entities.product.fields.photos'),
    {
      "max": 3
    },
  ),
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.businessId'),
    {},
  ),
  acceptPointsToShop: yupFormSchemas.boolean(
    i18n('entities.product.fields.acceptPointsToShop'),
    {},
  ),
  pointsPrice: yupFormSchemas.integer(
    i18n('entities.product.fields.pointsPrice'),
    {},
  ),
  currency: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.currency'),
    {},
  ),
  language: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.language'),
    {},
  ),
  country: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.country'),
    {},
  ),
  barcode: yupFormSchemas.integer(
    i18n('entities.product.fields.barcode'),
    {
      "max": 13
    },
  ),
  productNCM: yupFormSchemas.integer(
    i18n('entities.product.fields.productNCM'),
    {
      "max": 6
    },
  ),
  inStock: yupFormSchemas.integer(
    i18n('entities.product.fields.inStock'),
    {},
  ),
});

function ProductForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      sku: record.sku,
      name: record.name,
      description: record.description,
      unitPrice: record.unitPrice,
      photos: record.photos || [],
      businessId: record.businessId,
      acceptPointsToShop: record.acceptPointsToShop,
      pointsPrice: record.pointsPrice,
      currency: record.currency,
      language: record.language,
      country: record.country,
      barcode: record.barcode,
      productNCM: record.productNCM,
      inStock: record.inStock,
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
          <InputFormItem
            name="sku"
            label={i18n('entities.product.fields.sku')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="name"
            label={i18n('entities.product.fields.name')}
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="description"
            label={i18n('entities.product.fields.description')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="unitPrice"
            label={i18n('entities.product.fields.unitPrice')}  
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="photos"
            label={i18n('entities.product.fields.photos')}
            required={false}
            storage={Storage.values.productPhotos}
            max={3}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem
            name="businessId"
            label={i18n('entities.product.fields.businessId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="acceptPointsToShop"
            label={i18n('entities.product.fields.acceptPointsToShop')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="pointsPrice"
            label={i18n('entities.product.fields.pointsPrice')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CurrencyAutocompleteFormItem
            name="currency"
            label={i18n('entities.product.fields.currency')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <LanguagesAutocompleteFormItem
            name="language"
            label={i18n('entities.product.fields.language')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CountryAutocompleteFormItem
            name="country"
            label={i18n('entities.product.fields.country')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="barcode"
            label={i18n('entities.product.fields.barcode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="productNCM"
            label={i18n('entities.product.fields.productNCM')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="inStock"
            label={i18n('entities.product.fields.inStock')}
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

export default ProductForm;
