import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/breed/list/breedListActions';
import selectors from 'src/modules/breed/list/breedListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import breedEnumerators from 'src/modules/breed/breedEnumerators';
import PetTypesAutocompleteFormItem from 'src/view/petTypes/autocomplete/PetTypesAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.breed.fields.name'),
  ),
  type: yupFilterSchemas.relationToOne(
    i18n('entities.breed.fields.type'),
  ),
  size: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.size'),
  ),
  exercise: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.exercise'),
  ),
  sizeOfHome: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.sizeOfHome'),
  ),
  grooming: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.grooming'),
  ),
  coatLength: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.coatLength'),
  ),
  sheds: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.sheds'),
  ),
  lifespan: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.lifespan'),
  ),
  vulnerableNativeBreed: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.vulnerableNativeBreed'),
  ),
  townOrCountry: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.townOrCountry'),
  ),
  sizeOfGarden: yupFilterSchemas.enumerator(
    i18n('entities.breed.fields.sizeOfGarden'),
  ),
});

const emptyValues = {
  name: null,
  type: null,
  size: null,
  exercise: null,
  sizeOfHome: null,
  grooming: null,
  coatLength: null,
  sheds: null,
  lifespan: null,
  vulnerableNativeBreed: null,
  townOrCountry: null,
  sizeOfGarden: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.breed.fields.name'),
    render: filterRenders.generic(),
  },
  type: {
      label: i18n('entities.breed.fields.type'),
      render: filterRenders.relationToOne(),
    },
  size: {
    label: i18n('entities.breed.fields.size'),
    render: filterRenders.enumerator('entities.breed.enumerators.size',),
  },
  exercise: {
    label: i18n('entities.breed.fields.exercise'),
    render: filterRenders.enumerator('entities.breed.enumerators.exercise',),
  },
  sizeOfHome: {
    label: i18n('entities.breed.fields.sizeOfHome'),
    render: filterRenders.enumerator('entities.breed.enumerators.sizeOfHome',),
  },
  grooming: {
    label: i18n('entities.breed.fields.grooming'),
    render: filterRenders.enumerator('entities.breed.enumerators.grooming',),
  },
  coatLength: {
    label: i18n('entities.breed.fields.coatLength'),
    render: filterRenders.enumerator('entities.breed.enumerators.coatLength',),
  },
  sheds: {
    label: i18n('entities.breed.fields.sheds'),
    render: filterRenders.enumerator('entities.breed.enumerators.sheds',),
  },
  lifespan: {
    label: i18n('entities.breed.fields.lifespan'),
    render: filterRenders.enumerator('entities.breed.enumerators.lifespan',),
  },
  vulnerableNativeBreed: {
    label: i18n('entities.breed.fields.vulnerableNativeBreed'),
    render: filterRenders.enumerator('entities.breed.enumerators.vulnerableNativeBreed',),
  },
  townOrCountry: {
    label: i18n('entities.breed.fields.townOrCountry'),
    render: filterRenders.enumerator('entities.breed.enumerators.townOrCountry',),
  },
  sizeOfGarden: {
    label: i18n('entities.breed.fields.sizeOfGarden'),
    render: filterRenders.enumerator('entities.breed.enumerators.sizeOfGarden',),
  },
}

function BreedListFilter(props) {
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
                label={i18n('entities.breed.fields.name')}      
              />
              <PetTypesAutocompleteFormItem  
                name="type"
                label={i18n('entities.breed.fields.type')}        
              />
              <SelectFormItem
                  name="size"
                  label={i18n('entities.breed.fields.size')}
                  options={breedEnumerators.size.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.size.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="exercise"
                  label={i18n('entities.breed.fields.exercise')}
                  options={breedEnumerators.exercise.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.exercise.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="sizeOfHome"
                  label={i18n('entities.breed.fields.sizeOfHome')}
                  options={breedEnumerators.sizeOfHome.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.sizeOfHome.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="grooming"
                  label={i18n('entities.breed.fields.grooming')}
                  options={breedEnumerators.grooming.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.grooming.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="coatLength"
                  label={i18n('entities.breed.fields.coatLength')}
                  options={breedEnumerators.coatLength.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.coatLength.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="sheds"
                  label={i18n('entities.breed.fields.sheds')}
                  options={breedEnumerators.sheds.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.sheds.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="lifespan"
                  label={i18n('entities.breed.fields.lifespan')}
                  options={breedEnumerators.lifespan.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.lifespan.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="vulnerableNativeBreed"
                  label={i18n('entities.breed.fields.vulnerableNativeBreed')}
                  options={breedEnumerators.vulnerableNativeBreed.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.vulnerableNativeBreed.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="townOrCountry"
                  label={i18n('entities.breed.fields.townOrCountry')}
                  options={breedEnumerators.townOrCountry.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.townOrCountry.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="sizeOfGarden"
                  label={i18n('entities.breed.fields.sizeOfGarden')}
                  options={breedEnumerators.sizeOfGarden.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.breed.enumerators.sizeOfGarden.${value}`,
                      ),
                    }),
                  )}
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

export default BreedListFilter;