import React from 'react';
import { i18n } from 'src/i18n';
import QuestionsListFilter from 'src/view/questions/list/QuestionsListFilter';
import QuestionsListTable from 'src/view/questions/list/QuestionsListTable';
import QuestionsListToolbar from 'src/view/questions/list/QuestionsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function QuestionsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.questions.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.questions.list.title')}
        </h1>
        <QuestionsListToolbar />
        <QuestionsListFilter />
        <QuestionsListTable />
      </div>
    </>
  );
}

export default QuestionsListPage;
