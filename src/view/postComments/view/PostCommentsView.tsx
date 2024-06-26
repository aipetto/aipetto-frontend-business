import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PostsViewItem from 'src/view/posts/view/PostsViewItem';

function PostCommentsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.postComments.fields.comment')}
        value={record.comment}
      />

      <PostsViewItem
        label={i18n('entities.postComments.fields.postId')}
        value={record.postId}
      />
    </div>
  );
}

export default PostCommentsView;
