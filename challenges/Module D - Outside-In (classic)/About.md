# Module D - Outside-In 

> This is in part, about Behaviour Verification (incoming adapters).

> We still want to focus on the CLASSIC part here too, doing State Verfication. 

> In E2E testing, State Verification will force us to make these things real, won't it? Yeah, it will. So, we want to do that. It _could_ be good for you to do Behaviour Verification, but if you're E2E testing, that's kinda unnecessary if all that's getting called is the Use Case. Why? Because you've alreaady proven that path. So what might you want to perform Behaviour Verification upon? Ah, maybe that the emails were attempted to be sent, maybe that an event was emitted and picked up by another part of the application? But that's making the SUT quite large. Better to verify those parts in isolation, but have this E2E test cover what we need it to.

> And I suppose that will use a little bit of Result Verification, maybe, yeah. Maybe some State Verification against the databases? But for things that are OUTSIDE of our control, ah yes - we will have to perform Behaviour Verification. Aha!

> Is it really going to be CLASSIC? I mean, I don't think so. We're still going to need to perform Behaviour Verification.

> Result Verification.

> State Verification is good.

