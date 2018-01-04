import Condition from "../../models/Condition";

export interface ConditionState extends Condition{
    loading: boolean;

    editable: boolean;
    edited: boolean;
    editing: boolean;

    selected : boolean;
    refreshing: boolean;
     
    create: boolean;
    error:boolean;

}
export const initializeConditionState  = function() {
    return {
        loading: false,
    
        editable: true,
        edited: false,
        editing:false,
    
        selected: false,
        refreshing:false,

        create: true,
        
        error: false,
    }
}

export interface ConditionListState{
    conditions : ConditionState[];
    loading: boolean;
    pending: number;
}

export const initializeConditionListState = function() {
    return{
        loading:false,
        pending: 0
    }
}


