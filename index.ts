import { program } from 'commander';
import R from './resources/index';

const end = () => console.log("Goodbye.");

program
  .name('npm run socli')
  .description('A CLI for calculating the resources required to build a starfield outpost, with a description written by autopilot.')

program.command('list')
  .description('List all resources, use the ids in other commands')
  .argument('[a]', 'List all resources alphabetically')
  .action((a) => {
    console.log(`Here is a list of all resources${a ? ' alphabetically' : ''}:`)
    if(a){
      let min_len = 32;
      Object.values(R.all).sort((a, b) => a.name.localeCompare(b.name)).forEach((r, i) => {
        let base = `  ${r.name}: `;
        while(base.length < min_len - r.index.toString().length) base += ' ';
        console.log(`${base}${r.index}`);
      });
    } else {
      Object.values(R.all).forEach((r, i) => {
        console.log(`  ${r.index}: ${r.name}`);
      });
    }
    end();
  })

program.command('sum')
  .description('Sum the base components required for a resource')
  .argument('<index>', 'The index of the resource to sum')
  .action((index) => {
    let r = R.find(index);
    console.log(`You selected, '${r.name}'.`);
    console.log(`Here is the constant input required for ${r.name}:`, r.baseComponentsFormatted)
    end();
  });

program.command('map')
  .description('Map the components required for a resource')
  .argument('<index>', 'The index of the resource to map')
  .action((index) => {
    let r = R.find(index);
    console.log(`You selected, '${index}'.`);
    console.log(`Here is the component input map for ${r.name}:`)
    console.dir(r.formatted, { depth: null })
    end();
  })

program.parse();