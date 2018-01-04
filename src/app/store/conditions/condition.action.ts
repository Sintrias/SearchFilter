import { ConditionState } from './condition.state';
import Condition from '../../models/Condition';
import { Action } from '@ngrx/store';

// Single condition
export const GET_CONDITION = '[Condition] GET_CONDITION';
export const GET_CONDITION_SUCCESS = '[Condition] GET_CONDITION_SUCCESS';
export const GET_CONDITION_ERROR = '[Condition] GET_CONDITION_ERROR'

// Multiple conditions
export const GET_CONDITIONS = '[Condition] GET_CONDITIONS';
export const GET_CONDITIONS_SUCCESS = '[Condition] GET_CONDITIONS_SUCCESS';
export const GET_CONDITIONS_ERROR = '[Condition] GET_CONDITIONS_ERROR'

// Get condition action
export class GetCondition implements Action {
    readonly type = GET_CONDITION;
}

export class GetConditionSuccess implements Action {
    readonly type = GET_CONDITION_SUCCESS;
    constructor(public payload: Condition) { };
}

export class GetConditionError implements Action {
    readonly type = GET_CONDITION_ERROR;
}

// Get condition"s" actions
export class GetConditions implements Action {
    readonly type = GET_CONDITIONS;
}

export class GetConditionsSuccess implements Action {
    readonly type = GET_CONDITIONS_SUCCESS;
    constructor(public payload: ConditionState[]) { };
}

export class GetConditionsError implements Action {
    readonly type = GET_CONDITIONS_ERROR;
}

export type All = GetCondition | GetConditionSuccess | GetConditionError |
    GetConditions | GetConditionsSuccess | GetConditionsError;