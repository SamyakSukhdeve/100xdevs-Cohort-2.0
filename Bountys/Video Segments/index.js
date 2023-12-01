// Initialize video player
var player = videojs(
  "my-video",
  {
    controls: true,
    fluid: true,
    html5: {
      vhs: {
        overrideNative: true,
      },
    },
    muted: true,
  },
  function () {
    var player = this;
    player.eme();
    player.src({
      src: "https://cdn.bitmovin.com/content/assets/art-of-motion_drm/mpds/11331.mpd",
      type: "application/dash+xml",
      keySystems: {
        "com.widevine.alpha": "https://cwip-shaka-proxy.appspot.com/no_auth",
      },
    });

    player.ready(function () {
      player.tech(true).on("keystatuschange", function (event) {
        console.log("event: ", event);
      });
    });
  }
);

var chapters = [
  { time: 38, title: "one" },
  { time: 68, title: "Two" },
  { time: 128, title: "Three" },
  { time: 188, title: "Four" },
];

//Adding Chapters button
var chaptersContainer = document.querySelector(".chapters-container");
chapters.map((chapter, index) => {
  var button = document.createElement("button");
  button.className = "Chapter-button";
  button.textContent = chapter.title;
  button.addEventListener("click", function () {
    if (index > 0) {
      player.currentTime(chapters[index - 1].time);
    } else {
      player.currentTime(0);
    }
    player.play();
  });
  chaptersContainer.appendChild(button);
});

// Add keyboard controls
player.on("loadedmetadata", function () {
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      event.preventDefault();
      player.paused() ? player.play() : player.pause();
    } else if (event.code === "ArrowRight") {
      event.preventDefault();
      player.currentTime(player.currentTime() + 10);
    } else if (event.code === "ArrowLeft") {
      event.preventDefault();
      player.currentTime(player.currentTime() - 10);
    }
  });

  // Add chapter markers
  var totalDuration = player.duration();

  const seekbarParent = document.querySelector(
    ".vjs-control-bar .vjs-progress-control"
  );
  const seekbar = document.querySelector(
    ".vjs-control-bar .vjs-progress-control .vjs-progress-holder"
  );
  const chapterTitle = document.querySelector(
    ".vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-mouse-display"
  );
  seekbarParent.addEventListener("mouseenter", function () {
    seekbar.style.height = "7px";
  });
  seekbarParent.addEventListener("mouseleave", function () {
    seekbar.style.height = "5px";
  });

  chapters.map((chapter, index) => {
    const isLastElement = index === chapters.length - 1;
    const chapterElement = document.createElement("div");
    chapterElement.className = "chapter";
    if (index > 0) {
      chapterElement.style.width = `${
        (chapters[index].time * 100) / totalDuration -
        (chapters[index - 1].time * 100) / totalDuration
      }%`;
      var left = `${(chapters[index - 1].time * 100) / totalDuration}%`;
      if (isLastElement) {
        chapterElement.style.borderRight = "none";
        chapterElement.style.width = `calc(100% - ${
          (chapters[index - 1].time * 100) / totalDuration
        }%)`;
      }
    } else {
      chapterElement.style.width = `${
        (chapters[index].time * 100) / totalDuration
      }%`;
      var left = "0%";
    }
    chapterElement.addEventListener("mouseenter", function () {
      chapterTitle.innerText = chapters[index].title;
      chapterElement.style.backgroundColor = "darkgray";
    });
    chapterElement.addEventListener("mouseleave", function () {
      chapterElement.style.backgroundColor = "transparent";
    });
    chapterElement.style.left = left;
    seekbar.appendChild(chapterElement);
  });
});
