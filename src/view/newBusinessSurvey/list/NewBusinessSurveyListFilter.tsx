import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/newBusinessSurvey/list/newBusinessSurveyListActions';
import selectors from 'src/modules/newBusinessSurvey/list/newBusinessSurveyListSelectors';
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
import newBusinessSurveyEnumerators from 'src/modules/newBusinessSurvey/newBusinessSurveyEnumerators';

const schema = yup.object().shape({
  nameBusiness: yupFilterSchemas.string(
    i18n('entities.newBusinessSurvey.fields.nameBusiness'),
  ),
  numberOfEmployees: yupFilterSchemas.string(
    i18n('entities.newBusinessSurvey.fields.numberOfEmployees'),
  ),
  contactName: yupFilterSchemas.string(
    i18n('entities.newBusinessSurvey.fields.contactName'),
  ),
  contactEmail: yupFilterSchemas.string(
    i18n('entities.newBusinessSurvey.fields.contactEmail'),
  ),
  contactPhone: yupFilterSchemas.string(
    i18n('entities.newBusinessSurvey.fields.contactPhone'),
  ),
  cellphoneForSMS: yupFilterSchemas.string(
    i18n('entities.newBusinessSurvey.fields.cellphoneForSMS'),
  ),
  digitalNetworks: yupFilterSchemas.string(
    i18n('entities.newBusinessSurvey.fields.digitalNetworks'),
  ),
  allowReceiveNotifications: yupFilterSchemas.boolean(
    i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications'),
  ),
  services: yupFilterSchemas.stringArray(
    i18n('entities.newBusinessSurvey.fields.services'),
  ),
  address: yupFilterSchemas.string(
    i18n('entities.newBusinessSurvey.fields.address'),
  ),
  latitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.newBusinessSurvey.fields.latitudeRange'),
  ),
  longitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.newBusinessSurvey.fields.longitudeRange'),
  ),
});

const emptyValues = {
  nameBusiness: null,
  numberOfEmployees: null,
  contactName: null,
  contactEmail: null,
  contactPhone: null,
  cellphoneForSMS: null,
  digitalNetworks: null,
  allowReceiveNotifications: null,
  services: [],
  address: null,
  latitudeRange: [],
  longitudeRange: [],
}

const previewRenders = {
  nameBusiness: {
    label: i18n('entities.newBusinessSurvey.fields.nameBusiness'),
    render: filterRenders.generic(),
  },
  numberOfEmployees: {
    label: i18n('entities.newBusinessSurvey.fields.numberOfEmployees'),
    render: filterRenders.generic(),
  },
  contactName: {
    label: i18n('entities.newBusinessSurvey.fields.contactName'),
    render: filterRenders.generic(),
  },
  contactEmail: {
    label: i18n('entities.newBusinessSurvey.fields.contactEmail'),
    render: filterRenders.generic(),
  },
  contactPhone: {
    label: i18n('entities.newBusinessSurvey.fields.contactPhone'),
    render: filterRenders.generic(),
  },
  cellphoneForSMS: {
    label: i18n('entities.newBusinessSurvey.fields.cellphoneForSMS'),
    render: filterRenders.generic(),
  },
  digitalNetworks: {
    label: i18n('entities.newBusinessSurvey.fields.digitalNetworks'),
    render: filterRenders.generic(),
  },
  allowReceiveNotifications: {
    label: i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications'),
    render: filterRenders.boolean(),
  },
  services: {
    label: i18n('entities.newBusinessSurvey.fields.services'),
    render: filterRenders.enumeratorMultiple('entities.newBusinessSurvey.enumerators.services',),
  },
  address: {
    label: i18n('entities.newBusinessSurvey.fields.address'),
    render: filterRenders.generic(),
  },
  latitudeRange: {
    label: i18n('entities.newBusinessSurvey.fields.latitudeRange'),
    render: filterRenders.decimalRange(),
  },
  longitudeRange: {
    label: i18n('entities.newBusinessSurvey.fields.longitudeRange'),
    render: filterRenders.decimalRange(),
  },
}

function NewBusinessSurveyListFilter(props) {
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
                name="nameBusiness"
                label={i18n('entities.newBusinessSurvey.fields.nameBusiness')}      
              />
              <InputFormItem
                name="numberOfEmployees"
                label={i18n('entities.newBusinessSurvey.fields.numberOfEmployees')}
              />
              <InputFormItem
                name="contactName"
                label={i18n('entities.newBusinessSurvey.fields.contactName')}      
              />
              <InputFormItem
                name="contactEmail"
                label={i18n('entities.newBusinessSurvey.fields.contactEmail')}      
              />
              <InputFormItem
                name="contactPhone"
                label={i18n('entities.newBusinessSurvey.fields.contactPhone')}      
              />
              <InputFormItem
                name="cellphoneForSMS"
                label={i18n('entities.newBusinessSurvey.fields.cellphoneForSMS')}      
              />
              <InputFormItem
                name="digitalNetworks"
                label={i18n('entities.newBusinessSurvey.fields.digitalNetworks')}      
              />
              <SelectFormItem
                name="allowReceiveNotifications"
                label={i18n('entities.newBusinessSurvey.fields.allowReceiveNotifications')}
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
              <SelectFormItem
                name="services"
                label={i18n('entities.newBusinessSurvey.fields.services')}
                options={newBusinessSurveyEnumerators.services.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.newBusinessSurvey.enumerators.services.${value}`,
                    ),
                  }),
                )}
                mode="multiple"
              />
              <InputFormItem
                name="address"
                label={i18n('entities.newBusinessSurvey.fields.address')}
              />
              <InputRangeFormItem
                name="latitudeRange"
                label={i18n('entities.newBusinessSurvey.fields.latitudeRange')}
              />
              <InputRangeFormItem
                name="longitudeRange"
                label={i18n('entities.newBusinessSurvey.fields.longitudeRange')}
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

export default NewBusinessSurveyListFilter;