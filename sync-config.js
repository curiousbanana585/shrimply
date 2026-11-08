/* ---------------------------------------------------------------------------
   Shrimply needs one free Firebase Realtime Database so phones share a list.

   Paste its address between the quotes below, e.g.

     databaseURL: 'https://my-project-default-rtdb.europe-west1.firebasedatabase.app'

   You can reuse the timer's / Sardines' Firebase project: same address.
   Leave it empty and the app runs in demo mode: the list is only shared
   between tabs of the same browser, handy for a look but not for the house.
   --------------------------------------------------------------------------- */
window.SYNC_CONFIG = {
  databaseURL: 'https://shrimply-d4518-default-rtdb.europe-west1.firebasedatabase.app/'
};
