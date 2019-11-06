rm -rf node_modules

# install webapi-framework from git repo
npm i https://github.com/the-medicsoft/webapi-framework.git

# install dev dependencies
npm i --only=dev

# run npm audit
npm audit fix -f