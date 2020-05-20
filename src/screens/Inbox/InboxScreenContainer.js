import { compose, lifecycle, hoistStatics } from 'recompose';
import { connect } from 'react-redux';

import InboxScreenView from './InboxScreenView';
import { chatsOperations, chatsSelectors } from '../../modules/chats';

const mapStateToProps = (state) => ({
  items: chatsSelectors.getChatsWithLastMessage(state),
  isLoading: state.chats.fetchChats.isLoading,
});

const mapDispatchToProps = {
  fetchChats: chatsOperations.fetchChats,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { fetchChats } = this.props;

      fetchChats();
    },
    componentDidUpdate(prevProps) {
      const { fetchChats, items } = this.props;

      if (prevProps.items.length !== items.length) {
        fetchChats();
      }
    },
  }),
);

export default hoistStatics(enhancer)(InboxScreenView);
