import { DefaultExtention, TypeDoors } from './../consts';
import { getTotalPrice } from './../utils/utils';
import { Product } from './../types/product.type';
import { loadInterriorDoors, loadExterriorDoors, selectDoorAction, changeTypeSearchDoor, addFavoriteOffer, requireAutorization, loginUser, addWorkToOffer, deleteOffer, addNarrowingOrExtention, changeWallMaterial, getTotalInstallPrice, changeWeightExterriorDoor, getOfferTotalPrice, getInitialOffer } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offer.type';
import { AuthStatus, initialOffer } from '../consts';
import { User } from '../types/user.type';


type State = {
  interriorDoors: Product[],
  exterriorDoors: Product[],
  selectedDoor: Product | null,
  selectedTypeDoor: string,
  offer: Offer,
  favorites: Offer[],
  authStatus: AuthStatus,
  user: User | null,
  offersCount: number,
}


const initialState: State = {
  interriorDoors: [],
  exterriorDoors: [],
  selectedDoor: null,
  selectedTypeDoor: 'exterriorDoors',
  offer: initialOffer,
  favorites: [],
  authStatus: AuthStatus.Unknown,
  user: null,
  offersCount: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadInterriorDoors, (state, action) => {
      state.interriorDoors = action.payload;
    })
    .addCase(loadExterriorDoors, (state, action) => {
      state.exterriorDoors = action.payload;
    })
    .addCase(selectDoorAction, (state, action) => {
      state.selectedDoor = action.payload;
      state.offer.product = action.payload;
      state.offer.installing.width = action.payload.width;
      state.offer.installing.length = action.payload.length;
    })
    .addCase(changeTypeSearchDoor, (state, action) => {
      state.selectedTypeDoor = action.payload;
    })
    .addCase(addFavoriteOffer, (state, action) => {
      if (state.selectedDoor) {
        state.offer.product = state.selectedDoor;
        state.offer.installing = action.payload.installing;
        state.offersCount += 1;
        state.offer.id = state.offersCount;
        state.favorites.push(state.offer);
      }
    })
    .addCase(requireAutorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(loginUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(addWorkToOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(deleteOffer, (state, action) => {
      state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
    })
    .addCase(addNarrowingOrExtention, (state, action) => {
      state.offer.installing = action.payload;
      state.offer.wallNarrowing.qty = action.payload.lengthNarrowing + action.payload.widthNarrowing;
      state.offer.wallExtention.qty = action.payload.lengthExtention + action.payload.widthExtention;
    })
    .addCase(changeWallMaterial, (state, action) => {
      state.offer.wallNarrowing.title = action.payload.title;
      state.offer.wallNarrowing.price = action.payload.price;
    })
    .addCase(changeWeightExterriorDoor, (state, action) => {
      state.offer.typeWork.weightDoor = action.payload;
    })
    .addCase(getTotalInstallPrice, (state) => {
      state.offer.totalInstallPrice = getTotalPrice(
        state.offer.wallExtention,
        state.offer.wallNarrowing,
        state.offer.typeWork.weightDoor,
        state.offer.typeWork.demolition ? state.offer.typeWork.demolition : DefaultExtention,
        state.offer.typeWork.openDesign ? state.offer.typeWork.openDesign : DefaultExtention,
      );
    })
    .addCase(getOfferTotalPrice, (state) => {
      state.offer.totalPrice = state.offer.product.price.retail + state.offer.totalInstallPrice;
    })
    .addCase(getInitialOffer, (state) => {
      state.offer = initialOffer;
      state.selectedTypeDoor = TypeDoors.EXTERRIOR;
      state.selectedDoor = null;
    });
});


export { reducer };
