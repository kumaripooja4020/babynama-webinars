# Babynama Intern Assignment - Webinars Page

This project implements the "Upcoming Live Webinars" feature as part of the Babynama Frontend Intern Assignment.

## Live URL

https://babynama-webinars-ri63.vercel.app/webinars

## Choices Made

I made the technical choice to separate the display of each webinar into its own `WebinarCard` component. This decision was driven by the principles of modularity and reusability. By creating a dedicated component, the main `/webinars` page component (`page.tsx`) remains cleaner and more focused on fetching and mapping the data. It also makes the individual webinar cards easier to style and maintain independently, improving the overall organization and readability of the codebase.

Additionally, I chose to use Tailwind CSS for styling. This allowed for rapid development of a responsive and visually appealing UI directly within the JSX, leveraging utility classes to manage layout, spacing, and typography efficiently.

## Roadblock & Learning

I encountered a couple of key roadblocks that significantly enhanced my understanding of Next.js with the App Router:

1.  **Client vs. Server Components:** Initially, my "View Details" button, which uses an `onClick` event handler, was causing a runtime error (`"Error: Event handlers cannot be passed to Client Component props."`). This was because components in the Next.js App Router are Server Components by default and don't support client-side interactivity without explicit declaration. I solved this by adding the `'use client';` directive at the very top of my `app/webinars/page.tsx` file, signaling to Next.js that this component and its children should be rendered on the client side, thus enabling event handling.

2.  **External Script Loading and Unescaped Entities:** During Vercel deployment, I faced errors related to "Synchronous scripts should not be used" for Tailwind CSS and "react/no-unescaped-entities" for an apostrophe in my text content (`what's`). I learned that for external scripts like Tailwind's CDN in a simplified environment, a standard `<script>` tag was more appropriate than `next/script` to avoid build issues. For the unescaped apostrophe, I corrected it by using the HTML entity `&apos;` within the JSX text, adhering to React's stricter syntax for special characters.

These challenges helped me grasp important nuances of the Next.js development environment and best practices for robust component creation and deployment.

## Screenshot

![Screenshot of Webinars Page UI] ( https://github.com/user-attachments/assets/feba668a-ce21-41a6-bc32-b9cf7a68bd35 )

