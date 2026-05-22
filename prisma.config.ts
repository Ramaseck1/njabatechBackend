import { defineConfig } from 'prisma/config';

export default {
  schema: './prisma/schema.prisma',
  output: './src/generated/prisma'  // ← chemin custom
}