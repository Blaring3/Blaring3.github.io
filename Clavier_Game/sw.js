self.addEventListener("fetch", (event) => {
    console.log(`fecth ${event.request.url}`);
});
