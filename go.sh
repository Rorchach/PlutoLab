#!/bin/sh
sublime ./ && python server.py | open -a "/Applications/Google Chrome.app" 'http://localhost:8987/'$1