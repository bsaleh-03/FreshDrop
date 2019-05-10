import {
    OPEN_DRAWER,
    CLOSE_DRAWER
} from "redux/actions/types";

// Drawer Initial State
const initialDrawerState = {
    open: true
};

const drawerReducer = (state = initialDrawerState, action) => {
    switch (action.type) {
        case OPEN_DRAWER: {
            return {
                open: true
            }
        }
        case CLOSE_DRAWER: {
            return {
                open: false
            }
        }
        default: {
            return state
        }
    }
};

export default drawerReducer;