import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessPaymentCycle/list/businessPaymentCycleListActions';
import selectors from 'src/modules/businessPaymentCycle/list/businessPaymentCycleListSelectors';
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
import businessPaymentCycleEnumerators from 'src/modules/businessPaymentCycle/businessPaymentCycleEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import BusinessAutocompleteFormItem from 'src/view/business/autocomplete/BusinessAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';
import CurrencyAutocompleteFormItem from 'src/view/currency/autocomplete/CurrencyAutocompleteFormItem';

const schema = yup.object().shape({
  businessID: yupFilterSchemas.relationToOne(
    i18n('entities.businessPaymentCycle.fields.businessID'),
  ),
  cycleStartRange: yupFilterSchemas.dateRange(
    i18n('entities.businessPaymentCycle.fields.cycleStartRange'),
  ),
  cycleEndRange: yupFilterSchemas.dateRange(
    i18n('entities.businessPaymentCycle.fields.cycleEndRange'),
  ),
  statusPayment: yupFilterSchemas.enumerator(
    i18n('entities.businessPaymentCycle.fields.statusPayment'),
  ),
  totalBusinessServiceReservationPeriodRange: yupFilterSchemas.decimalRange(
    i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriodRange'),
  ),
  totalCommisionCalculatedRange: yupFilterSchemas.decimalRange(
    i18n('entities.businessPaymentCycle.fields.totalCommisionCalculatedRange'),
  ),
  commisionRateUsedOnCalculationRange: yupFilterSchemas.decimalRange(
    i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculationRange'),
  ),
  statusCyclePayment: yupFilterSchemas.enumerator(
    i18n('entities.businessPaymentCycle.fields.statusCyclePayment'),
  ),
  customerID: yupFilterSchemas.relationToOne(
    i18n('entities.businessPaymentCycle.fields.customerID'),
  ),
  paymentMethod: yupFilterSchemas.enumerator(
    i18n('entities.businessPaymentCycle.fields.paymentMethod'),
  ),
  paymentGatewayReferenceCode: yupFilterSchemas.string(
    i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode'),
  ),
  paymentGatewayType: yupFilterSchemas.enumerator(
    i18n('entities.businessPaymentCycle.fields.paymentGatewayType'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.businessPaymentCycle.fields.country'),
  ),
  currency: yupFilterSchemas.relationToOne(
    i18n('entities.businessPaymentCycle.fields.currency'),
  ),
});

const emptyValues = {
  businessID: null,
  cycleStartRange: [],
  cycleEndRange: [],
  statusPayment: null,
  totalBusinessServiceReservationPeriodRange: [],
  totalCommisionCalculatedRange: [],
  commisionRateUsedOnCalculationRange: [],
  statusCyclePayment: null,
  customerID: null,
  paymentMethod: null,
  paymentGatewayReferenceCode: null,
  paymentGatewayType: null,
  country: null,
  currency: null,
}

const previewRenders = {
  businessID: {
      label: i18n('entities.businessPaymentCycle.fields.businessID'),
      render: filterRenders.relationToOne(),
    },
  cycleStartRange: {
    label: i18n('entities.businessPaymentCycle.fields.cycleStartRange'),
    render: filterRenders.dateRange(),
  },
  cycleEndRange: {
    label: i18n('entities.businessPaymentCycle.fields.cycleEndRange'),
    render: filterRenders.dateRange(),
  },
  statusPayment: {
    label: i18n('entities.businessPaymentCycle.fields.statusPayment'),
    render: filterRenders.enumerator('entities.businessPaymentCycle.enumerators.statusPayment',),
  },
  totalBusinessServiceReservationPeriodRange: {
    label: i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriodRange'),
    render: filterRenders.decimalRange(),
  },
  totalCommisionCalculatedRange: {
    label: i18n('entities.businessPaymentCycle.fields.totalCommisionCalculatedRange'),
    render: filterRenders.decimalRange(),
  },
  commisionRateUsedOnCalculationRange: {
    label: i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculationRange'),
    render: filterRenders.decimalRange(),
  },
  statusCyclePayment: {
    label: i18n('entities.businessPaymentCycle.fields.statusCyclePayment'),
    render: filterRenders.enumerator('entities.businessPaymentCycle.enumerators.statusCyclePayment',),
  },
  customerID: {
      label: i18n('entities.businessPaymentCycle.fields.customerID'),
      render: filterRenders.relationToOne(),
    },
  paymentMethod: {
    label: i18n('entities.businessPaymentCycle.fields.paymentMethod'),
    render: filterRenders.enumerator('entities.businessPaymentCycle.enumerators.paymentMethod',),
  },
  paymentGatewayReferenceCode: {
    label: i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode'),
    render: filterRenders.generic(),
  },
  paymentGatewayType: {
    label: i18n('entities.businessPaymentCycle.fields.paymentGatewayType'),
    render: filterRenders.enumerator('entities.businessPaymentCycle.enumerators.paymentGatewayType',),
  },
  country: {
      label: i18n('entities.businessPaymentCycle.fields.country'),
      render: filterRenders.relationToOne(),
    },
  currency: {
      label: i18n('entities.businessPaymentCycle.fields.currency'),
      render: filterRenders.relationToOne(),
    },
}

function BusinessPaymentCycleListFilter(props) {
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
                name="businessID"
                label={i18n('entities.businessPaymentCycle.fields.businessID')}        
              />
              <DatePickerRangeFormItem
                name="cycleStartRange"
                label={i18n('entities.businessPaymentCycle.fields.cycleStartRange')}    
              />
              <DatePickerRangeFormItem
                name="cycleEndRange"
                label={i18n('entities.businessPaymentCycle.fields.cycleEndRange')}    
              />
              <SelectFormItem
                  name="statusPayment"
                  label={i18n('entities.businessPaymentCycle.fields.statusPayment')}
                  options={businessPaymentCycleEnumerators.statusPayment.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.businessPaymentCycle.enumerators.statusPayment.${value}`,
                      ),
                    }),
                  )}
                />
              <InputRangeFormItem
                name="totalBusinessServiceReservationPeriodRange"
                label={i18n('entities.businessPaymentCycle.fields.totalBusinessServiceReservationPeriodRange')}      
              />
              <InputRangeFormItem
                name="totalCommisionCalculatedRange"
                label={i18n('entities.businessPaymentCycle.fields.totalCommisionCalculatedRange')}      
              />
              <InputRangeFormItem
                name="commisionRateUsedOnCalculationRange"
                label={i18n('entities.businessPaymentCycle.fields.commisionRateUsedOnCalculationRange')}      
              />
              <SelectFormItem
                  name="statusCyclePayment"
                  label={i18n('entities.businessPaymentCycle.fields.statusCyclePayment')}
                  options={businessPaymentCycleEnumerators.statusCyclePayment.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.businessPaymentCycle.enumerators.statusCyclePayment.${value}`,
                      ),
                    }),
                  )}
                />
              <CustomerAutocompleteFormItem  
                name="customerID"
                label={i18n('entities.businessPaymentCycle.fields.customerID')}        
              />
              <SelectFormItem
                  name="paymentMethod"
                  label={i18n('entities.businessPaymentCycle.fields.paymentMethod')}
                  options={businessPaymentCycleEnumerators.paymentMethod.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.businessPaymentCycle.enumerators.paymentMethod.${value}`,
                      ),
                    }),
                  )}
                />
              <InputFormItem
                name="paymentGatewayReferenceCode"
                label={i18n('entities.businessPaymentCycle.fields.paymentGatewayReferenceCode')}      
              />
              <SelectFormItem
                  name="paymentGatewayType"
                  label={i18n('entities.businessPaymentCycle.fields.paymentGatewayType')}
                  options={businessPaymentCycleEnumerators.paymentGatewayType.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.businessPaymentCycle.enumerators.paymentGatewayType.${value}`,
                      ),
                    }),
                  )}
                />
              <CountryAutocompleteFormItem  
                name="country"
                label={i18n('entities.businessPaymentCycle.fields.country')}        
              />
              <CurrencyAutocompleteFormItem  
                name="currency"
                label={i18n('entities.businessPaymentCycle.fields.currency')}        
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

export default BusinessPaymentCycleListFilter;