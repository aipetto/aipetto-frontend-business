import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessPlaceServiceAvailability/importer/businessPlaceServiceAvailabilityImporterActions';
import fields from 'src/modules/businessPlaceServiceAvailability/importer/businessPlaceServiceAvailabilityImporterFields';
import selectors from 'src/modules/businessPlaceServiceAvailability/importer/businessPlaceServiceAvailabilityImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function BusinessPlaceServiceAvailabilityImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.businessPlaceServiceAvailability.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.businessPlaceServiceAvailability.menu'), '/business-place-service-availability'],
          [i18n('entities.businessPlaceServiceAvailability.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.businessPlaceServiceAvailability.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default BusinessPlaceServiceAvailabilityImportPage;
