#! /usr/bin/python
import os
import sys
m3u8 = sys.argv[1]
print m3u8
os.system('ffmpeg -i ' + m3u8);