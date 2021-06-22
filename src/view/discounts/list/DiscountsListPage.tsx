import React from 'react';
import { i18n } from 'src/i18n';
import DiscountsListFilter from 'src/view/discounts/list/DiscountsListFilter';
import DiscountsListTable from 'src/view/discounts/list/DiscountsListTable';
import DiscountsListToolbar from 'src/view/discounts/list/DiscountsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function DiscountsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.discounts.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.discounts.list.title')}
        </h1>
        <DiscountsListToolbar />
        <DiscountsListFilter />
        <DiscountsListTable />
      </div>
    </>
  );
}

export default DiscountsListPage;
