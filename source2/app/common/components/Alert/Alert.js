import { createAction } from '../../utility';

export const ADD_ALERT = "Core/ADD_ALERT";
export const alertAddAction = createAction(ADD_ALERT,true,"alert");

export const REMOVE_ALERT = "Core/REMOVE_ALERT";
export const alertRemoveAction = createAction(REMOVE_ALERT,true,"alert");

export const REMOVE_ALL_ALERTS = "Core/REMOVE_ALL";
export const alertRemoveAllAction = createAction(REMOVE_ALL_ALERTS,true);

export const REMOVE_FEATURE_ALERTS = "Core/REMOVE_FEATURE_ALERTS";
export const alertRemoveFeatureAction = createAction(REMOVE_FEATURE_ALERTS,true,"feature");