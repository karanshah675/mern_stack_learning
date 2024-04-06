function createCard(title, channelName, views, monthOld, duration, thumbnail) {
  let cont = document.getElementsByClassName("container")[0];
  //main-card
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  //image-section
  let image = document.createElement("div");
  image.setAttribute("class", "image");
  let img = document.createElement("img");
  img.setAttribute("src", thumbnail);
  let timeLine = document.createElement("p");
  timeLine.innerText = duration;
  timeLine.setAttribute("class", "time-line");
  //content-section
  let content = document.createElement("div");
  content.setAttribute("class", "content");
  //main-title
  let mainTitle = document.createElement("article");
  mainTitle.innerText = title;
  mainTitle.setAttribute("class", "main-title");
  //sub-title
  let subTitle = document.createElement("div");
  subTitle.setAttribute("class", "sub-title");
  let chnlName = document.createElement("p");
  chnlName.innerText = channelName;
  chnlName.setAttribute("class", "channel-name");
  let chnlViews = document.createElement("p");
  chnlViews.innerText = ` • ${viewsFind(views)}`;
  chnlViews.setAttribute("class", "views");
  let time = document.createElement("p");
  time.innerText = ` • ${monthOld}`;
  time.setAttribute("class", "time");

  cont.append(card);
  card.append(image);
  card.append(content);

  image.append(img);
  image.append(timeLine);

  content.append(mainTitle);
  content.append(subTitle);

  subTitle.append(chnlName);
  subTitle.append(chnlViews);
  subTitle.append(time);
}
function viewsFind(views) {
  if (views > 1000) {
    if (views < 1000000) {
      return Math.floor(views / 1000) + "K";
    } else if (views < 1000000000) {
      return Math.floor(views / 1000000) + "M";
    } else if (views < 100000000000) {
      return Math.floor(views / 1000000000) + "B";
    } else {
      return Math.floor(views / 100000000000) + "T";
    }
  } else {
    return views;
  }
}

createCard(
  "sigma",
  "code-withharry",
  210000,
  "2 months",
  "12:33",
  "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg"
);
createCard(
  "sigma",
  "code-withharry",
  210000,
  "2 months",
  "12:33",
  "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg"
);
