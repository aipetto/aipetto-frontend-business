import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/businessCategory/importer/businessCategoryImporterActions';
import fields from 'src/modules/businessCategory/importer/businessCategoryImporterFields';
import selectors from 'src/modules/businessCategory/importer/businessCategoryImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function BusinessCategoryImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.businessCategory.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/dashboard'],
          [i18n('entities.businessCategory.menu'), '/business-category'],
          [i18n('entities.businessCategory.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.businessCategory.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default BusinessCategoryImportPage;
