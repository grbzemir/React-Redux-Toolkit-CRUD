import { configureStore } from '@reduxjs/toolkit';    // Store oluşturmak için kullanmak zorundayız

//store state'in tutulduğu yerdir.
//store içerisinde bir çok reducer bulunabilir. 
//reducerlar state'i değiştiren fonksiyonlardır.


export const store = configureStore({
    reducer: {},
});