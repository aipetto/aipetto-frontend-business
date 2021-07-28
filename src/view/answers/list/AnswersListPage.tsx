import React from 'react';
import { i18n } from 'src/i18n';
import AnswersListFilter from 'src/view/answers/list/AnswersListFilter';
import AnswersListTable from 'src/view/answers/list/AnswersListTable';
import AnswersListToolbar from 'src/view/answers/list/AnswersListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function AnswersListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.answers.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.answers.list.title')}
        </h1>
        <AnswersListToolbar />
        <AnswersListFilter />
        <AnswersListTable />
      </div>
    </>
  );
}

export default AnswersListPage;
