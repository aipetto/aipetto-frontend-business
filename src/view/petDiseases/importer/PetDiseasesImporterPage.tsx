import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/petDiseases/importer/petDiseasesImporterActions';
import fields from 'src/modules/petDiseases/importer/petDiseasesImporterFields';
import selectors from 'src/modules/petDiseases/importer/petDiseasesImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function PetDiseasesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.petDiseases.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.petDiseases.menu'), '/pet-diseases'],
          [i18n('entities.petDiseases.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.petDiseases.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default PetDiseasesImportPage;
