/* ---------------------------------------------------------------------------
   Extra lines for The Shrimp. Add your own inside the quotes, one per line,
   each ending with a comma. They're mixed in with the built-in ones.
   Delete this file and nothing breaks.

   {n}    = how many things are on the list
   {got}  = how many are in the trolley
   {left} = how many are still to get
   --------------------------------------------------------------------------- */
window.SHRIMP_LINES = {
  // the list is empty
  empty: [
    'Nothing to buy. Go and have a nice sit down.',
  ],
  // there are things on the list, nobody's shopping yet
  some: [
    '{n} things. Shrimple.',
  ],
  // someone's in the shop, ticking things off
  shop: [
    '{got} got, {left} to go. You’re a natural.',
  ],
  // everything ticked
  done: [
    'Every last thing. I’m welling up.',
  ],
  // no signal
  offline: [
    'Shop basements: where signal goes to die. I’ve got your back.',
  ],
  // on The usuals screen
  usuals: [
    'Same again? Same again.',
  ],
  // when someone pokes The Shrimp
  poke: [
    'Careful, I bruise like a prawn.',
  ],
};
