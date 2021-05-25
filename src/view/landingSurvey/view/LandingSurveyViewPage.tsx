import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/landingSurvey/view/landingSurveyViewActions';
import selectors from 'src/modules/landingSurvey/view/landingSurveyViewSelectors';
import LandingSurveyView from 'src/view/landingSurvey/view/LandingSurveyView';
import LandingSurveyViewToolbar from 'src/view/landingSurvey/view/LandingSurveyViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function LandingSurveyPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.landingSurvey.menu'), '/landing-survey'],
          [i18n('entities.landingSurvey.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.landingSurvey.view.title')}
        </h1>

        <LandingSurveyViewToolbar match={match} />

        <LandingSurveyView loading={loading} record={record} />
      </div>
    </>
  );
}

export default LandingSurveyPage;
