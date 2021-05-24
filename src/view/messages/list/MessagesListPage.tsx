import React from 'react';
import { i18n } from 'src/i18n';
import MessagesListFilter from 'src/view/messages/list/MessagesListFilter';
import MessagesListTable from 'src/view/messages/list/MessagesListTable';
import MessagesListToolbar from 'src/view/messages/list/MessagesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function MessagesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.messages.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.messages.list.title')}
        </h1>
        <MessagesListToolbar />
        <MessagesListFilter />
        <MessagesListTable />
      </div>
    </>
  );
}

export default MessagesListPage;
