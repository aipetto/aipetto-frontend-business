import React from 'react';
import { i18n } from 'src/i18n';
import PetVaccinesListFilter from 'src/view/petVaccines/list/PetVaccinesListFilter';
import PetVaccinesListTable from 'src/view/petVaccines/list/PetVaccinesListTable';
import PetVaccinesListToolbar from 'src/view/petVaccines/list/PetVaccinesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PetVaccinesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.petVaccines.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.petVaccines.list.title')}
        </h1>
        <PetVaccinesListToolbar />
        <PetVaccinesListFilter />
        <PetVaccinesListTable />
      </div>
    </>
  );
}

export default PetVaccinesListPage;
