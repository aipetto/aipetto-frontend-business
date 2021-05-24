import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/messages/importer/messagesImporterActions';
import fields from 'src/modules/messages/importer/messagesImporterFields';
import selectors from 'src/modules/messages/importer/messagesImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function MessagesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.messages.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/network'],
          [i18n('entities.messages.menu'), '/messages'],
          [i18n('entities.messages.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.messages.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default MessagesImportPage;
