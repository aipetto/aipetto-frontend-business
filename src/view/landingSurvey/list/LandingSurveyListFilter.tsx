import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/landingSurvey/list/landingSurveyListActions';
import selectors from 'src/modules/landingSurvey/list/landingSurveyListSelectors';
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
import landingSurveyEnumerators from 'src/modules/landingSurvey/landingSurveyEnumerators';
import CountryAutocompleteFormItem from 'src/view/country/autocomplete/CountryAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.landingSurvey.fields.name'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.landingSurvey.fields.email'),
  ),
  numberOfPets: yupFilterSchemas.string(
    i18n('entities.landingSurvey.fields.numberOfPets'),
  ),
  interests: yupFilterSchemas.stringArray(
    i18n('entities.landingSurvey.fields.interests'),
  ),
  extraInfo: yupFilterSchemas.string(
    i18n('entities.landingSurvey.fields.extraInfo'),
  ),
  allowReceiveNotifications: yupFilterSchemas.boolean(
    i18n('entities.landingSurvey.fields.allowReceiveNotifications'),
  ),
  latitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.landingSurvey.fields.latitudeRange'),
  ),
  longitudeRange: yupFilterSchemas.decimalRange(
    i18n('entities.landingSurvey.fields.longitudeRange'),
  ),
  petProfession: yupFilterSchemas.stringArray(
    i18n('entities.landingSurvey.fields.petProfession'),
  ),
  address: yupFilterSchemas.string(
    i18n('entities.landingSurvey.fields.address'),
  ),
  country: yupFilterSchemas.relationToOne(
    i18n('entities.landingSurvey.fields.country'),
  ),
});

const emptyValues = {
  name: null,
  email: null,
  numberOfPets: null,
  interests: [],
  extraInfo: null,
  allowReceiveNotifications: null,
  latitudeRange: [],
  longitudeRange: [],
  petProfession: [],
  address: null,
  country: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.landingSurvey.fields.name'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.landingSurvey.fields.email'),
    render: filterRenders.generic(),
  },
  numberOfPets: {
    label: i18n('entities.landingSurvey.fields.numberOfPets'),
    render: filterRenders.generic(),
  },
  interests: {
    label: i18n('entities.landingSurvey.fields.interests'),
    render: filterRenders.enumeratorMultiple('entities.landingSurvey.enumerators.interests',),
  },
  extraInfo: {
    label: i18n('entities.landingSurvey.fields.extraInfo'),
    render: filterRenders.generic(),
  },
  allowReceiveNotifications: {
    label: i18n('entities.landingSurvey.fields.allowReceiveNotifications'),
    render: filterRenders.boolean(),
  },
  petProfession: {
    label: i18n('entities.landingSurvey.fields.petProfession'),
    render: filterRenders.enumeratorMultiple('entities.landingSurvey.enumerators.petProfession',),
  },
  address: {
    label: i18n('entities.landingSurvey.fields.address'),
    render: filterRenders.generic(),
  },
  country: {
      label: i18n('entities.landingSurvey.fields.country'),
      render: filterRenders.relationToOne(),
    },
}

function LandingSurveyListFilter(props) {
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
                label={i18n('entities.landingSurvey.fields.name')}      
              />
              <InputFormItem
                name="email"
                label={i18n('entities.landingSurvey.fields.email')}      
              />
              <InputFormItem
                name="numberOfPets"
                label={i18n('entities.landingSurvey.fields.numberOfPets')}      
              />
              <SelectFormItem
                name="interests"
                label={i18n('entities.landingSurvey.fields.interests')}
                options={landingSurveyEnumerators.interests.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.landingSurvey.enumerators.interests.${value}`,
                    ),
                  }),
                )}
                mode="multiple"
              />
              <InputFormItem
                name="extraInfo"
                label={i18n('entities.landingSurvey.fields.extraInfo')}      
              />
              <SelectFormItem
                name="allowReceiveNotifications"
                label={i18n('entities.landingSurvey.fields.allowReceiveNotifications')}
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
              <InputRangeFormItem
                name="latitudeRange"
                label={i18n('entities.landingSurvey.fields.latitudeRange')}
              />
              <InputRangeFormItem
                name="longitudeRange"
                label={i18n('entities.landingSurvey.fields.longitudeRange')}
              />
              <SelectFormItem
                name="petProfession"
                label={i18n('entities.landingSurvey.fields.petProfession')}
                options={landingSurveyEnumerators.petProfession.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.landingSurvey.enumerators.petProfession.${value}`,
                    ),
                  }),
                )}
                mode="multiple"
              />
              <InputFormItem
                name="address"
                label={i18n('entities.landingSurvey.fields.address')}
              />
              <CountryAutocompleteFormItem
                name="country"
                label={i18n('entities.landingSurvey.fields.country')}
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

export default LandingSurveyListFilter;