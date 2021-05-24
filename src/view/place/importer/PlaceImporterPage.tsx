import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/place/importer/placeImporterActions';
import fields from 'src/modules/place/importer/placeImporterFields';
import selectors from 'src/modules/place/importer/placeImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function PlaceImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.place.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.place.menu'), '/place'],
          [i18n('entities.place.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.place.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default PlaceImportPage;
