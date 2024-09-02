import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
import * as dotenv from "dotenv";

dotenv.config();

async function getResults() {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Accept: "application/vnd.github+json",
    Authorization: "Bearer " + process.env.token,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  let date1 = argv.a;
  let date2 = argv.b;

  const queryString =
    "q=" + encodeURIComponent(`pushed:${date1}..${date2}`) + "&sort=stars";

  let response = await fetch(
    "https://api.github.com/search/repositories?" + queryString,
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.text();
  //   console.log(argv);
  console.log(data);
}

getResults();
