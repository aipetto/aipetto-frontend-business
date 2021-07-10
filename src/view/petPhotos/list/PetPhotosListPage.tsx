import React from 'react';
import { i18n } from 'src/i18n';
import PetPhotosListFilter from 'src/view/petPhotos/list/PetPhotosListFilter';
import PetPhotosListTable from 'src/view/petPhotos/list/PetPhotosListTable';
import PetPhotosListToolbar from 'src/view/petPhotos/list/PetPhotosListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PetPhotosListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.petPhotos.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.petPhotos.list.title')}
        </h1>
        <PetPhotosListToolbar />
        <PetPhotosListFilter />
        <PetPhotosListTable />
      </div>
    </>
  );
}

export default PetPhotosListPage;
