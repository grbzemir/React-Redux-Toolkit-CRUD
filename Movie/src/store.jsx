import { configureStore } from '@reduxjs/toolkit';    // Store oluşturmak için kullanmak zorundayız
import movieReducer from './MovieSlice';              // Reducer'ı import ettik

//store state'in tutulduğu yerdir.
//store içerisinde bir çok reducer bulunabilir. 
//reducerlar state'i değiştiren fonksiyonlardır.


export const store = configureStore({
    reducer: {},
});