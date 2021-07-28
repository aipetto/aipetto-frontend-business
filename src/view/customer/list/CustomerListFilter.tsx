import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/customer/list/customerListActions';
import selectors from 'src/modules/customer/list/customerListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import customerEnumerators from 'src/modules/customer/customerEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.customer.fields.name'),
  ),
  businessId: yupFilterSchemas.relationToOne(
    i18n('entities.customer.fields.businessId'),
  ),
  uniqueCustomIdentifier: yupFilterSchemas.string(
    i18n('entities.customer.fields.uniqueCustomIdentifier'),
  ),
  userId: yupFilterSchemas.relationToOne(
    i18n('entities.customer.fields.userId'),
  ),
  source: yupFilterSchemas.enumerator(
    i18n('entities.customer.fields.source'),
  ),
  surname: yupFilterSchemas.string(
    i18n('entities.customer.fields.surname'),
  ),
  birthdateRange: yupFilterSchemas.dateRange(
    i18n('entities.customer.fields.birthdateRange'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.customer.fields.gender'),
  ),
  whatsApp: yupFilterSchemas.string(
    i18n('entities.customer.fields.whatsApp'),
  ),
  smsPhoneNumber: yupFilterSchemas.string(
    i18n('entities.customer.fields.smsPhoneNumber'),
  ),
  phoneNumber: yupFilterSchemas.string(
    i18n('entities.customer.fields.phoneNumber'),
  ),
  address: yupFilterSchemas.string(
    i18n('entities.customer.fields.address'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.customer.fields.email'),
  ),
  zipCode: yupFilterSchemas.string(
    i18n('entities.customer.fields.zipCode'),
  ),
  city: yupFilterSchemas.string(
    i18n('entities.customer.fields.city'),
  ),
  state: yupFilterSchemas.string(
    i18n('entities.customer.fields.state'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.customer.fields.country'),
  ),
  billingAddressStreet: yupFilterSchemas.string(
    i18n('entities.customer.fields.billingAddressStreet'),
  ),
  billingAddressCity: yupFilterSchemas.string(
    i18n('entities.customer.fields.billingAddressCity'),
  ),
  billingAddressState: yupFilterSchemas.string(
    i18n('entities.customer.fields.billingAddressState'),
  ),
  billingAddressZipCode: yupFilterSchemas.string(
    i18n('entities.customer.fields.billingAddressZipCode'),
  ),
  billingAddressCountry: yupFilterSchemas.string(
    i18n('entities.customer.fields.billingAddressCountry'),
  ),
  shippingAddressStreet: yupFilterSchemas.string(
    i18n('entities.customer.fields.shippingAddressStreet'),
  ),
  shippingAddressCity: yupFilterSchemas.string(
    i18n('entities.customer.fields.shippingAddressCity'),
  ),
  shippingAddressState: yupFilterSchemas.string(
    i18n('entities.customer.fields.shippingAddressState'),
  ),
  shippingAddressZipCode: yupFilterSchemas.string(
    i18n('entities.customer.fields.shippingAddressZipCode'),
  ),
  shippingAddressCountry: yupFilterSchemas.string(
    i18n('entities.customer.fields.shippingAddressCountry'),
  ),
  latitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.customer.fields.latitudeRange'),
  ),
  longitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.customer.fields.longitudeRange'),
  ),
  prospectStatus: yupFilterSchemas.enumerator(
    i18n('entities.customer.fields.prospectStatus'),
  ),
  customerStatus: yupFilterSchemas.enumerator(
    i18n('entities.customer.fields.customerStatus'),
  ),
  wantToReceiveNotifications: yupFilterSchemas.boolean(
    i18n('entities.customer.fields.wantToReceiveNotifications'),
  ),
  currency: yupFilterSchemas.relationToOne(
    i18n('entities.customer.fields.currency'),
  ),
  balanceRange: yupFilterSchemas.decimalRange(
    i18n('entities.customer.fields.balanceRange'),
  ),
  shippingAddressStreetNumber: yupFilterSchemas.string(
    i18n('entities.customer.fields.shippingAddressStreetNumber'),
  ),
  addressStreetNumber: yupFilterSchemas.string(
    i18n('entities.customer.fields.addressStreetNumber'),
  ),
  billingAddressStreetNumber: yupFilterSchemas.string(
    i18n('entities.customer.fields.billingAddressStreetNumber'),
  ),
  addressStreetComplement: yupFilterSchemas.string(
    i18n('entities.customer.fields.addressStreetComplement'),
  ),
  billingAddressStreetComplement: yupFilterSchemas.string(
    i18n('entities.customer.fields.billingAddressStreetComplement'),
  ),
  shippingAddressStreetComplement: yupFilterSchemas.string(
    i18n('entities.customer.fields.shippingAddressStreetComplement'),
  ),
});

const emptyValues = {
  name: null,
  businessId: null,
  uniqueCustomIdentifier: null,
  userId: null,
  source: null,
  surname: null,
  birthdateRange: [],
  gender: null,
  whatsApp: null,
  smsPhoneNumber: null,
  phoneNumber: null,
  address: null,
  email: null,
  zipCode: null,
  city: null,
  state: null,
  country: null,
  billingAddressStreet: null,
  billingAddressCity: null,
  billingAddressState: null,
  billingAddressZipCode: null,
  billingAddressCountry: null,
  shippingAddressStreet: null,
  shippingAddressCity: null,
  shippingAddressState: null,
  shippingAddressZipCode: null,
  shippingAddressCountry: null,
  latitudeRange: [],
  longitudeRange: [],
  prospectStatus: null,
  customerStatus: null,
  wantToReceiveNotifications: null,
  currency: null,
  balanceRange: [],
  shippingAddressStreetNumber: null,
  addressStreetNumber: null,
  billingAddressStreetNumber: null,
  addressStreetComplement: null,
  billingAddressStreetComplement: null,
  shippingAddressStreetComplement: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.customer.fields.name'),
    render: filterRenders.generic(),
  },
  businessId: {
      label: i18n('entities.customer.fields.businessId'),
      render: filterRenders.relationToOne(),
    },
  uniqueCustomIdentifier: {
    label: i18n('entities.customer.fields.uniqueCustomIdentifier'),
    render: filterRenders.generic(),
  },
  userId: {
    label: i18n('entities.customer.fields.userId'),
    render: filterRenders.relationToOne(),
  },
  source: {
    label: i18n('entities.customer.fields.source'),
    render: filterRenders.enumerator('entities.customer.enumerators.source',),
  },
  surname: {
    label: i18n('entities.customer.fields.surname'),
    render: filterRenders.generic(),
  },
  birthdateRange: {
    label: i18n('entities.customer.fields.birthdateRange'),
    render: filterRenders.dateRange(),
  },
  gender: {
    label: i18n('entities.customer.fields.gender'),
    render: filterRenders.enumerator('entities.customer.enumerators.gender',),
  },
  whatsApp: {
    label: i18n('entities.customer.fields.whatsApp'),
    render: filterRenders.generic(),
  },
  smsPhoneNumber: {
    label: i18n('entities.customer.fields.smsPhoneNumber'),
    render: filterRenders.generic(),
  },
  phoneNumber: {
    label: i18n('entities.customer.fields.phoneNumber'),
    render: filterRenders.generic(),
  },
  address: {
    label: i18n('entities.customer.fields.address'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.customer.fields.email'),
    render: filterRenders.generic(),
  },
  zipCode: {
    label: i18n('entities.customer.fields.zipCode'),
    render: filterRenders.generic(),
  },
  city: {
    label: i18n('entities.customer.fields.city'),
    render: filterRenders.generic(),
  },
  state: {
    label: i18n('entities.customer.fields.state'),
    render: filterRenders.generic(),
  },
  country: {
      label: i18n('entities.customer.fields.country'),
      render: filterRenders.relationToOne(),
    },
  billingAddressStreet: {
    label: i18n('entities.customer.fields.billingAddressStreet'),
    render: filterRenders.generic(),
  },
  billingAddressCity: {
    label: i18n('entities.customer.fields.billingAddressCity'),
    render: filterRenders.generic(),
  },
  billingAddressState: {
    label: i18n('entities.customer.fields.billingAddressState'),
    render: filterRenders.generic(),
  },
  billingAddressZipCode: {
    label: i18n('entities.customer.fields.billingAddressZipCode'),
    render: filterRenders.generic(),
  },
  billingAddressCountry: {
    label: i18n('entities.customer.fields.billingAddressCountry'),
    render: filterRenders.generic(),
  },
  shippingAddressStreet: {
    label: i18n('entities.customer.fields.shippingAddressStreet'),
    render: filterRenders.generic(),
  },
  shippingAddressCity: {
    label: i18n('entities.customer.fields.shippingAddressCity'),
    render: filterRenders.generic(),
  },
  shippingAddressState: {
    label: i18n('entities.customer.fields.shippingAddressState'),
    render: filterRenders.generic(),
  },
  shippingAddressZipCode: {
    label: i18n('entities.customer.fields.shippingAddressZipCode'),
    render: filterRenders.generic(),
  },
  shippingAddressCountry: {
    label: i18n('entities.customer.fields.shippingAddressCountry'),
    render: filterRenders.generic(),
  },
  latitudeRange: {
    label: i18n('entities.customer.fields.latitudeRange'),
    render: filterRenders.decimalRange(),
  },
  longitudeRange: {
    label: i18n('entities.customer.fields.longitudeRange'),
    render: filterRenders.decimalRange(),
  },
  prospectStatus: {
    label: i18n('entities.customer.fields.prospectStatus'),
    render: filterRenders.enumerator('entities.customer.enumerators.prospectStatus',),
  },
  customerStatus: {
    label: i18n('entities.customer.fields.customerStatus'),
    render: filterRenders.enumerator('entities.customer.enumerators.customerStatus',),
  },
  wantToReceiveNotifications: {
    label: i18n('entities.customer.fields.wantToReceiveNotifications'),
    render: filterRenders.boolean(),
  },
  currency: {
      label: i18n('entities.customer.fields.currency'),
      render: filterRenders.relationToOne(),
    },
  balanceRange: {
    label: i18n('entities.customer.fields.balanceRange'),
    render: filterRenders.decimalRange(),
  },
  shippingAddressStreetNumber: {
    label: i18n('entities.customer.fields.shippingAddressStreetNumber'),
    render: filterRenders.generic(),
  },
  addressStreetNumber: {
    label: i18n('entities.customer.fields.addressStreetNumber'),
    render: filterRenders.generic(),
  },
  billingAddressStreetNumber: {
    label: i18n('entities.customer.fields.billingAddressStreetNumber'),
    render: filterRenders.generic(),
  },
  addressStreetComplement: {
    label: i18n('entities.customer.fields.addressStreetComplement'),
    render: filterRenders.generic(),
  },
  billingAddressStreetComplement: {
    label: i18n('entities.customer.fields.billingAddressStreetComplement'),
    render: filterRenders.generic(),
  },
  shippingAddressStreetComplement: {
    label: i18n('entities.customer.fields.shippingAddressStreetComplement'),
    render: filterRenders.generic(),
  },
}

function CustomerListFilter(props) {
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
                label={i18n('entities.customer.fields.name')}
              />
              <BusinessAutocompleteFormItem
                name="businessId"
                label={i18n('entities.customer.fields.businessId')}
              />
              <InputFormItem
                name="uniqueCustomIdentifier"
                label={i18n('entities.customer.fields.uniqueCustomIdentifier')}
              />
              <UserAutocompleteFormItem
                name="userId"
                label={i18n('entities.customer.fields.userId')}
              />
              <SelectFormItem
                  name="source"
                  label={i18n('entities.customer.fields.source')}
                  options={customerEnumerators.source.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.customer.enumerators.source.${value}`,
                      ),
                    }),
                  )}
                />
              <InputFormItem
                name="surname"
                label={i18n('entities.customer.fields.surname')}
              />
              <DatePickerRangeFormItem
                name="birthdateRange"
                label={i18n('entities.customer.fields.birthdateRange')}    
              />
              <SelectFormItem
                  name="gender"
                  label={i18n('entities.customer.fields.gender')}
                  options={customerEnumerators.gender.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.customer.enumerators.gender.${value}`,
                      ),
                    }),
                  )}
                />
              <InputFormItem
                name="whatsApp"
                label={i18n('entities.customer.fields.whatsApp')}
              />
              <InputFormItem
                name="smsPhoneNumber"
                label={i18n('entities.customer.fields.smsPhoneNumber')}
              />
              <InputFormItem
                name="phoneNumber"
                label={i18n('entities.customer.fields.phoneNumber')}
              />
              <InputFormItem
                name="address"
                label={i18n('entities.customer.fields.address')}
              />
              <InputFormItem
                name="email"
                label={i18n('entities.customer.fields.email')}
              />
              <InputFormItem
                name="zipCode"
                label={i18n('entities.customer.fields.zipCode')}
              />
              <InputFormItem
                name="city"
                label={i18n('entities.customer.fields.city')}
              />
              <InputFormItem
                name="state"
                label={i18n('entities.customer.fields.state')}
              />
              <CountryAutocompleteFormItem
                name="country"
                label={i18n('entities.customer.fields.country')}
              />
              <InputFormItem
                name="billingAddressStreet"
                label={i18n('entities.customer.fields.billingAddressStreet')}
              />
              <InputFormItem
                name="billingAddressCity"
                label={i18n('entities.customer.fields.billingAddressCity')}
              />
              <InputFormItem
                name="billingAddressState"
                label={i18n('entities.customer.fields.billingAddressState')}
              />
              <InputFormItem
                name="billingAddressZipCode"
                label={i18n('entities.customer.fields.billingAddressZipCode')}
              />
              <InputFormItem
                name="billingAddressCountry"
                label={i18n('entities.customer.fields.billingAddressCountry')}
              />
              <InputFormItem
                name="shippingAddressStreet"
                label={i18n('entities.customer.fields.shippingAddressStreet')}
              />
              <InputFormItem
                name="shippingAddressCity"
                label={i18n('entities.customer.fields.shippingAddressCity')}
              />
              <InputFormItem
                name="shippingAddressState"
                label={i18n('entities.customer.fields.shippingAddressState')}
              />
              <InputFormItem
                name="shippingAddressZipCode"
                label={i18n('entities.customer.fields.shippingAddressZipCode')}
              />
              <InputFormItem
                name="shippingAddressCountry"
                label={i18n('entities.customer.fields.shippingAddressCountry')}
              />
              <InputRangeFormItem
                name="latitudeRange"
                label={i18n('entities.customer.fields.latitudeRange')}
              />
              <InputRangeFormItem
                name="longitudeRange"
                label={i18n('entities.customer.fields.longitudeRange')}
              />
              <SelectFormItem
                  name="prospectStatus"
                  label={i18n('entities.customer.fields.prospectStatus')}
                  options={customerEnumerators.prospectStatus.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.customer.enumerators.prospectStatus.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="customerStatus"
                  label={i18n('entities.customer.fields.customerStatus')}
                  options={customerEnumerators.customerStatus.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.customer.enumerators.customerStatus.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                name="wantToReceiveNotifications"
                label={i18n('entities.customer.fields.wantToReceiveNotifications')}
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
              <CurrencyAutocompleteFormItem
                name="currency"
                label={i18n('entities.customer.fields.currency')}
              />
              <InputRangeFormItem
                name="balanceRange"
                label={i18n('entities.customer.fields.balanceRange')}
              />
              <InputFormItem
                name="shippingAddressStreetNumber"
                label={i18n('entities.customer.fields.shippingAddressStreetNumber')}
              />
              <InputFormItem
                name="addressStreetNumber"
                label={i18n('entities.customer.fields.addressStreetNumber')}
              />
              <InputFormItem
                name="billingAddressStreetNumber"
                label={i18n('entities.customer.fields.billingAddressStreetNumber')}
              />
              <InputFormItem
                name="addressStreetComplement"
                label={i18n('entities.customer.fields.addressStreetComplement')}
              />
              <InputFormItem
                name="billingAddressStreetComplement"
                label={i18n('entities.customer.fields.billingAddressStreetComplement')}
              />
              <InputFormItem
                name="shippingAddressStreetComplement"
                label={i18n('entities.customer.fields.shippingAddressStreetComplement')}
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

export default CustomerListFilter;