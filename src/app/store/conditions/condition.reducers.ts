import Condition from '../../models/condition.model';
import { initializeConditionState, ConditionListState, ConditionState } from './condition.state'; 
import * as ConditionActions from './condition.action';

export type Action = ConditionActions.All;

const defaultConditionStates: ConditionState[] = [
    {
        ...Condition.generateMockCondition(),
        ...initializeConditionState()
    }
]

