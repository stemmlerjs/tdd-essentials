# 6. Dealing with Time

There are a bunch of topics we could cover here:

- Temporal Decoupling
- Rebuilding state from events
  if we're building state from events, do we end up introducing a coordinator? let's think about it for a second. 
    - static method called `buildGameFromEvents` and we build the game from the game events. 
    - how do game events get translated?
      - standard event structure
      - since this is just one object in general, you COULD use a switch statement to do different behaviours/commands/methods for each event. the method that handles ths is pretty much acting as the cloest to a coordinator/observer. that's decent.
- The Builder Pattern
- Some example where we're actually dealing with time as a domain concept, something that permeates what we are actually doing; I think the elevator example is a good one for this, from waht I can remember.