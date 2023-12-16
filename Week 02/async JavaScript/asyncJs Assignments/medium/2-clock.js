function timer() {
    // Get the current time
    const currentDate = new Date();

    let currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    // Create a formatted time string
    const meridian = currentHours >= 12 ? "PM" : "AM";

    currentHours = currentHours % 12 || 12;
    const formattedMinutes = currentMinutes.toString().padStart(2, "0");
    const formattedSeconds = currentSeconds.toString().padStart(2, "0");

    // Create a formatted time string
    const formattedTime = `${currentHours}:${formattedMinutes}:${formattedSeconds} ${meridian}`;

    process.stdout.write(`\r${formattedTime}`);
  }

  setInterval(timer, 1000);