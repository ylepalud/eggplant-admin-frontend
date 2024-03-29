// Request state

const PENDING = '_PENDING';
const FULFILLED = '_FULFILLED';
const REJECTED = '_REJECTED';

// EggplantConfig action CONFIG/GET_CONFIG_FULFILLED
const PREFIX = 'CONFIG'

export const GET_EGGPLANT_CONFIG = `${PREFIX}/GET_CONFIG`;
export const GET_EGGPLANT_CONFIG_PENDING = `${GET_EGGPLANT_CONFIG}${PENDING}`;
export const GET_EGGPLANT_CONFIG_FULFILLED = `${GET_EGGPLANT_CONFIG}${FULFILLED}`;
export const GET_EGGPLANT_CONFIG_REJECTED = `${GET_EGGPLANT_CONFIG}${REJECTED}`;