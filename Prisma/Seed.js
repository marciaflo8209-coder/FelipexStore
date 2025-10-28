// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const argon2 = require('argon2');

const prisma = new PrismaClient();

async function main() {
  const username = process.env.CREATOR_USERNAME;
  const password = process.env.CREATOR_PASSWORD;

  if (!username || !password) {
    console.log('CREATOR_USERNAME or CREATOR_PASSWORD not set. Skipping seed.');
    return;
  }

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    console.log('Creator already exists. Skipping creation.');
    return;
  }

  const hash = await argon2.hash(password);
  await prisma.user.create({
    data: {
      username,
      passwordHash: hash,
      role: 'creator',
      balanceCents: 0
    }
  });
  console.log('Creator user created:', username);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
