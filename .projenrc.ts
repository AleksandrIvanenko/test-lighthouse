import {OttofellerNextjsProject} from '@ottofeller/templates'

const project = new OttofellerNextjsProject({
  defaultReleaseBranch: 'main',
  devDeps: ['file:../templates'],
  name: 'test-pla-224',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
  // tailwind: true,          /* Setup Tailwind CSS as a PostCSS plugin. */
})

project.synth()
