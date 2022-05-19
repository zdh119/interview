#!/usr/bin/env sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mPushing to GitHub...\033[0m\n"

# Add changes to git.
git add .

# Commit changes.
msg="Published on $(date +'%Y-%m-%d %H:%M:%S')"
if [ -n "$*" ]; then
    msg="$*"
fi
git commit -m "$msg"

git push