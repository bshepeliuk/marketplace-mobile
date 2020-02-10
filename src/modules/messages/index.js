import reducer from './messagesReducer';
import * as messagesActions from './messagesActions';
import * as messagesOperations from './messagesOperations';
import * as messagesSelectors from './messagesSelectors';

export const MESSAGE_LIMIT = 20;

export { messagesActions, messagesOperations, messagesSelectors };
export default reducer;
