import React from 'react';
import { i18n } from 'src/i18n';
import LandingSurveyListFilter from 'src/view/landingSurvey/list/LandingSurveyListFilter';
import LandingSurveyListTable from 'src/view/landingSurvey/list/LandingSurveyListTable';
import LandingSurveyListToolbar from 'src/view/landingSurvey/list/LandingSurveyListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function LandingSurveyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.landingSurvey.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.landingSurvey.list.title')}
        </h1>
        <LandingSurveyListToolbar />
        <LandingSurveyListFilter />
        <LandingSurveyListTable />
      </div>
    </>
  );
}

export default LandingSurveyListPage;
