import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/professionalsServiceAvailability/importer/professionalsServiceAvailabilityImporterActions';
import fields from 'src/modules/professionalsServiceAvailability/importer/professionalsServiceAvailabilityImporterFields';
import selectors from 'src/modules/professionalsServiceAvailability/importer/professionalsServiceAvailabilityImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function ProfessionalsServiceAvailabilityImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.professionalsServiceAvailability.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.professionalsServiceAvailability.menu'), '/professionals-service-availability'],
          [i18n('entities.professionalsServiceAvailability.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.professionalsServiceAvailability.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default ProfessionalsServiceAvailabilityImportPage;
