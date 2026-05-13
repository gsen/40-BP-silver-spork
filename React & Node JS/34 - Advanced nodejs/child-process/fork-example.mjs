process.on("message", (data) => {
    console.log("message received in child", data);

    process.send({
        msg: "report generated",
        status: true
    })
});