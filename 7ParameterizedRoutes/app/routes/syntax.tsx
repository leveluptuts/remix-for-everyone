import { Link, Outlet, useLoaderData } from "remix";

export let loader = () => {
  return {
    podcastName: "The Syntax Podcast",
    episodes: [
      {
        title: "Episode 1",
        link: "episode-1",
      },
      {
        title: "Episode 2",
        link: "episode-2",
      },
    ],
  };
};

export default function () {
  let { podcastName, episodes } = useLoaderData();

  return (
    <div>
      <section>
        <h1>{podcastName}</h1>
      </section>
      <aside>
        <nav>
          <ul>
            {episodes.map((episode) => (
              <li key={episode.link}>
                <Link to={`/syntax/${episode.link}`}>{episode.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}
