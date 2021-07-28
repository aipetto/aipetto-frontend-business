import React from 'react';
import { i18n } from 'src/i18n';
import BusinessPaymentCycleListFilter from 'src/view/businessPaymentCycle/list/BusinessPaymentCycleListFilter';
import BusinessPaymentCycleListTable from 'src/view/businessPaymentCycle/list/BusinessPaymentCycleListTable';
import BusinessPaymentCycleListToolbar from 'src/view/businessPaymentCycle/list/BusinessPaymentCycleListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BusinessPaymentCycleListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.businessPaymentCycle.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.businessPaymentCycle.list.title')}
        </h1>
        <BusinessPaymentCycleListToolbar />
        <BusinessPaymentCycleListFilter />
        <BusinessPaymentCycleListTable />
      </div>
    </>
  );
}

export default BusinessPaymentCycleListPage;
