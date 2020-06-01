#!/usr/bin/env node

const process = require("child_process");
const { popUpPrompt } = require("../lib/yarmo");

const argv = require("yargs").demandCommand(0).argv;
const [filePath] = argv._;
const packageJsonPath = filePath || "./package.json";

popUpPrompt(packageJsonPath).then((taskName) => {
  process.spawn("yarn", [taskName], { stdio: "inherit" });
});
