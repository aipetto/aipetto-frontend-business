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
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import PostCategoriesAutocompleteFormItem from 'src/view/postCategories/autocomplete/PostCategoriesAutocompleteFormItem';
import PostCommentsAutocompleteFormItem from 'src/view/postComments/autocomplete/PostCommentsAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.posts.fields.title'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.posts.fields.description'),
    {},
  ),
  postHeaderImage: yupFormSchemas.images(
    i18n('entities.posts.fields.postHeaderImage'),
    {},
  ),
  postDocRelated: yupFormSchemas.files(
    i18n('entities.posts.fields.postDocRelated'),
    {},
  ),
  postUrl: yupFormSchemas.string(
    i18n('entities.posts.fields.postUrl'),
    {},
  ),
  authors: yupFormSchemas.relationToMany(
    i18n('entities.posts.fields.authors'),
    {},
  ),
  postCategory: yupFormSchemas.relationToMany(
    i18n('entities.posts.fields.postCategory'),
    {},
  ),
  comments: yupFormSchemas.relationToMany(
    i18n('entities.posts.fields.comments'),
    {},
  ),
});

function PostsForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      description: record.description,
      postHeaderImage: record.postHeaderImage || [],
      postDocRelated: record.postDocRelated || [],
      postUrl: record.postUrl,
      authors: record.authors || [],
      postCategory: record.postCategory || [],
      comments: record.comments || [],
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
          <InputFormItem
            name="title"
            label={i18n('entities.posts.fields.title')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="description"
            label={i18n('entities.posts.fields.description')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="postHeaderImage"
            label={i18n('entities.posts.fields.postHeaderImage')}
            required={false}
            storage={Storage.values.postsPostHeaderImage}
            max={undefined}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="postDocRelated"
            label={i18n('entities.posts.fields.postDocRelated')}
            required={false}
            storage={Storage.values.postsPostDocRelated}
            max={undefined}
            formats={undefined}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="postUrl"
            label={i18n('entities.posts.fields.postUrl')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem  
            name="authors"
            label={i18n('entities.posts.fields.authors')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PostCategoriesAutocompleteFormItem  
            name="postCategory"
            label={i18n('entities.posts.fields.postCategory')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <PostCommentsAutocompleteFormItem  
            name="comments"
            label={i18n('entities.posts.fields.comments')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
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

export default PostsForm;
