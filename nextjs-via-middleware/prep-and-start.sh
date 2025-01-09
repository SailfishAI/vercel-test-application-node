#!/bin/bash

# Get the root directory of the git repository
GIT_ROOT=$(git rev-parse --show-toplevel)
if [ $? -ne 0 ]; then
  echo "This script must be run inside a Git repository."
  exit 1
fi

# Function to publish dependent npm packages
function prepare_shared_packages_npm() {
  "$GIT_ROOT/build_and_publish_local_npm_dockercompose.sh" \
    "$GIT_ROOT/veritas/js-ts-record"
}

# Function to uninstall & install the @sailfish/sf-veritas library
function reinstall_sailfish_jsts_backend_package() {
  echo "Uninstalling @sailfish/sf-veritas..."
  npm uninstall @sailfish/sf-veritas

  echo "Installing @sailfish/sf-veritas..."
  npm install @sailfish/sf-veritas
}

# Prepare npm packages
prepare_shared_packages_npm

# Uninstall and reinstall @sailfish/sf-veritas
reinstall_sailfish_jsts_backend_package

# Start the application
npm run dev
