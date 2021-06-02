import React from 'react';
import { i18n } from 'src/i18n';
import NewBusinessSurveyListFilter from 'src/view/newBusinessSurvey/list/NewBusinessSurveyListFilter';
import NewBusinessSurveyListTable from 'src/view/newBusinessSurvey/list/NewBusinessSurveyListTable';
import NewBusinessSurveyListToolbar from 'src/view/newBusinessSurvey/list/NewBusinessSurveyListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function NewBusinessSurveyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.newBusinessSurvey.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.newBusinessSurvey.list.title')}
        </h1>
        <NewBusinessSurveyListToolbar />
        <NewBusinessSurveyListFilter />
        <NewBusinessSurveyListTable />
      </div>
    </>
  );
}

export default NewBusinessSurveyListPage;
