import React from 'react';
import { i18n } from 'src/i18n';
import PostCommentsListFilter from 'src/view/postComments/list/PostCommentsListFilter';
import PostCommentsListTable from 'src/view/postComments/list/PostCommentsListTable';
import PostCommentsListToolbar from 'src/view/postComments/list/PostCommentsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PostCommentsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.postComments.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.postComments.list.title')}
        </h1>
        <PostCommentsListToolbar />
        <PostCommentsListFilter />
        <PostCommentsListTable />
      </div>
    </>
  );
}

export default PostCommentsListPage;
