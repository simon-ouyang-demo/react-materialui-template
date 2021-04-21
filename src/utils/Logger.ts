import log, { LogLevelDesc } from 'loglevel'

import { LOG_LEVEL } from '../constants'

log.setLevel(LOG_LEVEL as LogLevelDesc)

export default log
