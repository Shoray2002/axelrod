let data = [
  {
    "Rank": 1337,
    "PlayerName": "Check back after contest starts!",
    "Points": 1337
  }
]
let x = data
  .map(function (item) {
    return `
        <tr>
        <td>${item.Rank}</td>
        <td>${item.PlayerName}</td>
        <td>${item.Points}</td>
        </tr>
    `;
  })
  .join("");

document.querySelector("table").innerHTML =
  "<tr><th>Rank</th><th>Player Name</th><th>Points</th></tr>" + x;
