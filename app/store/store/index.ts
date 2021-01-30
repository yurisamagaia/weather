import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { weatherReducer } from '../index';

// Create logger
// Redux Logger allows showing logs actions in developer console
const logger = createLogger({ collapsed: true });

export type RootState = ReturnType<typeof weatherReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Set Redux Store
const store = createStore(weatherReducer, applyMiddleware(thunk, logger));

export default store;