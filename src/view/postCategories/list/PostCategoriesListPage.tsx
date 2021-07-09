import React from 'react';
import { i18n } from 'src/i18n';
import PostCategoriesListFilter from 'src/view/postCategories/list/PostCategoriesListFilter';
import PostCategoriesListTable from 'src/view/postCategories/list/PostCategoriesListTable';
import PostCategoriesListToolbar from 'src/view/postCategories/list/PostCategoriesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PostCategoriesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.postCategories.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.postCategories.list.title')}
        </h1>
        <PostCategoriesListToolbar />
        <PostCategoriesListFilter />
        <PostCategoriesListTable />
      </div>
    </>
  );
}

export default PostCategoriesListPage;
