function message(callback) {
    console.log("Processing...");
    callback();
}

message(function() {
    console.log("Done");
});

message(() => {
    console.log("Task Completed");
});