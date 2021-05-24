import React from 'react';
import { i18n } from 'src/i18n';
import VaccineTypesListFilter from 'src/view/vaccineTypes/list/VaccineTypesListFilter';
import VaccineTypesListTable from 'src/view/vaccineTypes/list/VaccineTypesListTable';
import VaccineTypesListToolbar from 'src/view/vaccineTypes/list/VaccineTypesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function VaccineTypesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.vaccineTypes.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.vaccineTypes.list.title')}
        </h1>
        <VaccineTypesListToolbar />
        <VaccineTypesListFilter />
        <VaccineTypesListTable />
      </div>
    </>
  );
}

export default VaccineTypesListPage;
