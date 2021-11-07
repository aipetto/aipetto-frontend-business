import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/serviceReservation/list/serviceReservationListActions';
import selectors from 'src/modules/serviceReservation/list/serviceReservationListSelectors';
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
import serviceReservationEnumerators from 'src/modules/serviceReservation/serviceReservationEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import PlaceAutocompleteFormItem from 'src/view/place/autocomplete/PlaceAutocompleteFormItem';
import DiscountsAutocompleteFormItem from 'src/view/discounts/autocomplete/DiscountsAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';

const schema = yup.object().shape({
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.serviceReservation.fields.dateRange'),
  ),
  businessId: yupFilterSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.businessId'),
  ),
  customerId: yupFilterSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.customerId'),
  ),
  time: yupFilterSchemas.enumerator(
    i18n('entities.serviceReservation.fields.time'),
  ),
  needTransportation: yupFilterSchemas.boolean(
    i18n('entities.serviceReservation.fields.needTransportation'),
  ),
  place: yupFilterSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.place'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.serviceReservation.fields.status'),
  ),
  totalPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.serviceReservation.fields.totalPriceRange'),
  ),
  totalPriceWithDiscountRange: yupFilterSchemas.decimalRange(
    i18n('entities.serviceReservation.fields.totalPriceWithDiscountRange'),
  ),
  discountCode: yupFilterSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.discountCode'),
  ),
  currency: yupFilterSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.currency'),
  ),
  totalPriceTransportartionRange: yupFilterSchemas.decimalRange(
    i18n('entities.serviceReservation.fields.totalPriceTransportartionRange'),
  ),
  ratingFromCustomerRange: yupFilterSchemas.decimalRange(
    i18n('entities.serviceReservation.fields.ratingFromCustomerRange'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.serviceReservation.fields.country'),
  ),
  source: yupFilterSchemas.enumerator(
    i18n('entities.serviceReservation.fields.source'),
  ),
  notes: yupFilterSchemas.string(
    i18n('entities.serviceReservation.fields.notes'),
  ),
  customerQuestions: yupFilterSchemas.string(
    i18n('entities.serviceReservation.fields.customerQuestions'),
  ),
});

const emptyValues = {
  dateRange: [],
  businessId: null,
  customerId: null,
  time: null,
  needTransportation: null,
  place: null,
  status: null,
  totalPriceRange: [],
  totalPriceWithDiscountRange: [],
  discountCode: null,
  currency: null,
  totalPriceTransportartionRange: [],
  ratingFromCustomerRange: [],
  country: null,
  source: null,
  notes: null,
  customerQuestions: null,
}

const previewRenders = {
  dateRange: {
    label: i18n('entities.serviceReservation.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
  businessId: {
      label: i18n('entities.serviceReservation.fields.businessId'),
      render: filterRenders.relationToOne(),
    },
  customerId: {
      label: i18n('entities.serviceReservation.fields.customerId'),
      render: filterRenders.relationToOne(),
    },
  time: {
    label: i18n('entities.serviceReservation.fields.time'),
    render: filterRenders.enumerator('entities.serviceReservation.enumerators.time',),
  },
  needTransportation: {
    label: i18n('entities.serviceReservation.fields.needTransportation'),
    render: filterRenders.boolean(),
  },
  place: {
      label: i18n('entities.serviceReservation.fields.place'),
      render: filterRenders.relationToOne(),
    },
  status: {
    label: i18n('entities.serviceReservation.fields.status'),
    render: filterRenders.enumerator('entities.serviceReservation.enumerators.status',),
  },
  totalPriceRange: {
    label: i18n('entities.serviceReservation.fields.totalPriceRange'),
    render: filterRenders.decimalRange(),
  },
  totalPriceWithDiscountRange: {
    label: i18n('entities.serviceReservation.fields.totalPriceWithDiscountRange'),
    render: filterRenders.decimalRange(),
  },
  discountCode: {
      label: i18n('entities.serviceReservation.fields.discountCode'),
      render: filterRenders.relationToOne(),
    },
  currency: {
      label: i18n('entities.serviceReservation.fields.currency'),
      render: filterRenders.relationToOne(),
    },
  totalPriceTransportartionRange: {
    label: i18n('entities.serviceReservation.fields.totalPriceTransportartionRange'),
    render: filterRenders.decimalRange(),
  },
  ratingFromCustomerRange: {
    label: i18n('entities.serviceReservation.fields.ratingFromCustomerRange'),
    render: filterRenders.decimalRange(),
  },
  country: {
      label: i18n('entities.serviceReservation.fields.country'),
      render: filterRenders.relationToOne(),
    },
  source: {
    label: i18n('entities.serviceReservation.fields.source'),
    render: filterRenders.enumerator('entities.serviceReservation.enumerators.source',),
  },
  notes: {
    label: i18n('entities.serviceReservation.fields.notes'),
    render: filterRenders.generic(),
  },
  customerQuestions: {
    label: i18n('entities.serviceReservation.fields.customerQuestions'),
    render: filterRenders.generic(),
  },
}

function ServiceReservationListFilter(props) {
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
              <DatePickerRangeFormItem
                name="dateRange"
                label={i18n('entities.serviceReservation.fields.dateRange')}    
              />
              <BusinessAutocompleteFormItem  
                name="businessId"
                label={i18n('entities.serviceReservation.fields.businessId')}        
              />
              <CustomerAutocompleteFormItem  
                name="customerId"
                label={i18n('entities.serviceReservation.fields.customerId')}        
              />
              <SelectFormItem
                  name="time"
                  label={i18n('entities.serviceReservation.fields.time')}
                  options={serviceReservationEnumerators.time.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.serviceReservation.enumerators.time.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                name="needTransportation"
                label={i18n('entities.serviceReservation.fields.needTransportation')}
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
              <PlaceAutocompleteFormItem  
                name="place"
                label={i18n('entities.serviceReservation.fields.place')}        
              />
              <SelectFormItem
                  name="status"
                  label={i18n('entities.serviceReservation.fields.status')}
                  options={serviceReservationEnumerators.status.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.serviceReservation.enumerators.status.${value}`,
                      ),
                    }),
                  )}
                />
              <InputRangeFormItem
                name="totalPriceRange"
                label={i18n('entities.serviceReservation.fields.totalPriceRange')}
              />
              <InputRangeFormItem
                name="totalPriceWithDiscountRange"
                label={i18n('entities.serviceReservation.fields.totalPriceWithDiscountRange')}
              />
              <DiscountsAutocompleteFormItem
                name="discountCode"
                label={i18n('entities.serviceReservation.fields.discountCode')}
              />
              <CurrencyAutocompleteFormItem
                name="currency"
                label={i18n('entities.serviceReservation.fields.currency')}
              />
              <InputRangeFormItem
                name="totalPriceTransportartionRange"
                label={i18n('entities.serviceReservation.fields.totalPriceTransportartionRange')}
              />
              <InputRangeFormItem
                name="ratingFromCustomerRange"
                label={i18n('entities.serviceReservation.fields.ratingFromCustomerRange')}
              />
              <CountryAutocompleteFormItem
                name="country"
                label={i18n('entities.serviceReservation.fields.country')}
              />
              <SelectFormItem
                  name="source"
                  label={i18n('entities.serviceReservation.fields.source')}
                  options={serviceReservationEnumerators.source.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.serviceReservation.enumerators.source.${value}`,
                      ),
                    }),
                  )}
                />
              <InputFormItem
                name="notes"
                label={i18n('entities.serviceReservation.fields.notes')}
              />
              <InputFormItem
                name="customerQuestions"
                label={i18n('entities.serviceReservation.fields.customerQuestions')}
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

export default ServiceReservationListFilter;