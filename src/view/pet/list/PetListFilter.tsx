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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
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
  secondColor: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.secondColor'),
  ),
  thirdColor: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.thirdColor'),
  ),
  sex: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.sex'),
  ),
  breed: yupFilterSchemas.relationToOne(
    i18n('entities.pet.fields.breed'),
  ),
  secondBreedMixed: yupFilterSchemas.relationToOne(
    i18n('entities.pet.fields.secondBreedMixed'),
  ),
  type: yupFilterSchemas.relationToOne(
    i18n('entities.pet.fields.type'),
  ),
  customerId: yupFilterSchemas.relationToOne(
    i18n('entities.pet.fields.customerId'),
  ),
  maturitySize: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.maturitySize'),
  ),
  furLength: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.furLength'),
  ),
  hasBeenVaccinated: yupFilterSchemas.boolean(
    i18n('entities.pet.fields.hasBeenVaccinated'),
  ),
  hasBeenDewormed: yupFilterSchemas.boolean(
    i18n('entities.pet.fields.hasBeenDewormed'),
  ),
  hasBeenSterilizedSpayed: yupFilterSchemas.boolean(
    i18n('entities.pet.fields.hasBeenSterilizedSpayed'),
  ),
  health: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.health'),
  ),
  isLost: yupFilterSchemas.boolean(
    i18n('entities.pet.fields.isLost'),
  ),
  isLookingForMatch: yupFilterSchemas.boolean(
    i18n('entities.pet.fields.isLookingForMatch'),
  ),
  isGuideDog: yupFilterSchemas.boolean(
    i18n('entities.pet.fields.isGuideDog'),
  ),
  numberOfLikesRange: yupFilterSchemas.integerRange(
    i18n('entities.pet.fields.numberOfLikesRange'),
  ),
  governmentUniqueID: yupFilterSchemas.string(
    i18n('entities.pet.fields.governmentUniqueID'),
  ),
  bloodType: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.bloodType'),
  ),
  hasMicrochip: yupFilterSchemas.boolean(
    i18n('entities.pet.fields.hasMicrochip'),
  ),
  weightRange: yupFilterSchemas.decimalRange(
    i18n('entities.pet.fields.weightRange'),
  ),
  weightUnit: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.weightUnit'),
  ),
  heightRange: yupFilterSchemas.decimalRange(
    i18n('entities.pet.fields.heightRange'),
  ),
  heightUnit: yupFilterSchemas.enumerator(
    i18n('entities.pet.fields.heightUnit'),
  ),
});

const emptyValues = {
  name: null,
  nickname: null,
  birthdateRange: [],
  ageRange: [],
  color: null,
  secondColor: null,
  thirdColor: null,
  sex: null,
  breed: null,
  secondBreedMixed: null,
  type: null,
  customerId: null,
  maturitySize: null,
  furLength: null,
  hasBeenVaccinated: null,
  hasBeenDewormed: null,
  hasBeenSterilizedSpayed: null,
  health: null,
  isLost: null,
  isLookingForMatch: null,
  isGuideDog: null,
  numberOfLikesRange: [],
  governmentUniqueID: null,
  bloodType: null,
  hasMicrochip: null,
  weightRange: [],
  weightUnit: null,
  heightRange: [],
  heightUnit: null,
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
  secondColor: {
    label: i18n('entities.pet.fields.secondColor'),
    render: filterRenders.enumerator('entities.pet.enumerators.secondColor',),
  },
  thirdColor: {
    label: i18n('entities.pet.fields.thirdColor'),
    render: filterRenders.enumerator('entities.pet.enumerators.thirdColor',),
  },
  sex: {
    label: i18n('entities.pet.fields.sex'),
    render: filterRenders.enumerator('entities.pet.enumerators.sex',),
  },
  breed: {
      label: i18n('entities.pet.fields.breed'),
      render: filterRenders.relationToOne(),
    },
  secondBreedMixed: {
      label: i18n('entities.pet.fields.secondBreedMixed'),
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
  maturitySize: {
    label: i18n('entities.pet.fields.maturitySize'),
    render: filterRenders.enumerator('entities.pet.enumerators.maturitySize',),
  },
  furLength: {
    label: i18n('entities.pet.fields.furLength'),
    render: filterRenders.enumerator('entities.pet.enumerators.furLength',),
  },
  hasBeenVaccinated: {
    label: i18n('entities.pet.fields.hasBeenVaccinated'),
    render: filterRenders.boolean(),
  },
  hasBeenDewormed: {
    label: i18n('entities.pet.fields.hasBeenDewormed'),
    render: filterRenders.boolean(),
  },
  hasBeenSterilizedSpayed: {
    label: i18n('entities.pet.fields.hasBeenSterilizedSpayed'),
    render: filterRenders.boolean(),
  },
  health: {
    label: i18n('entities.pet.fields.health'),
    render: filterRenders.enumerator('entities.pet.enumerators.health',),
  },
  isLost: {
    label: i18n('entities.pet.fields.isLost'),
    render: filterRenders.boolean(),
  },
  isLookingForMatch: {
    label: i18n('entities.pet.fields.isLookingForMatch'),
    render: filterRenders.boolean(),
  },
  isGuideDog: {
    label: i18n('entities.pet.fields.isGuideDog'),
    render: filterRenders.boolean(),
  },
  numberOfLikesRange: {
    label: i18n('entities.pet.fields.numberOfLikesRange'),
    render: filterRenders.range(),
  },
  governmentUniqueID: {
    label: i18n('entities.pet.fields.governmentUniqueID'),
    render: filterRenders.generic(),
  },
  bloodType: {
    label: i18n('entities.pet.fields.bloodType'),
    render: filterRenders.enumerator('entities.pet.enumerators.bloodType',),
  },
  hasMicrochip: {
    label: i18n('entities.pet.fields.hasMicrochip'),
    render: filterRenders.boolean(),
  },
  weightRange: {
    label: i18n('entities.pet.fields.weightRange'),
    render: filterRenders.decimalRange(),
  },
  weightUnit: {
    label: i18n('entities.pet.fields.weightUnit'),
    render: filterRenders.enumerator('entities.pet.enumerators.weightUnit',),
  },
  heightRange: {
    label: i18n('entities.pet.fields.heightRange'),
    render: filterRenders.decimalRange(),
  },
  heightUnit: {
    label: i18n('entities.pet.fields.heightUnit'),
    render: filterRenders.enumerator('entities.pet.enumerators.heightUnit',),
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
                  name="secondColor"
                  label={i18n('entities.pet.fields.secondColor')}
                  options={petEnumerators.secondColor.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.pet.enumerators.secondColor.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="thirdColor"
                  label={i18n('entities.pet.fields.thirdColor')}
                  options={petEnumerators.thirdColor.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.pet.enumerators.thirdColor.${value}`,
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
              <BreedAutocompleteFormItem
                name="secondBreedMixed"
                label={i18n('entities.pet.fields.secondBreedMixed')}
              />
              <PetTypesAutocompleteFormItem
                name="type"
                label={i18n('entities.pet.fields.type')}        
              />
              <CustomerAutocompleteFormItem
                name="customerId"
                label={i18n('entities.pet.fields.customerId')}
              />
              <SelectFormItem
                  name="maturitySize"
                  label={i18n('entities.pet.fields.maturitySize')}
                  options={petEnumerators.maturitySize.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.pet.enumerators.maturitySize.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="furLength"
                  label={i18n('entities.pet.fields.furLength')}
                  options={petEnumerators.furLength.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.pet.enumerators.furLength.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                name="hasBeenVaccinated"
                label={i18n('entities.pet.fields.hasBeenVaccinated')}
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
                name="hasBeenDewormed"
                label={i18n('entities.pet.fields.hasBeenDewormed')}
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
                name="hasBeenSterilizedSpayed"
                label={i18n('entities.pet.fields.hasBeenSterilizedSpayed')}
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
                  name="health"
                  label={i18n('entities.pet.fields.health')}
                  options={petEnumerators.health.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.pet.enumerators.health.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                name="isLost"
                label={i18n('entities.pet.fields.isLost')}
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
                name="isLookingForMatch"
                label={i18n('entities.pet.fields.isLookingForMatch')}
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
                name="isGuideDog"
                label={i18n('entities.pet.fields.isGuideDog')}
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
                name="numberOfLikesRange"
                label={i18n('entities.pet.fields.numberOfLikesRange')}
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