import { Work } from './../types/offer.type';
import { User } from './../types/user.type';
import { Product } from './../types/product.type';
import { createAction } from '@reduxjs/toolkit';
import { Installing, Offer } from '../types/offer.type';
import { AppRoute } from '../consts';

export const loadInterriorDoors = createAction('data/loadInterriorDoors', (doors) => ({
  payload: doors
}));

export const loadExterriorDoors = createAction('data/loadExterriorDoors', (doors) => ({
  payload: doors
}));

export const selectDoorAction = createAction('data/selectDoorAction', (door: Product) => ({
  payload: door
}));

export const changeIntallSizes = createAction('data/changeIntallSizes', (value) => ({
  payload: value
}));

export const changeTypeSearchDoor = createAction('data/changeTypeSearchDoor', (value) => ({
  payload: value
}));

export const addFavoriteOffer = createAction(('data/addFavoriteOffer'), (offer: Offer) => ({
  payload: offer
}));

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');

export const requireAutorization = createAction('data/requireAutorization', (status) => ({
  payload: status
}));

export const loginUser = createAction('user/loginUser', (user: User) => ({
  payload: user
}));

export const addWorkToOffer = createAction('data/addWorkToOffer', (data: Offer) => ({
  payload: data
}));

export const deleteOffer = createAction('data/deleteOffer', (offer: Offer) => ({
  payload: offer
}));

export const addNarrowingOrExtention = createAction('data/addNarrowingOrExtention', (data: Installing) => ({
  payload: data
}));

export const changeWallMaterial = createAction('data/changeWallMaterial', (data) => ({
  payload: data
}));

export const getTotalInstallPrice = createAction('data/getTotalInstallPrice');

export const changeWeightExterriorDoor = createAction('data/changeWightExterriorDoor', (data: Work) => ({
  payload: data
}));

export const getOfferTotalPrice = createAction('data/getOfferTotalPrice');

export const getInitialOffer = createAction('data/getInitialOffer');
