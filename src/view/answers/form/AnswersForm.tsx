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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import answersEnumerators from 'src/modules/answers/answersEnumerators';
import QuestionsAutocompleteFormItem from 'src/view/questions/autocomplete/QuestionsAutocompleteFormItem';
import LanguagesAutocompleteFormItem from 'src/view/languages/autocomplete/LanguagesAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  answer: yupFormSchemas.string(
    i18n('entities.answers.fields.answer'),
    {
      "required": true
    },
  ),
  userID: yupFormSchemas.relationToOne(
    i18n('entities.answers.fields.userID'),
    {},
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.answers.fields.type'),
    {
      "options": answersEnumerators.type
    },
  ),
  isActive: yupFormSchemas.boolean(
    i18n('entities.answers.fields.isActive'),
    {},
  ),
  questionID: yupFormSchemas.relationToMany(
    i18n('entities.answers.fields.questionID'),
    {},
  ),
  language: yupFormSchemas.relationToOne(
    i18n('entities.answers.fields.language'),
    {},
  ),
});

function AnswersForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      answer: record.answer,
      userID: record.userID,
      type: record.type,
      isActive: record.isActive,
      questionID: record.questionID || [],
      language: record.language,
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
          <TextAreaFormItem
            name="answer"
            label={i18n('entities.answers.fields.answer')}  
            required={true}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem  
            name="userID"
            label={i18n('entities.answers.fields.userID')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
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
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="isActive"
            label={i18n('entities.answers.fields.isActive')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <QuestionsAutocompleteFormItem  
            name="questionID"
            label={i18n('entities.answers.fields.questionID')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <LanguagesAutocompleteFormItem  
            name="language"
            label={i18n('entities.answers.fields.language')}
            required={false}
            showCreate={!props.modal}
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

export default AnswersForm;
