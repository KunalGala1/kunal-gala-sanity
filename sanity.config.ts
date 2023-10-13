import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'kunal-gala-website',
  title: `Kunal Gala's Website`,
  projectId: '7xjvixc8',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
