import React from 'react';
import { i18n } from 'src/i18n';
import PetTypesListFilter from 'src/view/petTypes/list/PetTypesListFilter';
import PetTypesListTable from 'src/view/petTypes/list/PetTypesListTable';
import PetTypesListToolbar from 'src/view/petTypes/list/PetTypesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PetTypesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.petTypes.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.petTypes.list.title')}
        </h1>
        <PetTypesListToolbar />
        <PetTypesListFilter />
        <PetTypesListTable />
      </div>
    </>
  );
}

export default PetTypesListPage;
