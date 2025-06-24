// Delay with a promise
// ==================================================

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Usage:
delay(3000).then(() => console.log('runs after 3 seconds'));