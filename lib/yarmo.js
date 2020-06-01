const { AutoComplete } = require("enquirer");
const readJson = require("read-package-json");
const { CHOOSING_TASK_SUGGESTION } = require("./constants");

const getTaskNames = async (path) => {
  return new Promise((resolve, reject) => {
    readJson(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        return resolve(Object.keys(data.scripts || {}));
      }
    });
  }).catch((err) => {
    console.error("There was an error reading package.json.");
  });
};

const createPrompt = (tasks) => {
  return new AutoComplete({
    name: "task",
    message: CHOOSING_TASK_SUGGESTION,
    limit: 10,
    initial: 0,
    choices: tasks,
  });
};

const popUpPrompt = async (packageJsonPath) => {
  const tasks = await getTaskNames(packageJsonPath);
  return new Promise((resolve, reject) => {
    if (tasks.length !== 0) {
      const prompt = createPrompt(tasks);
      prompt
        .run()
        .then((task) => resolve(task))
        .catch(reject);
    } else {
      reject();
    }
  });
};

module.exports = {
  popUpPrompt,
};
