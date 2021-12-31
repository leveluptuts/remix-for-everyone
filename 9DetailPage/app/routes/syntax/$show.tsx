import { useLoaderData } from "remix";

export let loader = async ({ params }) => {
  const response = await fetch("https://syntax.fm/api/shows/" + params.show);
  return response.json();
};

export default function () {
  const show = useLoaderData();

  return (
    <section>
      <h1>
        #{show.number}: {show.title}
      </h1>
      <audio controls src={show.url}></audio>
      <div dangerouslySetInnerHTML={{ __html: show.html }} />
    </section>
  );
}
