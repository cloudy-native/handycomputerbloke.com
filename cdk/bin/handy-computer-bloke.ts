#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { HandyComputerBlokeStack } from '../lib/handy-computer-bloke-stack';

const app = new App();

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
}

const tags = {
    owner: 'stephen',
    version: '0.0.1'
}

const stack = new HandyComputerBlokeStack(app, 'HandyComputerBlokeStack', {
    env,
    tags,
    domainName: 'handycomputerbloke.com',
});
