import React from 'react';
import { i18n } from 'src/i18n';
import LanguagesListFilter from 'src/view/languages/list/LanguagesListFilter';
import LanguagesListTable from 'src/view/languages/list/LanguagesListTable';
import LanguagesListToolbar from 'src/view/languages/list/LanguagesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function LanguagesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.languages.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.languages.list.title')}
        </h1>
        <LanguagesListToolbar />
        <LanguagesListFilter />
        <LanguagesListTable />
      </div>
    </>
  );
}

export default LanguagesListPage;
