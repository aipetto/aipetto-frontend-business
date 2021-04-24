import React from 'react';
import { i18n } from 'src/i18n';
import StateListFilter from 'src/view/state/list/StateListFilter';
import StateListTable from 'src/view/state/list/StateListTable';
import StateListToolbar from 'src/view/state/list/StateListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function StateListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.state.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.state.list.title')}
        </h1>
        <StateListToolbar />
        <StateListFilter />
        <StateListTable />
      </div>
    </>
  );
}

export default StateListPage;
