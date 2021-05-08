import React from 'react';
import { i18n } from 'src/i18n';
import CurrencyListFilter from 'src/view/currency/list/CurrencyListFilter';
import CurrencyListTable from 'src/view/currency/list/CurrencyListTable';
import CurrencyListToolbar from 'src/view/currency/list/CurrencyListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CurrencyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.currency.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.currency.list.title')}
        </h1>
        <CurrencyListToolbar />
        <CurrencyListFilter />
        <CurrencyListTable />
      </div>
    </>
  );
}

export default CurrencyListPage;
