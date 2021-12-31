import { Link, Outlet, useLoaderData } from "remix";
import styles from "~/styles/syntax.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export let loader = async () => {
  const response = await fetch("https://syntax.fm/api/shows");
  const shows = await response.json();

  return {
    podcastName: "The Syntax Podcast",
    shows,
  };
};

export default function () {
  let { podcastName, shows } = useLoaderData();

  return (
    <div>
      <section>
        <h1>{podcastName}</h1>
      </section>
      <section className="cols">
        <aside>
          <nav>
            <ul>
              {shows.map((show) => (
                <li key={show.number}>
                  <Link to={`/syntax/${show.number}`}>
                    #{show.number}: {show.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <Outlet />
      </section>
    </div>
  );
}
