import React from 'react';
import { i18n } from 'src/i18n';
import DealsListFilter from 'src/view/deals/list/DealsListFilter';
import DealsListTable from 'src/view/deals/list/DealsListTable';
import DealsListToolbar from 'src/view/deals/list/DealsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function DealsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.deals.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.deals.list.title')}
        </h1>
        <DealsListToolbar />
        <DealsListFilter />
        <DealsListTable />
      </div>
    </>
  );
}

export default DealsListPage;
