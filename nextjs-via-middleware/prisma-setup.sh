#!/bin/bash
# prisma-setup.sh
#
# This script applies the Prisma migration and regenerates the Prisma Client.
#
# Usage:
#   chmod +x prisma-setup.sh
#   ./prisma-setup.sh

# Exit immediately if a command exits with a non-zero status.
set -e


rm -rf .next node_modules
npm install

echo "--------------------------------------------------"
echo "Starting Prisma migration and client generation..."
echo "--------------------------------------------------"

# Step 1: Create a new migration and apply it.
# The --name flag specifies the migration name. Change "init" if desired.
echo "Running Prisma migration (migrate dev)..."
npx prisma migrate dev --name init
npx prisma migrate dev --name add_user_foreign_key

npm run build
npm run start

echo "--------------------------------------------------"
echo "Prisma migration and client generation completed successfully."
echo "--------------------------------------------------"
