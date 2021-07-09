import React from 'react';
import { i18n } from 'src/i18n';
import PetDiseasesListFilter from 'src/view/petDiseases/list/PetDiseasesListFilter';
import PetDiseasesListTable from 'src/view/petDiseases/list/PetDiseasesListTable';
import PetDiseasesListToolbar from 'src/view/petDiseases/list/PetDiseasesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PetDiseasesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.petDiseases.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.petDiseases.list.title')}
        </h1>
        <PetDiseasesListToolbar />
        <PetDiseasesListFilter />
        <PetDiseasesListTable />
      </div>
    </>
  );
}

export default PetDiseasesListPage;
