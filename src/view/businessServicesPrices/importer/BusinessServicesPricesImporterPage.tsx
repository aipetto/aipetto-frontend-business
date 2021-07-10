import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessServicesPrices/importer/businessServicesPricesImporterActions';
import fields from 'src/modules/businessServicesPrices/importer/businessServicesPricesImporterFields';
import selectors from 'src/modules/businessServicesPrices/importer/businessServicesPricesImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function BusinessServicesPricesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.businessServicesPrices.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.businessServicesPrices.menu'), '/business-services-prices'],
          [i18n('entities.businessServicesPrices.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.businessServicesPrices.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default BusinessServicesPricesImportPage;
