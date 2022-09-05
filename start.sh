#!/bin/bash
rm -R .docs
rm -R .blog
mkdir Resources
mkdir .blog
cp docs/releases/* .blog
cp docs/* Resources
rm -R .docs/releases
docusaurus start
