import React from 'react';
import { i18n } from 'src/i18n';
import BusinessServicesTypesListFilter from 'src/view/businessServicesTypes/list/BusinessServicesTypesListFilter';
import BusinessServicesTypesListTable from 'src/view/businessServicesTypes/list/BusinessServicesTypesListTable';
import BusinessServicesTypesListToolbar from 'src/view/businessServicesTypes/list/BusinessServicesTypesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BusinessServicesTypesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.businessServicesTypes.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.businessServicesTypes.list.title')}
        </h1>
        <BusinessServicesTypesListToolbar />
        <BusinessServicesTypesListFilter />
        <BusinessServicesTypesListTable />
      </div>
    </>
  );
}

export default BusinessServicesTypesListPage;
