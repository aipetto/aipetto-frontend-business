import React from 'react';
import { i18n } from 'src/i18n';
import BusinessServicesPricesListFilter from 'src/view/businessServicesPrices/list/BusinessServicesPricesListFilter';
import BusinessServicesPricesListTable from 'src/view/businessServicesPrices/list/BusinessServicesPricesListTable';
import BusinessServicesPricesListToolbar from 'src/view/businessServicesPrices/list/BusinessServicesPricesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BusinessServicesPricesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.businessServicesPrices.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.businessServicesPrices.list.title')}
        </h1>
        <BusinessServicesPricesListToolbar />
        <BusinessServicesPricesListFilter />
        <BusinessServicesPricesListTable />
      </div>
    </>
  );
}

export default BusinessServicesPricesListPage;
