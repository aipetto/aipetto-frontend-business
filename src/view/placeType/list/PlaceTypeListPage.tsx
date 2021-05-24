import React from 'react';
import { i18n } from 'src/i18n';
import PlaceTypeListFilter from 'src/view/placeType/list/PlaceTypeListFilter';
import PlaceTypeListTable from 'src/view/placeType/list/PlaceTypeListTable';
import PlaceTypeListToolbar from 'src/view/placeType/list/PlaceTypeListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PlaceTypeListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.placeType.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.placeType.list.title')}
        </h1>
        <PlaceTypeListToolbar />
        <PlaceTypeListFilter />
        <PlaceTypeListTable />
      </div>
    </>
  );
}

export default PlaceTypeListPage;
