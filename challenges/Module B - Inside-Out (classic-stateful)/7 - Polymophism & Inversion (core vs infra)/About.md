# Polymorphism & Inversion

> Notes: We're going to have to come back to this section - to be completely honest, we may not need it. We might be able to just skip straight forward to module C, depending on what it is that you need to learn. 

> Notes: sure, it would be ideal for you to be aware of common infrasructural dependencies that we tend to need to mock out - ahhh, okay, here's a few:

>  time: -> setTimeout is bad, new Date() is bad
>  network: -> real calls 
>  filesystem: fs, stuff like that seems simple enough, but it slows down tests, so we want to appyl a boundary between it