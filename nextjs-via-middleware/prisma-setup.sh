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

echo "--------------------------------------------------"
echo "Starting Prisma migration and client generation..."
echo "--------------------------------------------------"

# Step 1: Create a new migration and apply it.
# The --name flag specifies the migration name. Change "init" if desired.
echo "Running Prisma migration (migrate dev)..."
npx prisma migrate dev --name init

# Step 2: Regenerate the Prisma Client so that types and queries are up-to-date.
echo "Generating Prisma Client..."
npx prisma generate

echo "--------------------------------------------------"
echo "Prisma migration and client generation completed successfully."
echo "--------------------------------------------------"



rm -rf node_modules
npm install

npm run build
npm run start
