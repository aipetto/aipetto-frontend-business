import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/newBusinessSurvey/form/newBusinessSurveyFormActions';
import selectors from 'src/modules/newBusinessSurvey/form/newBusinessSurveyFormSelectors';
import { getHistory } from 'src/modules/store';
import NewBusinessSurveyForm from 'src/view/newBusinessSurvey/form/NewBusinessSurveyForm';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';

function NewBusinessSurveyFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.newBusinessSurvey.edit.title')
    : i18n('entities.newBusinessSurvey.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.newBusinessSurvey.menu'), '/new-business-survey'],
          [title],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {title}
        </h1>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <NewBusinessSurveyForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/new-business-survey')}
          />
        )}
      </div>
    </>
  );
}

export default NewBusinessSurveyFormPage;
