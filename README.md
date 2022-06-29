# PhotoStore
A react-native App to view image list and detail for image.

## Requirements
Node.js installed on your environement.

#### Node installation on Linux using NVM
To download and install the nvm script run:
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

#### Add NVM to Path
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

#### Install and verify node
    nvm --version
    nvm install node
    node --version
    nvm install 16.13.2
    nvm use 16
#### Install YARN
    npm -i g yarn

## Project Installation
    $ git clone git@github.com:Shikharai343/PhotoStore.git
    $ cd PhotoStore
    $ yarn install

## Scripts application
    $ yarn start (to start the server)
    $ yarn android (to run android app before that sync gradle)
    $ yarn ios (to run ios app before this run `yarn pod:install` to install pods)
    $ yarn test (to run test cases)
