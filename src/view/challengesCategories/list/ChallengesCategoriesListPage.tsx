import React from 'react';
import { i18n } from 'src/i18n';
import ChallengesCategoriesListFilter from 'src/view/challengesCategories/list/ChallengesCategoriesListFilter';
import ChallengesCategoriesListTable from 'src/view/challengesCategories/list/ChallengesCategoriesListTable';
import ChallengesCategoriesListToolbar from 'src/view/challengesCategories/list/ChallengesCategoriesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ChallengesCategoriesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.challengesCategories.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.challengesCategories.list.title')}
        </h1>
        <ChallengesCategoriesListToolbar />
        <ChallengesCategoriesListFilter />
        <ChallengesCategoriesListTable />
      </div>
    </>
  );
}

export default ChallengesCategoriesListPage;
