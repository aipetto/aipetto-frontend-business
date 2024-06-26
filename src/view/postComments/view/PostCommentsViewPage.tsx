import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/postComments/view/postCommentsViewActions';
import selectors from 'src/modules/postComments/view/postCommentsViewSelectors';
import PostCommentsView from 'src/view/postComments/view/PostCommentsView';
import PostCommentsViewToolbar from 'src/view/postComments/view/PostCommentsViewToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PostCommentsPage() {
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
          [i18n('entities.postComments.menu'), '/post-comments'],
          [i18n('entities.postComments.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.postComments.view.title')}
        </h1>

        <PostCommentsViewToolbar match={match} />

        <PostCommentsView loading={loading} record={record} />
      </div>
    </>
  );
}

export default PostCommentsPage;
