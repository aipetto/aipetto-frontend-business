import React from 'react';
import { i18n } from 'src/i18n';
import PlaceListFilter from 'src/view/place/list/PlaceListFilter';
import PlaceListTable from 'src/view/place/list/PlaceListTable';
import PlaceListToolbar from 'src/view/place/list/PlaceListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PlaceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.place.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.place.list.title')}
        </h1>
        <PlaceListToolbar />
        <PlaceListFilter />
        <PlaceListTable />
      </div>
    </>
  );
}

export default PlaceListPage;
