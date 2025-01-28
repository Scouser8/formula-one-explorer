This project initial setup was by using these libraries/frameworks

# React + TypeScript + Vite

In addition for development I have decided to pick the most simple & easy to customize libraries packages,

Such as: Tailwindcss, Shadcn, axios.

I didn't see a case that urgently need a global state allover the application, so I decided not to complicate things by using Redux toolkit or something like that.

However, if needed Zustand of React Context could do the job for this app.

Although Redux setup is much easier now with redux toolkit & hooks, but still its a kind of overkill for a small project, but definitely a great choice for scalability later on.

More packages could be used like React Query, Advanced Charts & Data Visualization libraries, bigger UI Frameworks if needed, Redux or Zustand for global state management.

Also, I for unit testing I think the best option since we've built our app using Vite is to use Vitest alongside with React Testing Library for compatibility because Jest for example doesn't integrate well with Vite.

But still this needs to be confirmed since I didn't use Vitest before so this is my first try.

This is an application showing basic data fetching & listing, applying navigation in a SPA & a sample of charts using recharts
