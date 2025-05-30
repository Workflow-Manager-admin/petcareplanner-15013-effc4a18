#!/bin/bash
cd /home/kavia/workspace/code-generation/petcareplanner-15013-effc4a18/petcareplanner
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

