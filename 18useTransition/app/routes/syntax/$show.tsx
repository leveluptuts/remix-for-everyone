import { useLoaderData, json, redirect } from "remix";
import type { LoaderFunction } from "remix";
import styles from "~/styles/syntax/show.css";
import { padNumber } from "~/utils/pad";

export interface Show {
  number: number;
  title: string;
  html: string;
  url: string;
}

// Set <link> tags for this page.
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

// Sets the meta data for a route
export function meta() {
  return {
    title: "The Syntax Podcast",
    "og:title": "The Syntax Podcast",
  };
}

export function headers() {
  // return http headers
  // most common use is caching
}

// Action
// handle data mutations or other actions.
// same api as a loader, called when a post, put, patch, delete request is made.
export function action() {
  // Most common use is for forms.
}

// incoordination with useMatches()
export const handle = {
  // object you can put anything in.
};

// Server only loader function
export let loader: LoaderFunction = async ({ params }) => {
  let showNumber = params.show;

  if (showNumber?.length < 3) {
    //  Pad number
    showNumber = padNumber(showNumber);
    // Redirect
    return redirect(`/syntax/${showNumber}`, 301);
  }

  const response = await fetch("https://syntax.fm/api/shows/" + showNumber);
  const show = await response.json();
  if (!show.url) {
    // Throw a 404
    throw json("Not found", { status: 404 });
  }

  return show;
};

export default function () {
  const show = useLoaderData<Show>();

  return (
    <section className="show-details">
      <h1>
        #{show.number}: {show.title}
      </h1>
      <audio controls src={show.url}></audio>
      <div dangerouslySetInnerHTML={{ __html: show.html }} />
    </section>
  );
}
