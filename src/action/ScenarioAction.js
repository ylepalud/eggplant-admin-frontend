import * as model from '../api/ScenarioModel';
import * as action from './ScenarioActionType';

// Action creator
export function getScenario({ page }) {
    return {
        type: action.GET_SCENARIO,
        payload: model.getAllByPage({ page })
    };
}

export function getScenarioById({ id }) {
    return {
        type: action.GET_SCENARIO_BY_ID,
        payload: model.getById({ id })
    }
}

//TODO faire l'action de MAJ

export function updateScenario({ scenario }) {
    return {
        type: action.UPDATE_SCENARIO,
        payload: model.updateScenario({ scenario })
    }
}