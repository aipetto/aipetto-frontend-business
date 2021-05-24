import React from 'react';
import { i18n } from 'src/i18n';
import PetListFilter from 'src/view/pet/list/PetListFilter';
import PetListTable from 'src/view/pet/list/PetListTable';
import PetListToolbar from 'src/view/pet/list/PetListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PetListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.pet.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.pet.list.title')}
        </h1>
        <PetListToolbar />
        <PetListFilter />
        <PetListTable />
      </div>
    </>
  );
}

export default PetListPage;
