import React from 'react';
import { i18n } from 'src/i18n';
import PointsChallengesListFilter from 'src/view/pointsChallenges/list/PointsChallengesListFilter';
import PointsChallengesListTable from 'src/view/pointsChallenges/list/PointsChallengesListTable';
import PointsChallengesListToolbar from 'src/view/pointsChallenges/list/PointsChallengesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PointsChallengesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.pointsChallenges.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.pointsChallenges.list.title')}
        </h1>
        <PointsChallengesListToolbar />
        <PointsChallengesListFilter />
        <PointsChallengesListTable />
      </div>
    </>
  );
}

export default PointsChallengesListPage;
