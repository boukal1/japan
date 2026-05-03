import { Dialog } from '../../models/word.model';
import { SALUTATIONS_DIALOGS } from './salutations-demandes';
import { DIRECTION_DIALOGS } from './direction';
import { TRANSPORT_DIALOGS } from './transport';
import { HOTEL_DIALOGS } from './hotel';
import { RESTAURANT_DIALOGS } from './restaurant';
import { CAISSE_DIALOGS } from './caisse';
import { VISITE_DIALOGS } from './visite';
import { SHOPPING_DIALOGS } from './shopping';

/** Tous les dialogues de l'app, ordonnés selon le déroulé du voyage. */
export const DIALOGS: Dialog[] = [
  ...SALUTATIONS_DIALOGS,
  ...DIRECTION_DIALOGS,
  ...TRANSPORT_DIALOGS,
  ...HOTEL_DIALOGS,
  ...RESTAURANT_DIALOGS,
  ...CAISSE_DIALOGS,
  ...VISITE_DIALOGS,
  ...SHOPPING_DIALOGS,
];
