import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/answers/list/answersListActions';
import selectors from 'src/modules/answers/list/answersListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import answersEnumerators from 'src/modules/answers/answersEnumerators';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';

const schema = yup.object().shape({
  answer: yupFilterSchemas.string(
    i18n('entities.answers.fields.answer'),
  ),
  userID: yupFilterSchemas.relationToOne(
    i18n('entities.answers.fields.userID'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.answers.fields.type'),
  ),
  isActive: yupFilterSchemas.boolean(
    i18n('entities.answers.fields.isActive'),
  ),
  language: yupFilterSchemas.relationToOne(
    i18n('entities.answers.fields.language'),
  ),
});

const emptyValues = {
  answer: null,
  userID: null,
  type: null,
  isActive: null,
  language: null,
}

const previewRenders = {
  answer: {
    label: i18n('entities.answers.fields.answer'),
    render: filterRenders.generic(),
  },
  userID: {
    label: i18n('entities.answers.fields.userID'),
    render: filterRenders.relationToOne(),
  },
  type: {
    label: i18n('entities.answers.fields.type'),
    render: filterRenders.enumerator('entities.answers.enumerators.type',),
  },
  isActive: {
    label: i18n('entities.answers.fields.isActive'),
    render: filterRenders.boolean(),
  },
  language: {
      label: i18n('entities.answers.fields.language'),
      render: filterRenders.relationToOne(),
    },
}

function AnswersListFilter(props) {
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
                name="answer"
                label={i18n('entities.answers.fields.answer')}      
              />
              <UserAutocompleteFormItem  
                name="userID"
                label={i18n('entities.answers.fields.userID')}        
              />
              <SelectFormItem
                  name="type"
                  label={i18n('entities.answers.fields.type')}
                  options={answersEnumerators.type.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.answers.enumerators.type.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                name="isActive"
                label={i18n('entities.answers.fields.isActive')}
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
              <LanguagesAutocompleteFormItem  
                name="language"
                label={i18n('entities.answers.fields.language')}        
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

export default AnswersListFilter;