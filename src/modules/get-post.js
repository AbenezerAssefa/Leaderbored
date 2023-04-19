export const getData = async () => {

  const request = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zu9tvVb9B49dMIEKVXAX/scores");
  const data = await request.json();
  data.result.sort((a, b) => {
    return b.score - a.score;
  });

  const getContent = async (data) => {
    data.result.forEach((item) => {
      document.querySelector(".scores").innerHTML += `
              <p>🧑‍🚀 ${item.user} : ${item.score}</p>
          `;
    });
  };

  getContent(data);
};


export const postData = async (obj) => {
    
    const content = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zu9tvVb9B49dMIEKVXAX/scores", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: obj.name,
        score: obj.score,
      }),
    });
    const afterContent = await content.json();
    return afterContent;
  };
