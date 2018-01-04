import Search from "../../models/Search";

export interface SearchState extends Search{
    loading: boolean;

    editable: boolean;
    edited: boolean;
    editing: boolean;

    selected : boolean;
    refreshing: boolean;
     
    create: boolean;
    error:boolean;

}
export const initializeSearchState  = function() {
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
