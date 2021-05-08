import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/petVaccines/importer/petVaccinesImporterActions';
import fields from 'src/modules/petVaccines/importer/petVaccinesImporterFields';
import selectors from 'src/modules/petVaccines/importer/petVaccinesImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function PetVaccinesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.petVaccines.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.petVaccines.menu'), '/pet-vaccines'],
          [i18n('entities.petVaccines.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.petVaccines.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default PetVaccinesImportPage;
