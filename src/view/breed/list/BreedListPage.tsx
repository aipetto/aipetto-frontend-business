import React from 'react';
import { i18n } from 'src/i18n';
import BreedListFilter from 'src/view/breed/list/BreedListFilter';
import BreedListTable from 'src/view/breed/list/BreedListTable';
import BreedListToolbar from 'src/view/breed/list/BreedListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BreedListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.breed.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.breed.list.title')}
        </h1>
        <BreedListToolbar />
        <BreedListFilter />
        <BreedListTable />
      </div>
    </>
  );
}

export default BreedListPage;
