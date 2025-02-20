import { configureStore, createSlice } from '@reduxjs/toolkit';
import en from '../../Locals/en';
import ar from '../../Locals/ar';
// import cartReducer from './cartSlice';
// import coursesReducer from "./coursesSlice";

import { loadState, saveState } from '../utils/localStorage'; // Import the utility functions


// Load persisted state from localStorage
const persistedState = loadState();

// Language Slice
const langSlice = createSlice({
  name: 'lang',
  initialState: { lang: 'en', content: en },
  reducers: {
    toggleLang: (state) => {
      if (state.lang === 'en') {
        state.lang = 'ar';
        state.content = ar;
      } else {
        state.lang = 'en';
        state.content = en;
      }
    },
  },
});

// Theme Slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// Favorites Slice
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      if (!action.payload.user) {
        alert("يجب تسجيل الدخول أولًا لإضافة المنتج إلى المفضلة.");
        return;
      }
      state.favorite.push(action.payload.product);
    },
    removeFromFavorites: (state, action) => {
      state.favorite = state.favorite.filter((item) => item.id !== action.payload.id);
    },
  },
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (!action.payload.user) {
        alert("يجب تسجيل الدخول لإضافة المنتج إلى عربة التسوق.");
        return;
      }
      const existingItem = state.cartItems.find(item => item.id === action.payload.product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload.product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAdmin: false,
    user: null,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    setUserr: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAdmin = false;
      state.user = null;
    },
  },
});

// Export actions
export const { toggleLang } = langSlice.actions;
export const { toggleTheme } = themeSlice.actions;
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export const { setAdmin, setUserr, logout } = authSlice.actions;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;


// Configure the store
const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
    theme: themeSlice.reducer,
    favorite: favoriteSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    // courses: coursesReducer,
  },
  preloadedState: persistedState, // Initialize the store with the persisted state
});

// Save the state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;