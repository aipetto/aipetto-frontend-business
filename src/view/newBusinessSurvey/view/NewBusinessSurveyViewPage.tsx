import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/newBusinessSurvey/view/newBusinessSurveyViewActions';
import selectors from 'src/modules/newBusinessSurvey/view/newBusinessSurveyViewSelectors';
import NewBusinessSurveyView from 'src/view/newBusinessSurvey/view/NewBusinessSurveyView';
import NewBusinessSurveyViewToolbar from 'src/view/newBusinessSurvey/view/NewBusinessSurveyViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function NewBusinessSurveyPage() {
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
          [i18n('entities.newBusinessSurvey.menu'), '/new-business-survey'],
          [i18n('entities.newBusinessSurvey.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.newBusinessSurvey.view.title')}
        </h1>

        <NewBusinessSurveyViewToolbar match={match} />

        <NewBusinessSurveyView loading={loading} record={record} />
      </div>
    </>
  );
}

export default NewBusinessSurveyPage;
