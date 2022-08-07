# Demo GitHub API with IaC Project

The GutHub API seemed the simplest way to satisfy this. With regards choice of IaC, AWS CDK is all the rage these days so this gave me the opportunity for some more hands on practice with it.

## Prerequisites

I am assuming that you already have an AWS account configured on your machine and have downloaded and installed the CLI and CDK. Official documentation for procuring the above can be found here:

* `AWS CLI`   https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
* `AWS CDK`   https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html
* `AWS auth`   https://cdkworkshop.com/15-prerequisites/200-account.html

## Deployment

Once you have checked out the code onto a machine with the above prerequisites met, simply run setup and deploy as described below.

## Test

Open up test.http and click play. Enjoy!

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npm run setup`   installs dependencies and provisions environment
* `npm run deploy`  deploys code to AWS
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
* `cdk bootstrap`   provisions your AWS environment for first time use (running deploy without this may give an error)
