// @flow
import * as Types from './types/settings'
import HiddenString from '../util/hidden-string'
import type {TypedState} from './reducer'
import * as WaitingConstants from './waiting'

const initialState: Types.State = {
  allowDeleteAccount: false,
  chat: {
    unfurl: {},
  },
  email: {
    emails: [],
    error: null,
    newEmail: '',
  },
  invites: {
    acceptedInvites: [],
    error: null,
    pendingInvites: [],
  },
  lockdownModeEnabled: null,
  notifications: {
    allowEdit: false,
    groups: {
      email: {
        settings: null,
        unsubscribedFromAll: false,
      },
    },
  },
  passphrase: {
    error: null,
    hasPGPKeyOnServer: null,
    newPassphrase: new HiddenString(''),
    newPassphraseConfirm: new HiddenString(''),
    newPassphraseConfirmError: null,
    newPassphraseError: null,
    rememberPassphrase: true,
  },
  waitingForResponse: false,
}

const traceInProgressKey = 'traceInProgress'

const traceInProgress = (state: TypedState) => WaitingConstants.anyWaiting(state, traceInProgressKey)

const processorProfileInProgressKey = 'processorProfileInProgress'

const processorProfileInProgress = (state: TypedState) =>
  WaitingConstants.anyWaiting(state, processorProfileInProgressKey)

export const aboutTab = 'settingsTabs:aboutTab'
export const advancedTab = 'settingsTabs:advancedTab'
export const chatTab = 'settingsTabs:chatTab'
export const chatUnfurlWaitingKey = 'settings:chatUnfurlWaitingKey'
export const deleteMeTab = 'settingsTabs:deleteMeTab'
export const devMenuTab = 'settingsTabs:devMenuTab'
export const devicesTab = 'settingsTabs:devicesTab'
export const feedbackTab = 'settingsTabs:feedbackTab'
export const foldersTab = 'settingsTabs:foldersTab'
export const fsSettingsTab = 'settingsTabs:fsSettingsTab'
export const teamsTab = 'settingsTabs:teamsTab'
export const gitTab = 'settingsTabs:gitTab'
export const invitationsTab = 'settingsTabs:invitationsTab'
export const landingTab = 'settingsTabs:landingTab'
export const notificationsTab = 'settingsTabs:notificationsTab'
export const passphraseTab = 'settingsTabs:passphrase'
export const screenprotectorTab = 'settingsTabs:screenprotector'
export const updatePaymentTab = 'settingsTabs:updatePaymentTab'
export const securityGroup = 'security'
export const walletsTab = 'settingsTabs:walletsTab'
export const waitingKey = 'settings:settingsPage'
export {
  initialState,
  traceInProgressKey,
  traceInProgress,
  processorProfileInProgressKey,
  processorProfileInProgress,
}
