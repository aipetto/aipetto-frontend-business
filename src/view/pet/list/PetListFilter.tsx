import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/pet/list/petListActions';
import selectors from 'src/modules/pet/list/petListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import petEnumerators from 'src/modules/pet/petEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import BreedAutocompleteFormItem from 'src/view/breed/autocomplete/BreedAutocompleteFormItem';
import PetTypesAutocompleteFormItem from 'src/view/petTypes/autocomplete/PetTypesAutocompleteFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.pet.fields.name'),
  ),
  nickname: yupFilterSchemas.string(
    i18n('entities.pet.fields.nickname'),
  ),
  birthdateRange: yupFilterSchemas.dateRange(
    i18n('entities.pet.fields.birthdateRange'),
  ),
  ageRange: yupFilterSchemas.integerRange(
    i18n('entities.pet.fields.ageRange'),
  ),
  color: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.color'),
  ),
  sex: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.sex'),
  ),
  breed: yupFilterSchemas.relationToOne(
    i18n('entities.pet.fields.breed'),
  ),
  type: yupFilterSchemas.relationToOne(
    i18n('entities.pet.fields.type'),
  ),
  customerId: yupFilterSchemas.relationToOne(
    i18n('entities.pet.fields.customerId'),
  ),
});

const emptyValues = {
  name: null,
  nickname: null,
  birthdateRange: [],
  ageRange: [],
  color: null,
  sex: null,
  breed: null,
  type: null,
  customerId: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.pet.fields.name'),
    render: filterRenders.generic(),
  },
  nickname: {
    label: i18n('entities.pet.fields.nickname'),
    render: filterRenders.generic(),
  },
  birthdateRange: {
    label: i18n('entities.pet.fields.birthdateRange'),
    render: filterRenders.dateRange(),
  },
  ageRange: {
    label: i18n('entities.pet.fields.ageRange'),
    render: filterRenders.range(),
  },
  color: {
    label: i18n('entities.pet.fields.color'),
    render: filterRenders.enumerator('entities.pet.enumerators.color',),
  },
  sex: {
    label: i18n('entities.pet.fields.sex'),
    render: filterRenders.enumerator('entities.pet.enumerators.sex',),
  },
  breed: {
      label: i18n('entities.pet.fields.breed'),
      render: filterRenders.relationToOne(),
    },
  type: {
      label: i18n('entities.pet.fields.type'),
      render: filterRenders.relationToOne(),
    },
  customerId: {
      label: i18n('entities.pet.fields.customerId'),
      render: filterRenders.relationToOne(),
    },
}

function PetListFilter(props) {
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
                label={i18n('entities.pet.fields.name')}      
              />
              <InputFormItem
                name="nickname"
                label={i18n('entities.pet.fields.nickname')}      
              />
              <DatePickerRangeFormItem
                name="birthdateRange"
                label={i18n('entities.pet.fields.birthdateRange')}    
              />
              <InputNumberRangeFormItem
                name="ageRange"
                label={i18n('entities.pet.fields.ageRange')}      
              />
              <SelectFormItem
                  name="color"
                  label={i18n('entities.pet.fields.color')}
                  options={petEnumerators.color.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.pet.enumerators.color.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="sex"
                  label={i18n('entities.pet.fields.sex')}
                  options={petEnumerators.sex.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.pet.enumerators.sex.${value}`,
                      ),
                    }),
                  )}
                />
              <BreedAutocompleteFormItem  
                name="breed"
                label={i18n('entities.pet.fields.breed')}        
              />
              <PetTypesAutocompleteFormItem  
                name="type"
                label={i18n('entities.pet.fields.type')}        
              />
              <CustomerAutocompleteFormItem
                name="customerId"
                label={i18n('entities.pet.fields.customerId')}
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

export default PetListFilter;