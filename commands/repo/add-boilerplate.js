const { createFolderIfItNotExists, getTemplateFolder, runTemplate } = require('../../lib');

// context would have all the relevant amplify CLI info/metadata/helper functions that are needed by the plugins
module.exports = {
  name: 'add-boilerplate',
  run: async (context) => {
    console.log('Adding Amplify repo boilerplate');
    const dir = './_templates';
    createFolderIfItNotExists(dir);
    await getTemplateFolder(`${dir}/new-project`,'https://github.com/d10l/new-project.git');
    await runTemplate(`${dir}/new-project`, ['new-project', 'new']);
  }
}