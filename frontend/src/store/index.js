import { expenseSlice } from "./expense/expense-slice";
import { noteSlice } from "./note/note-slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { loggerMiddleware } from "./middlewares/logger-middleware";

// config pour percistReducer
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["EXPENSE", "NOTE"], // filtre les slices traitées (inverse de blacklist)
};

// ****pour persister le store **** On rassemble toutes les slices
const rootReducers = combineReducers({
  EXPENSE: expenseSlice.reducer,
  NOTE: noteSlice.reducer,
});
const persistedReducers = persistReducer(persistConfig, rootReducers);

// Configuration d'origine du store
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleware.middleware), //ajout des middleWare
});

// ****pour persister le store ****  enfin on persist tout le store
const persistor = persistStore(store);
export { store, persistor };
