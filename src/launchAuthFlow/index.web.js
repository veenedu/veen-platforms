import {openPopup} from './popupManager.web';

export function launchAuthFlow(formattedUrl, callbacks) {
  openPopup(formattedUrl,callbacks);
}
