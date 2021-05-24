import React from 'react';
import { i18n } from 'src/i18n';
import ProvidersListFilter from 'src/view/providers/list/ProvidersListFilter';
import ProvidersListTable from 'src/view/providers/list/ProvidersListTable';
import ProvidersListToolbar from 'src/view/providers/list/ProvidersListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProvidersListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.providers.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.providers.list.title')}
        </h1>
        <ProvidersListToolbar />
        <ProvidersListFilter />
        <ProvidersListTable />
      </div>
    </>
  );
}

export default ProvidersListPage;
