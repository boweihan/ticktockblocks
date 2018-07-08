import * as RouteActions from './routes';
import * as GameActions from './game';
import * as ModalActions from './modal';

export const ActionCreators = {
  ...RouteActions,
  ...GameActions,
  ...ModalActions,
};
